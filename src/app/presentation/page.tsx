"use client";

import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <section className=" text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold text-center mb-8">
            Présentation de TBES (Tunisia Best Electronic Solution)
          </h1>

          <div className="mb-12">
            <p className="text-xl mb-6 leading-relaxed">
              Fondée en 2024, **TBES** (Tunisia Best Electronic Solution) est une entreprise
              novatrice spécialisée dans la fourniture de solutions électroniques de pointe pour
              la sécurité et le traitement des billets. Notre mission est de fournir des produits
              et services de la plus haute qualité, alliant technologie de pointe et fiabilité, pour
              répondre aux besoins exigeants de nos clients dans divers secteurs d’activité.
            </p>
            <p className="text-xl mb-6 leading-relaxed">
              Notre gamme de produits inclut :
            </p>

            <ul className="list-disc pl-8 text-xl space-y-2">
              <li>Dispositifs de comptage et de vérification des billets de banque</li>
              <li>Coffres-forts et solutions de stockage sécurisé</li>
              <li>Systèmes de contrôle d’accès et de sécurité pour les infrastructures</li>
              <li>Détecteurs de métaux et technologies anti-intrusion</li>
              <li>Scanners de bagages et équipements de sécurité pour les aéroports</li>
              <li>Systèmes de vidéosurveillance et surveillance intelligente</li>
            </ul>
          </div>

          <div className="mb-12">
            <p className="text-xl mb-6 leading-relaxed">
              Ce que nous vous offrons :
            </p>
            <ul className="list-disc pl-8 text-xl space-y-2">
              <li>
                Des produits de haute qualité, certifiés et ayant passé une série de tests de conformité et de fiabilité rigoureux.
              </li>
              <li>
                Une équipe d’experts certifiés et passionnés, avec des compétences ISO 9001 :2008, prête à répondre à vos besoins et à vous offrir des solutions sur mesure.
              </li>
              <li>
                Un service après-vente exceptionnel avec une infrastructure de support solide et des ingénieurs spécialisés pour vous garantir une prise en charge rapide et efficace.
              </li>
            </ul>
          </div>

          <div className="text-xl leading-relaxed">
            <p>
              Chez **TBES**, nous sommes déterminés à devenir le leader du secteur en Tunisie et
              à étendre notre impact à l’international, en offrant des solutions innovantes et
              un service client irréprochable. Nous poursuivons une dynamique d’amélioration
              continue, plaçant l’excellence au cœur de notre stratégie.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
