import React from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const Home = () => {

   const { navigate } = useNavigation();

   return (
     <View>
         <Image 
            source={require('../../assets/logo.png')}
            style={{ width: 60, height: 80, backgroundColor: '#ff0' }} 
            resizeMode="contain" 
         />
         <TouchableOpacity onPress={() => { navigate('Themes') }}>
            <Text>teste</Text>
         </TouchableOpacity>
      </View>
   );
}

export default Home;