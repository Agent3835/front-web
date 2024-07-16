import axios from 'axios';

const API_URL = 'http://localhost:5135/api/products';
console.log('API_URL: ', API_URL);
export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};