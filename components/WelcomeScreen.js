import { View, Text} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';

export default function WelcomeScreen() {

    return (
        <View style={GlobalStyles.welcomeContainer}>
            <Text style={GlobalStyles.welcomeTitle}>
                Welcome to Little Lemon
            </Text>

            <Text style={GlobalStyles.welcomeSubtitle}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>

        </View>
    );
};