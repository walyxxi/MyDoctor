import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GetStarted, Login, Register, Splash, UploadPhoto} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Doctor" />
      <Tab.Screen name="Messages" />
      <Tab.Screen name="Hospitals" />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
