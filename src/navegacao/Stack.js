import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import TelaA from "../Views/TelaA";
import TelaB from "../Views/TelaB";
import TelaC from "../Views/TelaC";

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="TelaA" screenOptions={{headerShown: true}}>
        <Stack.Screen name="TelaA" 
        options={{title: 'Informações iniciais'}}
        component={TelaA}></Stack.Screen>
        <Stack.Screen name="TelaB" component={TelaB}></Stack.Screen>
        <Stack.Screen name="TelaC" component={TelaC}></Stack.Screen>
        
    </Stack.Navigator>
)
