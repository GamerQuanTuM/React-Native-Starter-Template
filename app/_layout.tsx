import React from 'react';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { Drawer } from 'expo-router/drawer';
import DrawerContent from '../components/DrawerContent';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <Drawer
        drawerContent={DrawerContent}
        screenOptions={{
          headerShown: false,
          drawerPosition: 'right'
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: 'Home'
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: 'Settings'
          }}
        />
        <Drawer.Screen
          name="id/[id]"
          options={{
            title: 'Details'
          }}
        />
      </Drawer>
    </>
  );
}
