import axios from 'axios';

// // const axios = require('axios');
const BASE_URL = 'https://swapi.dev/api';

async function getCharacters() {
  try {
    const response = await axios.get(`${BASE_URL}/people`);
    setData(response.data.results); // Збереження отриманих даних у масиві стану
  } catch (error) {
    console.error(error);
  }
}
export default getCharacters;
