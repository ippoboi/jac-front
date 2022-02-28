import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

    return (
      <>
        <Navigation />
        <StatusBar style='auto'/>
      </>
    )
  }
