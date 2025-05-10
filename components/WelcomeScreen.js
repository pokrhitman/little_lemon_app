import { View, Image, Text} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import logo from '../assets/logo.png';

export default function WelcomeScreen() {

    return (
        <View style={GlobalStyles.welcomeContainer}>

            <View style={GlobalStyles.welcomeHeader}>
            <Image style={GlobalStyles.logo} 
            source={logo} 
            resizeMode='center'
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'}
            />
            <Text style={GlobalStyles.welcomeTitle}>
                Welcome to Little Lemon
            </Text>
            </View>

            <Text style={GlobalStyles.welcomeSubtitle}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </View>
    );
};