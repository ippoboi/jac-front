import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

interface ICustomButtonProps {
    text?: string
}

export default class CustomButton extends Component<ICustomButtonProps> {
  render() {
    let {text} = this.props;
    return (
        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>{text}</Text>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    loginBtn: {
        borderRadius: 13,
        width: 330,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        backgroundColor:"#0065FF",
        },
    loginText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        }
})