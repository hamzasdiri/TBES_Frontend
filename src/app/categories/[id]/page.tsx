import { getCategoryById } from '../../lib/getData'; // Adjusted import path if needed
import ProductCard from './ProductCard'; // Import the client component

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface Subcategory {
  id: string;
  name: string;
  products: Product[];
}

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
}

// Server Component
const CategoryPage = async ({ params }: { params: { id: string } }) => {
  const category: Category | null = await getCategoryById(params.id);
  if (!category)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <p className="text-white">Loading...</p>
      </div>
    );

    return (
      <div className="text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-4">{category.name}</h1>
            <p className="text-xl">{category.description}</p>
          </div>
          
          {category.subcategories.length === 0 ? (
            <p className="text-center text-2xl font-semibold text-gray-300">
              Cette catégorie est actuellement indisponible.
            </p>
          ) : (
            category.subcategories.map((subcategory) => (
              <div key={subcategory.id} className="mb-16">
                <h2 className="text-3xl font-semibold text-left mb-6">{subcategory.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {subcategory.products.map((product) => (
                    <ProductCard key={product.id} product={product} categoryId={category.id} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );    
};

export default CategoryPage;
