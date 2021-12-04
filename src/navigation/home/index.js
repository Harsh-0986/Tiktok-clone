import React from "react";
import { Platform, SafeAreaView, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";
import CameraScreen from "../../screens/camera";
import Profile from "../../screens/profile";
import SearchScreen from "../../screens/search";
import FeedScreen from "../../screens/feed";

const Tab = createMaterialBottomTabNavigator();

const EmptyScreen = () => {
  return <SafeAreaView />;
};

export default function HomeScreen() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "black" }}
      initialRouteName="Feed"
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      {Platform.OS !== "web" ? (
        <Tab.Screen
          name="Add"
          component={CameraScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="plus-square" size={24} color={color} />
            ),
          }}
        />
      ) : null}
      <Tab.Screen
        name="Inbox"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="users" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
