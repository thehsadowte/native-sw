import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Title from './components/Title';
import { SummaryBlock } from './components/SummaryBlock/SummaryBlock';
import  SearchBar  from './components/SearchBar';

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
      setData(response.data.results); // Збереження отриманих даних у масиві стану
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
		<SafeAreaView style={styles.container}>
			<Title />
			<View>
				<SummaryBlock />
				<View style={styles.container}>
					<Text style={styles.title}>Star Wars Characters</Text>
					<SearchBar
						value={searchText}
						onChangeText={setSearchText}
						onSubmitEditing={handleSearch}
					/>
					{/* Add your list of characters here */}
				</View>
				<FlatList
					style={styles.flatlist}
					data={data} // Використання масиву зі стану для відображення даних
					keyExtractor={({ name }) => name.toString()} // Використання toString(), оскільки id - це число
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
    marginTop: 30
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
    marginTop: 30
  },


container: {
  flex: 1,
  backgroundColor: '#f2f2f2',
},
title: {
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  marginVertical: 16,
},

});

export default App;





