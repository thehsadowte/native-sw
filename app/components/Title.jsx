import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';

export default function Title() {
  return (
    <View style={styles.wrapper}>
      <Text component="h1" style={styles.title}>
        Fans
      </Text>
      <TouchableHighlight style={styles.clrBtn}>
        <Text style={styles.btnText}>CLEAR FANS</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'rgba(0,0,0,0.9)',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clrBtn: {
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    // marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FF2a24C7',
  },
  btnText: {
    color: '#FF2a24C7',
    fontSize: 16,
    fontWeight: 'regular',
    textTransform: 'uppercase',
  },
});
