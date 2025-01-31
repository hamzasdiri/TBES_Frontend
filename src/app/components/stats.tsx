"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaUsers, FaAward, FaCertificate, FaCogs } from "react-icons/fa"; // Icons for each stat

const Stats: React.FC = () => {
  const [inView, setInView] = useState(false);

  const stats = [
    { number: 18, label: "ans", subLabel: "d'expérience", icon: <FaAward /> },
    {
      preLabel: "+",
      number: 2500,
      subLabel: "Clients satisfaits",
      icon: <FaUsers />,
    },
    { number: 2008, subLabel: "ISO 9001", icon: <FaCertificate /> },
    { number: 99, label: "% très réactif", subLabel: "SAV", icon: <FaCogs /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true); // Trigger counting animation when the component comes into view
        }
      },
      { threshold: 0.5 } // Start animation when at least 50% of the component is in view
    );

    const element = document.getElementById("stats-container");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="stats-container"
      className="flex justify-center items-center py-14"
    >
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3, // Stagger the animation of each stat item
            },
          },
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Stat Icon */}
            <div className="text-6xl text-gray-500 mb-3">{stat.icon}</div>
            {/* Animated number */}
            <motion.div className="flex items-center">
              <p className="text-4xl font-bold text-blue-600">
                {stat.preLabel}
              </p>{" "}
              {inView && (
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2.5}
                  className="text-4xl font-bold text-blue-600 mx-2" // Add horizontal margin here
                />
              )}
              <p className="text-4xl font-bold text-blue-600">{stat.label}</p>
            </motion.div>

            {/* Label and sub-label */}
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              {stat.subLabel && (
                <span className="text-gray-500 dark:text-gray-400">
                  {stat.subLabel}
                </span>
              )}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
