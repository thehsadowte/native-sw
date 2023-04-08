import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Title from './components/Title';
import { SummaryBlock } from './components/SummaryBlock';
import SearchBar from './components/SearchBar.jsx';

const App = () => {
  const BASE_URL = 'https://swapi.dev/api';

  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log(`Searching for ${searchText}`);
  };

  async function getCharacters() {
    try {
      const response = await axios.get(`${BASE_URL}/people`);
      setData(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <View>
        <SummaryBlock />
        <SearchBar
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
        <FlatList
          style={styles.flatlist}
          data={filteredData}
          keyExtractor={({ name }) => name.toString()}
          renderItem={({ item }) => (
            <Text>
              {item.name}, {item.gender}
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
    marginTop: 30,
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
  flatlist: {
    padding: 24,
    backgroundColor: '#eaeaea',
    marginTop: 30,
  },
});

export default App;
