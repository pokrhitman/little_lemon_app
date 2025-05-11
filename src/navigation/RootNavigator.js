import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import LoginScreen from '../screens/LoginScreen';
import LittleLemonFooter from '../components/LittleLemonFooter';
import LittleLemonHeader from '../components/LittleLemonHeader';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {

    return (
        <>
            <LittleLemonHeader />

            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { height: 60 },
                    tabBarLabelStyle: { fontSize: 14 },
                }}
            >

                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Menu" component={MenuScreen} />
                <Tab.Screen name="Feedback" component={FeedbackScreen} />
                <Tab.Screen name="Login" component={LoginScreen} />

            </Tab.Navigator>

            <LittleLemonFooter />
        </>
    );
}
