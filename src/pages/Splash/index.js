import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashBackground, logo } from '../../assets'

const Splash = ({ navigation }) => {

  //useEffect(() =>{
  //  setTimeout(() => {
  //    navigation.replaces('MainApp');
  //  }, 3000)
  //}, [navigation]);

  return (
    <ImageBackground source={SplashBackground} style={styles.beckgroud}>
      <Image source={logo} style={styles.logo}/>
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  beckgroud: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 222,
    height: 105
  }
})