import React,{useContext, UseContext} from "react";
import { LanguageContext } from "./LanguageContext";



export function DisplayLanguage() {
  const language = UseContext(LanguageContext)
   return (
      <h3>current: {language}</h3>

  )

      
      

}