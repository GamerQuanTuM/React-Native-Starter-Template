import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons } from "@expo/vector-icons";
import Index from "./index";
import Explore from "./explore";

const Tabs = createBottomTabNavigator();

export default function TabsLayout() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        component={Index}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        component={Explore}
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
