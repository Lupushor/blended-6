import { getProductById } from '../requests/products';

const productList = document.querySelector('#allProducts');
const singleProduct = document.querySelector('#singleProduct');
const singleProductForm = document.querySelector('#singleProductForm');
singleProductForm.addEventListener('submit', onSubmit);
async function onSubmit(event) {
  event.preventDefault();
  //   console.log(event.target.elements.id.value);
  const { images, title, brand, price } = await getProductById(
    event.target.elements.id.value
  );
  //   console.log(data);
  const murkup = `<div>
  <img src="${images[0]}"/>
  <p>Title: ${title}</p>
  <p>brand: ${brand}</p>
  <p>price: ${price}</p>
  </div>`;
  singleProduct.insertAdjacentHTML('beforeend', murkup);
}

export function renderProducts(products) {
  const markup = products
    .map((product) => {
      const { title, brand, images, price } = product;
      return `<li>
    <img src="${images[0]}"/>
    <p>Title: ${title}</p>
    <p>brand: ${brand}</p>
    <p>price: ${price}</p>
    </li>`;
    })
    .join('');
  productList.insertAdjacentHTML('beforeend', markup);
}
