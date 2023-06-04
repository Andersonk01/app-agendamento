import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SettingPage } from "./pages/Setting";
import { FeedPage } from "./pages/Feed";
import { Home } from "./pages/Home";

import Ionicons from "@expo/vector-icons/Ionicons";

const TabBar = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <TabBar.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#f39b8b", //* compartilha com todos os 'filhos' q reaproveitam
          tabBarInactiveTintColor: "#ddaba2", //* quando nao estiver selecionado
          tabBarShowLabel: true,
          // tabBarStyle: {
          //   backgroundColor: "green",
          // },
          // tabBarStyle: {
          //   flex: 1,
          //   backgroundColor: "red",
          //   borderWidth: 0,
          //   elevation: 1,
          // },
        }}
      >
        <TabBar.Screen
          name="Home"
          component={Home}
          options={{
            tabBarStyle: {
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: [{ translateX: -150 }],
              width: 300,

              margin: 0,
              padding: 0,
              borderWidth: 0,
              borderTopWidth: 0,
              borderRadius: 24,
              elevation: 10,
              backgroundColor: "#f39",
            },

            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name="home" size={size + 4} color={color} />;
              }
              return <Ionicons name="home-outline" size={size} color={color} />;
            },
          }}
        />
        <TabBar.Screen
          name="Settings"
          component={SettingPage}
          options={{
            tabBarStyle: {
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: [{ translateX: -150 }],
              width: 300,

              margin: 0,
              padding: 0,
              borderWidth: 0,
              borderTopWidth: 0,
              borderRadius: 24,
              elevation: 10,
              backgroundColor: "#f39",
            },
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return (
                  <Ionicons name="settings" size={size + 4} color={color} />
                );
              }
              return (
                <Ionicons name="settings-outline" size={size} color={color} />
              );
            },
          }}
        />
        <TabBar.Screen
          name="Feed"
          component={FeedPage}
          options={{
            tabBarStyle: {
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: [{ translateX: -150 }],
              width: 300,

              margin: 0,
              padding: 0,
              borderWidth: 0,
              borderTopWidth: 0,
              borderRadius: 24,
              elevation: 10,
              backgroundColor: "#f39",
            },
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return (
                  <Ionicons name="newspaper" size={size + 4} color={color} />
                );
              }
              return (
                <Ionicons name="newspaper-outline" size={size} color={color} />
              );
            },
          }}
        />
      </TabBar.Navigator>
    </NavigationContainer>
  );
}
