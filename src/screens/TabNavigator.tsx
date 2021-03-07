import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import SettingsScreen from "./SettingsScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Chains"
          component={MainScreen}
          options={{ tabBarBadge: 3 }}
        ></Tab.Screen>
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ tabBarBadge: 2 }}
        ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
