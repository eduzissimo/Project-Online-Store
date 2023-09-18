import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <Link to="/cart" data-testid="shopping-cart-button">
        Carrinho
      </Link>
      <p data-testId="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    </main>
  );
}

export default Home;
