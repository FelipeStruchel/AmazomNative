import Cart from '../views/cart'
import Home from '../views/home'
import Login from '../views/login'
import Menu from '../views/menu'
import Profile from '../views/profile'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'
const Tab = createBottomTabNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'black',
                    tabBarLabelStyle: {
                        width: '100%',
                        flex: 1,
                        fontWeight: 'bold',
                        fontSize: 16,
                        lineHeight: 21,
                        paddingTop: 5,
                        backgroundColor: 'white'
                    },
                    tabBarStyle: {
                        width: '100%',
                        height: 80,
                        lineHeight: 21
                    },
                    tabBarIconStyle: {
                        paddingTop: 10
                    },
                    headerShown: false
                }}
            >
                <Tab.Screen name='Home' component={Home} options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size}/>
                }}/>
                <Tab.Screen name='Profile' component={Profile} options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size}/>
                }}/>
                <Tab.Screen name='Cart' component={Cart} options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size}/>
                }}/>
                <Tab.Screen name='Menu' component={Menu} options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size}/>
                }}/>
                <Tab.Screen name='Login' component={Login} options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size}/>
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}