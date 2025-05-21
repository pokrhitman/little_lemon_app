import { ScrollView, View } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import WelcomeCard from "../components/WelcomeCard";
import { ThemeContext } from '../theme/ThemeContext';
import { useContext } from "react";

export default function HomeScreen() {
    const { theme } = useContext(ThemeContext);

    return (
        <ScrollView
            style={{ backgroundColor: theme.colors.background }}

            contentContainerStyle={{
                paddingVertical: 40,
                paddingHorizontal: 30,
                alignItems: 'center',
            }}
        >

            <View
                style={[
                    GlobalStyles.welcomeContainer,
                    {
                        backgroundColor: theme.colors.background,
                        width: '100%',
                        maxWidth: 600
                    }
                ]}
            >
                <WelcomeCard />
            </View>

        {/*<PromoBanner /> */}
        
        </ScrollView>
    );
}