import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SelfPickup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>this is screen is not designed please switch back to delivery tab</Text>
    </View>
  )
}

export default SelfPickup

const styles = StyleSheet.create({
    container:{
        justifyContent:"center"
    },
    text:{
        alignSelf:"center"
    }
})