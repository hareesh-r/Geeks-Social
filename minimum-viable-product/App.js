import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./Components/dashboard";
import LoginScreen from "./Components/loginScreen";
import { View, Text, Button } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Dashboard}
          options={{
            title: "Dashboard",
			headerRight: ()=>(
				<Button
					onPress={() => alert('Profile Page under Construction Wait!')}
					title="Info"
					color="#fff"
			  />
			),
			headerStyle: {
				backgroundColor: "#f4511e",
				height:40
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
			  },
			 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
