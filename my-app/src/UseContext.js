import React,{useState} from "react";
import { LanguageContext } from "./LanguageContext";
import { Container } from "./Container";


export function  Language (){
    const [language, setLanguage] = useState('en')

    function handleChangeLanguage(event) {
        setLanguage(event.target.value)
    }
    
    
      return (
      <div>
         
          <select  value={language} onChange={handleChangeLanguage}>
            <option value="en">ENGLISH</option>
            <option value="it">ITALIANO</option>
          </select>
          <LanguageContext.Provider value={language}>
            <Container title="use context"/>
          </LanguageContext.Provider>
        
      
      </div>
      )
}