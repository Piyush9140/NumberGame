import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

function InstructionText({children}) {
  return (
      <Text style={styles.InstructionText}>{children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
    InstructionText:{
        color:colors.accent500,
        alignSelf:'center',
        fontSize:18,
      },
})