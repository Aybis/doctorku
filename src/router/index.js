import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  GetStarted,
  Splash,
  Register,
  RegisterDoctor,
  Login,
  UploadPhoto,
  Home,
  Messages,
  Hospitals,
  ListDoctors,
  Chat,
  UserProfile,
  EditProfile,
  ProfileDoctor,
  EditProfileDoctor,
  MessageDoctor,
  ChatDoctor,
} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
import { getData } from '../utils';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Hospitals" component={Hospitals} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterDoctor"
        component={RegisterDoctor}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListDoctors"
        component={ListDoctors}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatDoctor"
        component={ChatDoctor}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfileDoctor"
        component={EditProfileDoctor}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileDoctor"
        component={ProfileDoctor}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
