import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const Titles = ({children}) => {
  return (
    <View style={styles.width}>
      <Text  style={styles.TextStyle} >{children}</Text>
    </View>
  )
}

export default Titles

const styles = StyleSheet.create({
    TextStyle:{
        fontSize:24,
        color:'white',
        borderWidth:2,
        borderColor:'white',
        fontWeight:'bold',
        textAlign:'center',
        padding:12,
        
        
       },
       width:{
        paddingHorizontal:15,
       }
})