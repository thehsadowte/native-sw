import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const SummaryBlock = () => {
  return (
    <View style={styles.header}>
        <View style={styles.genderBoxes}>
            <View style={[styles.genderBox, styles.elevation]}>
                <Text style={styles.genderNumber}>0</Text>
                <Text style={styles.genderName}>Female fans</Text>
            </View>
            <View style={[styles.genderBox, styles.elevation]}>
                <Text style={styles.genderNumber}>0</Text>
                <Text style={styles.genderName}>Male fans</Text>
            </View>
            <View style={[styles.genderBox, styles.elevation]}>
                <Text style={styles.genderNumber}>0</Text>
                <Text style={styles.genderName}>Others</Text>
            </View>  
        </View>  
    </View>
  );
}




const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  
  
    genderBoxes: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 10,
    },
  
    genderBox: {
      width: "32%",
      height: 90,
      paddingHorizontal: 20,
      borderWidth: 1,
      borderColor: "grey",
      borderRadius: 4,
      backgroundColor: "#fff",
    },
  
    genderNumber: {
      fontSize: 28,
      marginTop: 4
    },
  
    genderName: {
      fontSize: 16,
    },
  
    elevation: {
      elevation: 20,
      shadowColor: "#000",
    },
  });