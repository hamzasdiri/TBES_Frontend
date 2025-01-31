"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

// Define the prop types for the ProductCategoryCard component
interface ProductCategoryCardProps {
  image: string | StaticImageData; // Accepts both string (URL) or StaticImageData (imported image)
  title: string;
  url: string;
}

// ProductCategoryCard component
const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({
  image,
  title,
  url,
}) => {
  return (
    <motion.div
      className="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-transparent dark:bg-gray-800 dark:border-transparent"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <a href={url}>
        <div className="relative w-full h-72 rounded-t-lg overflow-hidden">
          {/* Rendering the image using the Image component */}
          <Image
            src={image} // Source can be either URL or StaticImageData
            alt={title}
            fill
            className="rounded-t-lg object-cover transition-all duration-300 transform hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </a>
      <div className="px-5 pb-5 flex justify-center">
        <a href={url}>
          <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white transition-all duration-300 transform hover:text-blue-700">
            {title}
          </h5>
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCategoryCard;
