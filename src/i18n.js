import React from "react";
import i18n from 'i18next'
import {  initReactI18next } from "react-i18next";
 
import translationAR from './loacales/AR.json'
import translationFR from './loacales/FR.json'

const resources = {
    fr:{
        translation: translationFR
    },
    ar:{
        translation: translationAR
    }
}
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    
    resources,
    lng: 'fr',

    keySeparator: false,
    interpolation: {
        escapeValue: false
    }

  });

  export default i18n
