import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'


interface Props {
    text: any,

}

export default function CustomButtonHalf({text}: Props) {
    return (
        <TouchableOpacity style={styles.loginBtn} >
            <Text style={styles.loginText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    loginBtn: {
        borderRadius: 13,
        width: 165,
        height: 50,
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