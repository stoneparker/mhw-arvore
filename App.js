import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FredokaOne_400Regular, Ubuntu_400Regular, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/dev';
import { AppLoading } from 'expo';

import Routes from './src/routes/app.routes';

export default function App() {

  let [fontsLoaded] = useFonts({
    FredokaOne_400Regular,
    Ubuntu_400Regular,
    Ubuntu_700Bold
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
