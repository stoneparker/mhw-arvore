import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

import Home from '../pages/Home';
import Themes from '../pages/Themes';

import HomeHeader from '../components/HomeHeader';
import BtnHeader from '../components/BtnHeader';

const AppStack = createStackNavigator();

const Routes = () => {
   return (
      <NavigationContainer>
         <AppStack.Navigator screenOptions={{
            cardStyle: { backgroundColor: '#F3F3F3'},
            headerStyle: {
               height: 120,
               elevation: 1
            },
            headerTitle: '',
            headerLeft: (props) => (
               <BtnHeader 
                  color="#D9EFF2"
                  style={{ marginLeft: 30 }}
                  {... props}
               >
                  <Feather name="arrow-left" color="#3D3D3D" size={20} />
               </BtnHeader>
            )
         }}>
            <AppStack.Screen 
               name="Home" 
               component={Home} 
               options={{ 
                  header: (props) => (
                     <HomeHeader />
                  )
               }} 
            />
            <AppStack.Screen name="Themes" component={Themes} />
         </AppStack.Navigator>
      </NavigationContainer>

   )
}

export default Routes;