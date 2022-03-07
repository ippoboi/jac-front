import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
    text: string,
    onPress: () => void,
}

export default function CustomButtonWoBorder({text, onPress}: Props) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.forgotBtn}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    forgotBtn: {
        color: '#1962D0',
        fontSize: 13,
        fontWeight: '700',
        marginTop: 30,
        height: 30,
        marginBottom: 20
        },
})