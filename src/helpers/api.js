// /src/helpers/api.js
const fetchAnimals = async (type, searchTerm = '') => {
    const baseUrl = 'https://freetestapi.com/api/v1/';
    const url = searchTerm 
      ? `${baseUrl}${type}?search=${searchTerm}`
      : `${baseUrl}${type}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };
  
  export { fetchAnimals };