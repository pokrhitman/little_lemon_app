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
                        if (route.name === 'HomeTab') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'MenuTab') {
                            iconName = focused ? 'restaurant' : 'restaurant-outline';
                        } else if (route.name === 'FeedbackTab') {
                            iconName = focused ? 'chatbox' : 'chatbox-outline';
                        } else if (route.name === 'LoginTab') {
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

                <Tab.Screen name="HomeTab" component={HomeStack} />
                <Tab.Screen name="MenuTab" component={MenuStack} />
                <Tab.Screen name="FeedbackTab" component={FeedbackScreen} />
                <Tab.Screen name="LoginTab" component={LoginScreen} />

            </Tab.Navigator>
            <LittleLemonFooter />
        </>
    );
}
