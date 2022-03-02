import { StyleSheet, TextInput } from 'react-native'
import React from 'react'


export default function CustomTextInput(this: any, {value, onChangeText, placeholderText, isPassword}: 
    {value: string, onChangeText: (text: string) => void, placeholderText: string, isPassword: boolean}) {

    return (
        <TextInput 
        style={styles.textInput} 
        placeholder={placeholderText} 
        placeholderTextColor={'#9A9FA7'} 
        autoCorrect={false}
        secureTextEntry={isPassword}
        value = {value}
        onChangeText={onChangeText}
      />
    )
  }


const styles = StyleSheet.create({
    textInput: {
        height: 50,
        width: 270,
        padding: 5,
        marginLeft: 10,
        borderBottomWidth: 2,
        borderColor: '#DDDEE1'
        },
})