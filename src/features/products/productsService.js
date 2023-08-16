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

async function getProductDetails(id) {
  try {
    const response = await fetch(API_URL + `/${id}`, {
      headers: {
        Accept: 'application/json',
      },
    });
    const product = await response.json();
    return product;
  } catch (error) {
    console.error(error);
    return [];
  }
}


const productsService = { getProducts, getProductDetails };

export default productsService;