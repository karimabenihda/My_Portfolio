import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Languages } from "lucide-react";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng");
    if (!storedLang) {
      i18n.changeLanguage("fr");
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const flags = [
    {
      code: "fr",
      name: "Français",
      flag: "https://flagcdn.com/w40/fr.png",
    },
    {
      code: "en",
      name: "English",
      flag: "https://flagcdn.com/w40/gb.png",
    },
    {
      code: "zh-CN",
      name: "Chines",
      flag: "https://flagcdn.com/w40/cn.png",
    },
  ];

  const getCurrentLanguage = () => {
    return flags.find((flag) => flag.code === i18n.language) || flags[0];
  };

  const currentLang = getCurrentLanguage();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="relative z-50 " ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-transparent !px-4 !py-3 rounded-md text-sm"
      >   <Languages/>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full rounded-xl !bg-[rgba(255, 255, 255, 0.97)] left-0 mt-2 pt-2  rounded-md shadow-lg w-fit lg:w-36"
          >
            {/* <div className="absolute -top-2 left-4 w-4 h-4 bg-[white] transform rotate-45"></div> */}
            {flags.map((flag, index) => (
              <button
                key={index}
                onClick={() => changeLanguage(flag.code)}
                className="items-centerw-full !px-4 !py-3 text-left !hover:bg-gray-100 text-sm flex"
              >
                <img
                  src={flag.flag}
                  alt={flag.name}
                  className="w-6 h-4 mr-2 object-cover"
                />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LanguageSwitcher;