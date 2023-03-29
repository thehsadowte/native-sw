import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title() {
  return (
    <View>
      <Text component='h1' style={styles.title}>Fans</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: '30',
        color: "rgba(0,0,0,0.9)",
      },
});