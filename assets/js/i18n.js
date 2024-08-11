import translations from "./translations.js";

const languageSelector = document.getElementById("languageSelector");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  // Check if there's a language stored in localStorage
  let language = localStorage.getItem("lang");

  // If not, set it to Arabic as default
  if (!language) {
    language = "ar";
    localStorage.setItem("lang", language);
  }

  // Set the selected option in the dropdown based on the stored language
  languageSelector.value = language;

  // Apply the language to the page
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};

const languageSelectorSmallMenu = document.getElementById(
  "languageSelectorSmallMenu"
);
languageSelectorSmallMenu.addEventListener("change", (event) => {
  setLanguageSmallMenu(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  setLanguageSmallMenu(localStorage.getItem("lang"));
});
const setLanguageSmallMenu = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};
