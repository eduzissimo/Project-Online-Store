import { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ListCategory from '../Components/ListCategory';
import { TypeCategories, TypeProducts } from '../types';
import ProductsList from '../Components/ProductsList';

function Home() {
  const [categories, setCategories] = useState<TypeCategories[]>([]);
  const [products, setProducts] = useState<TypeProducts[]>([]);

  useEffect(() => {
    getCategories().then((response) => setCategories(response));
  }, []);

  const getProducts = () => {
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    const query = searchInput ? searchInput.value : '';

    const categoryInput = document.querySelector('input[name="category"]:checked');
    const categoryId = categoryInput ? categoryInput.id : '';

    getProductsFromCategoryAndQuery(categoryId, query)
      .then((response) => setProducts(response.results));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    getProducts();
  };

  return (
    <main>
      <Link to="/cart" data-testid="shopping-cart-button">
        Carrinho
      </Link>
      <p data-testId="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
      <form onSubmit={ handleSubmit }>
        <input
          data-testid="query-input"
          type="text"
          id="searchInput"
          name="query"
        />
        <button type="submit" data-testid="query-button">
          Buscar
        </button>
      </form>
      <ListCategory
        categories={ categories }
        getProducts={ getProducts }
      />
      <ProductsList
        products={ products }
      />
    </main>
  );
}

export default Home;
