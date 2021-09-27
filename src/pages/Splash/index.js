import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import { logo, splashBackground } from '../../assets';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp');
        }, 3000);
    }, [navigation]);

    return (
        <ImageBackground source={splashBackground} style={styles.background}>
            <Image source={logo} style={styles.logo} />
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 222,
        height: 105
    }
})
