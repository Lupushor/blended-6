import './styles/normalize.css';
import './styles/index.css';
import { getAllUsers, addNewUser } from './requests/users';
import {
  searchProduct,
  updateProduct,
  getAllprodact,
  getProductById,
} from './requests/products';
import { getLimetedPosts } from './requests/posts';
import { renderProducts } from './services/markupService';

// getAllUsers();
// addNewUser();
// searchProduct();
// updateProduct();
// getLimetedPosts();
// getAllprodact();
// renderProducts();

async function addProducts() {
  const productInfo = await getAllprodact();
  console.log({ productInfo });
  renderProducts(productInfo.products);
}

addProducts();
