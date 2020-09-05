import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

import Home from '../pages/Home';
import Scripts from '../pages/Scripts';
import YourStories from '../pages/YourStories';
import StoryHome from '../pages/StoryHome';
import ScriptHome from '../pages/ScriptHome';
import Story from '../pages/Story';
import Script from '../pages/Script';
import Reward from '../pages/Reward';
import Profile from '../pages/Profile';

import HomeHeader from '../components/HomeHeader';
import BtnHeader from '../components/BtnHeader';

const AppStack = createStackNavigator();

const Routes = () => {
   return (
      <NavigationContainer>
         <AppStack.Navigator screenOptions={{
            cardStyle: { backgroundColor: '#F3F3F3'},
            headerStyle: {
               height: 100,
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
                  header: () => (
                     <HomeHeader />
                  ),
                  headerStyle: {
                     height: 120
                  }
               }} 
            />
            <AppStack.Screen name="Scripts" component={Scripts} />
            <AppStack.Screen name="YourStories" component={YourStories} />
            <AppStack.Screen name="StoryHome" component={StoryHome} />
            <AppStack.Screen name="ScriptHome" component={ScriptHome} />
            <AppStack.Screen name="Story" component={Story} />
            <AppStack.Screen name="Script" component={Script} />
            <AppStack.Screen name="Reward" component={Reward} options={{ headerShown: false }} />
            <AppStack.Screen name="Profile" component={Profile} />
         </AppStack.Navigator>
      </NavigationContainer>

   )
}

export default Routes;