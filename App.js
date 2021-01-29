import 'react-native-gesture-handler';
import React from 'react';
import { Favorites, Home, MovieDetails, Search } from "./app/screens/";

import Colors from './app/theme/Colors';
import GlobalState from './app/GlobalState';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="MovieDetails" component={MovieDetails} />
    </HomeStack.Navigator>
  );
}
const SearchStack = createStackNavigator();
const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
      <SearchStack.Screen name="MovieDetails" component={MovieDetails} />
    </SearchStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {

            let routeIcons = {
              'Home': 'home',
              'Favorites': 'heart',
              'Search': 'search-web'
            }
            // You can return any component that you like here!
            return <Icon name={routeIcons[route.name]} size={30} color={Colors.primaryColor} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.primaryColor,
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
const App = () => {

  return (
    <GlobalState>
      <MainNavigation />
    </GlobalState>


  );
}

export default App;
