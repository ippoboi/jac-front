import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, useWindowDimensions } from 'react-native'
import { MaterialIcons, FontAwesome5} from '@expo/vector-icons'; 
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';

export default function NewPasswordScreen() {
  const [newPassword, setNewPassword] = useState('');

  const {height} = useWindowDimensions();

  const onResetPasswordPressed = () => {
    console.warn("Reset Password")
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Image style={[styles.logo, {height: height * 0.3}]} source={require('../../assets/logo.png')} resizeMode="contain"></Image>
      <Text style={styles.title}>Nouveau mot de passe</Text>

      <View style={styles.emailContainer}>
      <CustomTextInput  
        placeholder = "Nouveau mot de passe" 
        value={newPassword}
        onChangeText={(newPassword) => setNewPassword(newPassword)}
      />
      <FontAwesome5 name="lock" size={27} color="#9A9FA7" />
      </View>

      <Text style={styles.infoText}>Saisissez votre nouveau mot de passe</Text>

      <CustomButton text="Réinitialiser mon mot de passe" onPress={onResetPasswordPressed}/>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
  alignItems: 'center',
  justifyContent: 'center',
  },
  logo: {
  width: 176,
  marginBottom: "7%",
  },
  title: {
  color: '#172B4D',
  width: '80%',
  marginLeft: '-10%',
  marginBottom: "7%",
  fontSize: 30,
  fontWeight: 'bold',
  },
  emailContainer: {
  flexDirection: 'row-reverse',
  paddingBottom: 10,
  alignItems: 'center',
  },
  infoText: {
    color: '#9A9FA7',
    marginLeft: "1.6%",
    marginBottom: "10%"
  }
}) 