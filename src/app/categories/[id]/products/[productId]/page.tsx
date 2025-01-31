import { getProductById } from '../../../../lib/getData'; // Adjust the import path if needed

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductPage = async ({ params }: { params: { categoryId: string; productId: string } }) => {
  const product: Product | null = await getProductById(params.categoryId, params.productId);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        <img src={product.image} alt={product.title} className="w-1/2 mb-6 md:mb-0" />
        <div className="ml-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl text-gray-700 mb-4">${product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
