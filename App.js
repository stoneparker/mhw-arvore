import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';

import { 
  FredokaOne_400Regular, 
  Ubuntu_400Regular, 
  Ubuntu_700Bold, 
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from '@expo-google-fonts/dev';

import Routes from './src/routes/app.routes';

export default function App() {

  let [fontsLoaded] = useFonts({
    FredokaOne_400Regular,
    Ubuntu_400Regular,
    Ubuntu_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }


  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}
