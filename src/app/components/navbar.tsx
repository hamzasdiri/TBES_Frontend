"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../assets/tbes_logo.png";
import Link from 'next/link';

const Nav = () => {
  const [open, setOpen] = useState(false); // For mobile menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // For dropdown menu toggle
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname(); // Initialize useRouter
  // Define the categories
  const categories = [
    { title: 'Gestion du Cash', category: 'cash-management' },
    { title: 'Coffre-fort', category: 'coffre' },
    { title: 'Système de surveillance', category: 'surveillance' },
    { title: 'Système d’alarme', category: 'alarme' },
    { title: 'Scanner à rayon-X', category: 'scanner' },
    { title: 'Détecteur de métaux', category: 'detecteur' },
    { title: 'Vidéophone', category: 'videophone' },
    { title: "Contrôle d'accès & Pointage", category: 'controle' },
  ];

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setOpen(!open);
  };

  // Function to determine if the current route is active
  const isActive = (route: string) =>
    pathname === route ? "text-blue-700" : "text-gray-900 dark:text-white";

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex flex-col items-center space-x-3 rtl:space-x-reverse"
        >
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src={logo}
              alt="TBES Logo"
              className="h-8"
              width={32}
              height={64}
            />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
              TBES
            </span>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Tunisia Best Electronic Solution
          </span>
        </a>

        {/* Mobile menu toggle */}
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          onClick={toggleMobileMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={open ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Desktop menu */}
        <div
          className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className={`block py-2 px-3 ${isActive("/")}`}
                aria-current="page"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="/presentation"
                className={`block py-2 px-3 ${isActive("/presentation")}`}
                aria-current="page"
              >
                Présentation
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                onClick={toggleDropdown}
                onMouseEnter={toggleDropdown}
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Produits
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
              ref={dropdownRef}
                id="dropdownNavbar"
                className={`${
                  dropdownOpen ? "block" : "hidden"
                } absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul 
                className="py-2 text-sm text-gray-700 dark:text-gray-400 z-50"
                aria-labelledby="dropdownLargeButton"
                >
                {categories.map((category) => (
                  <li key={category.category} className="block rounded-lg dark:hover:bg-gray-600 dark:hover:text-white">
                    <Link
                      href={`/categories/${category.category}`}
                      className="block px-4 py-2 text-gray-300 hover:text-white"
                    >
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
              </div>
            </li>
            <li>
              <a
                href="/references"
                className={`block py-2 px-3 ${isActive("/references")}`}
                aria-current="page"
              >
                Réferences
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`block py-2 px-3 ${isActive("/contact")}`}
                aria-current="page"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
