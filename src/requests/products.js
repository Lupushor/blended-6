import instance from '../services/api';

export async function getAllprodact() {
  try {
    const response = await instance.get('products');
    return response.data;
    //   console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function searchProduct() {
  try {
    const response = await instance.get('products/search?q=phone');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export async function updateProduct() {
  try {
    const { data } = await instance.put('products/5', {
      title: 'iPhone Galaxy +100500',
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export async function getProductById(productId) {
  try {
    const { data } = await instance.get(`product/${productId}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}
