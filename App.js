import { StyleSheet, View } from 'react-native';
import React from 'react';
import AddForm from './Screens/AddForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './Screens/MainPage';
import EditForm from './Screens/EditForm';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer initialRouteName="Home" style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={MainPage} />
        <Stack.Screen name='AddTask' component={AddForm} />
        <Stack.Screen name='EditForm' component={EditForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }





});
