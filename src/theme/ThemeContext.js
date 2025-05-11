import {createContext, useState, useEffect} from 'react';
import { Appearance } from 'react-native';
import { lighTheme, darkTheme } from './themes';

export const ThemeContext = createContext({
    theme: lighTheme,
    toggle: () => {},
});

export function ThemeProvider({ children}) {
    const colorScheme = Appearance.getColorScheme();
    const [theme, setTheme] = useState(
        colorScheme === 'dark' ? darkTheme: lighTheme
    );

    useEffect(() => {
        const sub = Appearance.addChangeListener(({colorScheme}) => {
            setTheme(colorScheme === 'dark' ? darkTheme: lightTheme);
        });
        return () => sub.remove();
    }, []);

    const toggle = () => {
        setTheme((t) => (t === lightTheme ? darkTheme : lightTheme));
    };

    return (
        <ThemeContext.Provider value ={{ theme, toggle}}>
            {children}
        </ThemeContext.Provider>
    );
}