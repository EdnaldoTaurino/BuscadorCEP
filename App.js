import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from './src/buscarCep/HomeScreen';
import {SearchCep} from './src/buscarCep/SearchCep';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Tela Inicial" component={HomeScreen} />
        <Stack.Screen name="Cep" component={SearchCep} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
