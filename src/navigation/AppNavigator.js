// src/navigation/AppNavigator.js
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CustomDrawerContent from '../components/CustomDrawerContent';

// Screens
import DashboardScreen from '../screens/DashboardScreen';
import EntregasScreen from '../screens/EntregasScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RobotDetailScreen from '../screens/RobotDetailScreen';
import RobotListScreen from '../screens/RobotListScreen';
import SensorsScreen from '../screens/SensorsScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const RobotStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RobotList" component={RobotListScreen} />
        <Stack.Screen name="RobotDetail" component={RobotDetailScreen} />
    </Stack.Navigator>
);

const MainDrawer = () => (
    <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
            headerShown: false,
            drawerActiveTintColor: '#6200ee',
            drawerInactiveTintColor: '#333',
        }}
    >
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
        <Drawer.Screen name="Robôs" component={RobotStack} />
        <Drawer.Screen name="Entregas" component={EntregasScreen} />
        <Drawer.Screen name="Sensores" component={SensorsScreen} />
        <Drawer.Screen name="Perfil" component={ProfileScreen} />
    </Drawer.Navigator>
);

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Main" component={MainDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;