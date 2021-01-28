
import React, { useContext } from 'react';
import 'react-native-gesture-handler';
import Home from './app/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from './app/screens/Favorites';
import GlobalState from './app/GlobalState';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from './app/theme/Colors';
import Search from './app/screens/Search';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetails from './app/screens/MoviesDetails';
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
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'Favorites') {
              iconName = 'star';
            }
            else if (route.name === 'Search') {
              iconName = 'search-web';
            }


            // You can return any component that you like here!
            return <Icon name={iconName} size={30} color={Colors.lightblue} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.lightblue,
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
