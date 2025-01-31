"use client";

import React from "react";
import ProductCategoryCard from "./productCategoryCard";
import cash from "../../assets/categories/cash.png";
import alarme from "../../assets/categories/alarme.png";
import camera from "../../assets/categories/camera.png";
import detector from "../../assets/categories/detector.png";
import coffre from "../../assets/categories/coffre.png";
import videophone from "../../assets/categories/videophone.png";
import pointage from "../../assets/categories/pointage.png";
import control from "../../assets/categories/control.png";
import { motion } from "framer-motion";

const Categories: React.FC = () => {
  const categories = [
    {
      image: cash,
      title: "Gestion du Cash",
      url: "/categories/cash-management",
    },
    {
      image: coffre,
      title: "Coffre-fort",
      url: "/categories/coffre",
    },
    {
      image: camera,
      title: "Système de surveillance",
      url: "/categories/surveillance",
    },
    {
      image: alarme,
      title: "Système d’alarme",
      url: "/categories/alarme",
    },
    {
      image: pointage,
      title: "Scanner à rayon-X",
      url: "/categories/scanner",
    },
    {
      image: detector,
      title: "Détecteur de métaux",
      url: "/categories/detecteur",
    },
    {
      image: videophone,
      title: "Vidéophone",
      url: "/categories/videophone",
    },
    {
      image: control,
      title: "Contrôle d'accès & Pointage",
      url: "/controle",
    },
  ];

  return (
    <section
      id="categories"
      className="flex flex-col items-center py-14 min-h-screen"
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Catégories</h2>
      <motion.div
        className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3, // Staggering the card animations
              when: "beforeChildren", // Stagger before children animate
            },
          },
        }}
      >
        {categories.map((category, index) => (
          <ProductCategoryCard
            key={index}
            image={category.image}
            title={category.title}
            url={category.url}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Categories;
