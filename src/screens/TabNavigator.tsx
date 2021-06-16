import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "./MainScreen";
import { NavigationContainer } from "@react-navigation/native";
import SettingsScreen from "./SettingsScreen";
import { Ionicons } from "@expo/vector-icons";
import { ALIZARIN_RED } from "../common/styles";
import MilestonesScreen from "./MilestonesScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case "Chains":
                iconName = focused ? "link" : "link-outline";
                break;
              case "Settings":
                iconName = focused ? "settings-sharp" : "settings-outline";
                break;
              case "Milestones":
                iconName = focused ? "ribbon" : "ribbon-outline";
                break;
              case "Charts":
                iconName = focused ? "bar-chart" : "bar-chart-outline";
                break;
              case "Calendar":
                iconName = focused ? "calendar" : "calendar-outline";
                break;
              case "Account":
                iconName = focused ? "person" : "person-outline";
                break;
              default:
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: ALIZARIN_RED,
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Chains" component={MainScreen}></Tab.Screen>
        <Tab.Screen name="Milestones" component={MilestonesScreen}></Tab.Screen>
        <Tab.Screen name="Settings" component={SettingsScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
