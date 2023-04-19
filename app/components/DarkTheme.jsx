import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const lightTheme = StyleSheet.create({
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
});

const darkTheme = StyleSheet.create({
  backgroundColor: '#252425',
  textColor: '#fff',
  //   border: '1px solid #000',
});

export const DarkTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={{ color: theme.textColor }}>
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
