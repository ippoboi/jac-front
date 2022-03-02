import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default function CustomButton({text}: any) {

    return (
        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>{text}</Text>
        </TouchableOpacity>
    )
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