import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/theme/ThemeContext';
import RootNavigator from './src/navigation/RootNavigator';
import GlobalStyles from './src/styles/GlobalStyles';
import { SafeAreaView } from 'react-native';

export default function App() {
    return (
        <ThemeProvider>
            <SafeAreaView style={GlobalStyles.safeArea}>
                <NavigationContainer>
                    <RootNavigator />
                </NavigationContainer>
            </SafeAreaView>
        </ThemeProvider>
    );
}