import React,{UseContext} from "react";
import { LanguageContext } from "./UseContext";



export function Container() {
  const language = UseContext(LanguageContext)

  return <h3>current: {language}</h3>
      
      

}