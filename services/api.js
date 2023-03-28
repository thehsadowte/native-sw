import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

// const axios = require('axios');
async function getCharacters() {
  try {
    const response = await axios.get(`${BASE_URL}/people`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export default getCharacters;
