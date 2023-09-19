import { TypeProducts } from '../types';

type ProductProps = {
  products: TypeProducts[];
};

function ProductsList({ products }: ProductProps) {
  return (
    <section>
      { products.map((product) => (
        <div
          key={ product.id }
          data-testId="product"
        >
          <img src={ product.thumbnail } alt={ product.title } />
          <h4>{ product.title }</h4>
          <p>{ product.price }</p>
        </div>
      ))}
    </section>
  );
}

export default ProductsList;
