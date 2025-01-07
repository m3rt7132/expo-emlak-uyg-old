import * as React from 'react';
import { Button, PaperProvider } from 'react-native-paper';
import { mdiAccount } from '@mdi/js';
import Home from './Home';
import { createStackNavigator } from '@react-navigation/stack';
import Reading from './Reading';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ title: "Kitaplar" }} />
          <Stack.Screen name="Reading" component={Reading} options={{ title: "Kitap Okuma" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}