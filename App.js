
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './store';

// screens
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      
        <NavigationContainer>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component ={HomeScreen} options={{headerShown: false}} />
              <Stack.Screen name="MapScreen" component ={MapScreen} options={{headerShown: false}} />
            </Stack.Navigator>
          </SafeAreaProvider>
        </NavigationContainer>
     
    </Provider>
  );
}


