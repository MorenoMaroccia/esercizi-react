import React,{useState} from "react";
import { LanguageContext } from "./languageContext";
import { Container } from "./Container";

export function  Language (){
    const [language, setLanguage] = useState('en')

    function handleChangeLanguage(event) {
        setLanguage(event.target.value)
    }
    
    
      return (
      <div>
         <h1>Contesto2</h1>
          <select  value={language} onChange={handleChangeLanguage}>
            <option value="en">ENGLISH</option>
            <option value="it">ITALIANO</option>
          </select>
          <LanguageContext.Provider value={language}>

            <Container title = "componente container" />
          </LanguageContext.Provider>
        
      
      </div>
      )
}