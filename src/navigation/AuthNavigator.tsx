import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import Navigation from '.'
import { useAuth } from '../context/AuthContext'

export default function AuthNavigator(): any {
    const { isAuthentificated }: any = useAuth()
    if(!isAuthentificated) {
        return <LoginScreen />
    } else {
        return <Navigation />
    }
}