import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const App = () => {
  const BASE_URL = 'https://swapi.dev/api';

  const [data, setData] = useState([]);

  async function getCharacters() {
    try {
      const response = await axios.get(`${BASE_URL}/people`);
      setData(response.data.results); // Збереження отриманих даних у масиві стану
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the starwars API</Text>
      <View>
        <FlatList
          data={data} // Використання масиву зі стану для відображення даних
          keyExtractor={({ name }) => name.toString()} // Використання toString(), оскільки id - це число
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
