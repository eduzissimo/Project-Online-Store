export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  const data = await response.json();

  return data;
}

export async function getProductsFromCategoryAndQuery(categoryd: string, query: string) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryd}&q=${query}`;
  const response = await fetch(URL);
  const data = await response.json();

  return data;
}

export async function getProductById(productId: string) {
  const URL = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(URL);
  const data = await response.json();

  return data;
}
