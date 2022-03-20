import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import AuthProvider from './src/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

    return (
      <AuthProvider>
        <NavigationContainer >
          <AuthNavigator />
        </NavigationContainer>
      </AuthProvider>
    )
  }
