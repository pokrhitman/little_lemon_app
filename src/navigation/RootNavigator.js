import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStack from '../navigation/HomeStack';
import MenuStack from '../navigation/MenuStack';
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
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Menu') {
                            iconName = focused ? 'restaurant' : 'restaurant-outline';
                        } else if (route.name === 'Feedback') {
                            iconName = focused ? 'chatbox' : 'chatbox-outline';
                        } else if (route.name === 'Login') {
                            iconName = focused ? 'person' : 'person-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#F4CE14',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabelStyle: { fontSize: 13, fontWeight: '600' },
                    tabBarStyle: { height: 60, paddingBottom: 5 },
                    tabBarHideOnKeyboard: true
                })}
            >

                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Menu" component={MenuStack} />
                <Tab.Screen name="Feedback" component={FeedbackScreen} />
                <Tab.Screen name="Login" component={LoginScreen} />

            </Tab.Navigator>
            <LittleLemonFooter />
        </>
    );
}
