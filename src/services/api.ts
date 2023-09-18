export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  const data = await response.json();

  return data;
}

export async function getProductsFromCategoryAndQuery(categoryd: number, query: string) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryd}&q=${query}`;
  const response = await fetch(URL);
  const data = await response.json();

  return data;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
