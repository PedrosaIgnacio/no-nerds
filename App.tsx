import 'react-native-gesture-handler';
import AppNavigator from './src/infraestructure/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import { Text } from 'react-native'
import { useEffect, useState } from 'react';
import { FONTS_RENDER } from './src/infraestructure/utils/fonts';

const fetchFonts = () =>
  Font.loadAsync(FONTS_RENDER);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFonts().then(() => {
      setIsLoading(false)
    });
  }, [])
  
  return (
    <>
    {
      isLoading ?
      <Text>Loading...</Text>
      :
      <NavigationContainer>
          <AppNavigator />
      </NavigationContainer>
    }
    </>
  );
}
