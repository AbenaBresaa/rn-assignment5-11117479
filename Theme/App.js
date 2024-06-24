import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import HomeTabs from './HomeTabs';


const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    text: 'black',
  },
};

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: 'black',
    text: 'white',
  },
};

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  useEffect(() => {
    const getTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme !== null) {
        setIsDarkTheme(savedTheme === 'dark');
      }
    };
    getTheme();
  }, []);

  const toggleTheme = async () => {
    setIsDarkTheme(!isDarkTheme);
    await AsyncStorage.setItem('theme', !isDarkTheme ? 'dark' : 'light');
  };

  return (
    <PaperProvider theme={isDarkTheme ? PaperDarkTheme : PaperDefaultTheme}>
    <NavigationContainer theme={theme}>
      <HomeTabs toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
    </NavigationContainer>
  </PaperProvider>
  );
}