import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Title() {
  return (
    <View style={styles.wrapper}>
      <Text component='h1' style={styles.title}>Fans</Text>
      <Button title='CLEAR FANS'/>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: "rgba(0,0,0,0.9)",
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      clrBtn: {
        borderWidth: 1,
        color: 'red',
        borderColor: 'color',
      }
});