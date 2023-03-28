import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import getCharacters from '../services/api';

const App = () => {
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the starwars API</Text>
      <View>
        <FlatList
          // data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Text>
              {item.name}, {item.gender}
            </Text>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
