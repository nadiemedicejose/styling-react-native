import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './src/components/HomeScreen';
import { DetailsScreen } from './src/components/DetailsScreen';
import { Logo } from './src/components/Logo';

const styles = StyleSheet.create({
    appContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    logo: {},
    navigator: {
        flex: 1,
    },
})

export default function App() {

  const Stack = createStackNavigator();

  return (
      <View style={styles.appContainer}>
          <NavigationContainer>
              <Logo />

              <Stack.Navigator style={styles.navigator}>
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="Details" component={DetailsScreen} />
              </Stack.Navigator>
          </NavigationContainer>
      </View>
  );
}
