export const getCategories = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/data.json`);
  const text = await res.text();
  const data = JSON.parse(text); // Parsing the text as JSON
  return data.categories;
};

  
  export const getCategoryById = async (id) => {
    const categories = await getCategories();
    return categories.find(category => category.id === id);
  };
  
  export const getProductById = async (categoryId, productId) => {
    const category = await getCategoryById(categoryId);
    return category.products.find(product => product.id === productId);
  };
  