"use client";

import AboutUs from "./components/aboutus";
import Categories from "./components/categories/categories";
import Slider from "./components/slider";
import Stats from "./components/stats";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Slider />
        <Categories />
        <Stats />
        <AboutUs />
      </motion.div>
    </div>
  );
}
