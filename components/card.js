import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

 function Card  ({children}) {
  return (
    <View style={styles.InputContainer}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    InputContainer: {
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: colors.primary600,
        borderRadius: 8,
        elevation: 4,
        
      },
})