import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, useWindowDimensions } from 'react-native'
import { MaterialIcons} from '@expo/vector-icons'; 
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  const {height} = useWindowDimensions();

  const onResetPasswordPressed = () => {
    console.warn("Reset Password")
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Image style={[styles.logo, {height: height * 0.3}]} source={require('../../assets/logo.png')} resizeMode="contain"></Image>
      <Text style={styles.title}>Mot de passe oublié ?</Text>

      <View style={styles.emailContainer}>
      <CustomTextInput  
        placeholder = "Adresse mail" 
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <MaterialIcons name="alternate-email" size={27} color="#9A9FA7" />
      </View>

      <Text style={styles.infoText}>Saisissez votre e-mail, afin que nous vous envoyions un lien vous permettant de modifier votre mot de passe.</Text>

      <CustomButton text="Envoyer" onPress={onResetPasswordPressed}/>
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