import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import logo from "../assets/tbes_logo.png";

const Footer = () => {
  return (
    <footer className=" text-white py-10">
      <div className="container mx-auto px-6 md:px-12 max-w-full">
        {/* CTA Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="flex items-start space-x-4">
            <i className="fas fa-map-marker-alt text-blue-700 text-3xl"></i>
            <div>
              <h4 className="text-xl font-semibold">Trouvez-nous</h4>
              <p className="text-gray-400 text-sm">
                1010 Avenue, sw 54321, Chandigarh
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <i className="fas fa-phone text-blue-700 text-3xl"></i>
            <div>
              <h4 className="text-xl font-semibold">Appelez-nous</h4>
              <p className="text-gray-400 text-sm">9876543210</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <i className="far fa-envelope-open text-blue-700 text-3xl"></i>
            <div>
              <h4 className="text-xl font-semibold">Écrivez-nous</h4>
              <p className="text-gray-400 text-sm">mail@info.com</p>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* About Section */}
          <div>
            <div className="mb-6">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image
                  src={logo}
                  alt="Logo TBES"
                  className="h-24"
                  width={72}
                  height={64}
                />
                <span className="self-center text-xl font-semibold whitespace-normal text-gray-500 dark:text-gray-400 block">
                  Tunisia Best
                  <br />
                  Electronic Solution
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-700">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-blue-700">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-blue-700">
                <i className="fab fa-google-plus-g text-lg"></i>
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-700">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-700">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-700">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-700">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Abonnez-vous</h3>
            <p className="text-gray-400 text-sm mb-4">
              Ne manquez pas nos mises à jour ! Abonnez-vous à notre newsletter.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Adresse email"
                className="w-full py-3 px-6 bg-gray-800 text-white border border-gray-700 rounded-md"
              />
              <button className="absolute right-0 top-0 bg-blue-700 text-white px-6 py-3 rounded-md">
                <i className="fab fa-telegram-plane text-lg"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; 2024 Tous droits réservés |{" "}
                <a
                  href="https://codepen.io/anupkumar92/"
                  className="text-blue-700"
                >
                  TBES
                </a>
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex justify-center md:justify-end space-x-8">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-700 text-sm"
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-700 text-sm"
                  >
                    Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-700 text-sm"
                  >
                    Confidentialité
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-700 text-sm"
                  >
                    Politique
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-700 text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
