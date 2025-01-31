"use client";

import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16 text-gray-800" id="about-us">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          À propos de nous
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto text-center">
          Nous sommes un fournisseur leader de caméras de surveillance avancées,
          dédiés à la sécurité de votre propriété grâce à des technologies de
          pointe.
        </p>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Vision Section */}
          <div className="w-full md:w-1/3 dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all hover:scale-105 hover:shadow-xl duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Notre Vision
            </h3>
            <p className="text-white">
              Nous visons à révolutionner la manière dont les entreprises et les
              particuliers sécurisent leurs espaces grâce à des solutions de
              surveillance intelligentes offrant tranquillité d&apos;esprit.
            </p>
          </div>

          {/* Mission Section */}
          <div className="w-full md:w-1/3 dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all hover:scale-105 hover:shadow-xl duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Notre Mission
            </h3>
            <p className="text-white">
              Notre mission est de fournir des équipements de surveillance
              fiables et de haute qualité, garantissant la sécurité et la
              tranquillité d&apos;esprit à tous nos clients.
            </p>
          </div>

          {/* Values Section */}
          <div className="w-full md:w-1/3 dark:bg-gray-800 rounded-lg shadow-lg p-8 transform transition-all hover:scale-105 hover:shadow-xl duration-300">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Nos Valeurs
            </h3>
            <p className="text-white">
              Nous valorisons l&apos;innovation, la qualité et la satisfaction
              client avant tout. Nos produits sont conçus pour offrir un niveau
              de sécurité maximal pour vos espaces.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Pourquoi Nous Choisir ?
          </h3>
          <p className="text-lg text-white max-w-3xl mx-auto mb-8">
            Avec plus de 10 ans d&apos;expérience, nous proposons des caméras de
            surveillance haut de gamme, des modèles de base aux systèmes avancés
            équipés de fonctionnalités alimentées par l&apos;IA. Nos solutions
            sont de confiance, tant pour les clients résidentiels que
            commerciaux dans le monde entier.
          </p>
          <a
            href="contact"
            className="inline-block px-6 py-3 text-white bg-blue-700 rounded-full text-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
