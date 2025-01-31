"use client";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle select input changes
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to send form data to the server
    console.log(formData);
  };

  // Coordinates for Tunis
  const position: [number, number] = [36.81897, 10.16579];

  // Custom FontAwesome icon for the marker
  const faIcon = new L.DivIcon({
    html: `<i class="fas fa-location-pin" style="color:red; font-size: 32px;"></i>`, // FontAwesome icon with red color
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 32], // Anchor point
    popupAnchor: [0, -32], // Popup position relative to the icon
  });

  return (
    <div className=" text-white py-16 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-screen-xl mx-auto">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-center mb-6">
                Détails de contact
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <i className="fas fa-location-pin text-red-500" />
                  <div>
                    <h3 className="text-xl font-semibold">TUNIS</h3>
                    <p>
                      Adresse : Route de La marsa Km 11 2046 Ain Zaghouan Du
                      Nord Lot AFH Tunis
                      <br />
                      BP 207 1053 Les Berges du Lac ,Tunis
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-phone-alt text-red-500" />
                  <p>Tél. : 00 216 70 936 482</p>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-fax text-red-500" />
                  <p>Fax : 00 216 70 936 481</p>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-envelope text-red-500" />
                  <p>E-mail : hardy.com@topnet.tn</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-center mb-6">
                Notre emplacement
              </h2>
              {/* React-Leaflet Map */}
              <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                style={{
                  height: "400px",
                  width: "100%",
                  borderRadius: "15px", // Adding border-radius to the map
                }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={faIcon}>
                  <Popup>BP 207 1053 Les Berges du Lac ,Tunis</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          {/* Contact Form */}
          <h2 className="text-3xl font-semibold text-center mb-6">
            Service client - Contactez-nous
          </h2>
          <form className="max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="subject" className="block font-semibold">
                Objet
              </label>
              <select
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleSelectChange}
                className="w-full p-2 border rounded bg-gray-800 text-white"
              >
                <option value="">Choisissez</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold">
                Adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded bg-gray-800 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded bg-gray-800 text-white"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
