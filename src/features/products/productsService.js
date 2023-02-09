const API_URL = 'http://localhost:8000/products';

async function getProducts() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

const productsService = { getProducts };

export default productsService;