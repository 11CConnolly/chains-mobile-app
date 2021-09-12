import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChainsScreen from "./ChainsScreen";
import { NavigationContainer } from "@react-navigation/native";
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
        <Tab.Screen name="Chains" component={ChainsScreen}></Tab.Screen>
        <Tab.Screen name="Milestones" component={MilestonesScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
