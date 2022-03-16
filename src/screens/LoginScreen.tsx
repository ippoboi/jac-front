import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native'
import { Entypo, FontAwesome5, MaterialIcons} from '@expo/vector-icons'; 
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import CustomButtonWoBorder from '../components/CustomButtonWoBorder';import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../navigation';


type authScreenNavigationType = NativeStackNavigationProp<AuthStackParamList, "Login">


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation<authScreenNavigationType>()

  const onSignUpPressed = () => {
    navigation.navigate('SignUp')
  }

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword')
  }

  const onLoginPressed = () => {
    navigation.navigate('Root')
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Image style={[styles.logo, {height: height * 0.3}]} source={require('C:/Users/ingan/Desktop/JAC22/jac-front/assets/logo.png')} resizeMode="contain"></Image>
      <Text style={styles.title}>Connexion à mon compte UNICEF</Text>

      <View style={styles.emailContainer}>
      <CustomTextInput  
        placeholder = "Adresse mail" 
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <MaterialIcons name="alternate-email" size={27} color="#9A9FA7" />
      </View>

      <View style={styles.emailContainer}>
        <TouchableOpacity style={styles.eyeBtn}><Entypo name="eye-with-line" size={26} color="#9A9FA7"/></TouchableOpacity>
        <CustomTextInput 
          placeholder ="Mot de passe" 
          isPassword = {true}
          value = {password} 
          onChangeText={(password) => setPassword(password)}
        />
        <FontAwesome5 name="lock" size={27} color="#9A9FA7" />
      </View>

      <CustomButtonWoBorder text="Mot de passe oublié ?" onPress={onForgotPasswordPressed}/>
      <CustomButton text="Se connecter" onPress={onLoginPressed}/>
      <View style={styles.signup}>
        <Text>Pas encore inscrit ?</Text>
        <CustomButtonWoBorder text="S'inscrire" onPress={onSignUpPressed}/>
      </View>
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
  marginBottom: 20,
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
  signup: {
  flexDirection: 'row',
  alignItems: 'center'
  },
  eyeBtn: {
    position: 'absolute',
    right: "80%",
    top: 12
  }
}) 