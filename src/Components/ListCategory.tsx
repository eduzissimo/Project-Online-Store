import { FormEvent } from 'react';
import { TypeCategories } from '../types';

type CategoryProps = {
  categories: TypeCategories[];
  getProducts : (event: FormEvent) => void;
};

function ListCategory({ categories, getProducts }: CategoryProps) {
  return (
    <aside>
      <fieldset>
        { categories.map((category, index) => (
          <div key={ index }>
            <input
              type="radio"
              id={ category.id }
              name="category"
              onChange={ getProducts }
            />
            <label
              htmlFor={ category.id }
              data-testid="category"
            >
              { category.name }
            </label>
          </div>
        ))}
      </fieldset>
    </aside>
  );
}

export default ListCategory;
