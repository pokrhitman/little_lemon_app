import { createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuScreen from '../screens/MenuScreen';
import MenuItemDetail from '../screens/MenuItemDetail';

const Stack = createNativeStackNavigator();

export default function MenuStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false}} />
            <Stack.Screen name="MenuItemDetail" component={MenuItemDetail} options={{ title: "Dish Details"}} />
        </Stack.Navigator>
    );
}