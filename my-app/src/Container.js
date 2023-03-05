import React from "react";
import { LanguageContext } from "./LanguageContext";

const String = {
  en:{
    TITLE_IS:"the title is:"
  },
  it: {TITLE_IS:"il titolo è:"}
}


export function Container(props) {
  
      return (
      <div >
        {props.title}
        <LanguageContext.Consumer>
          { language => {
            return(
              <div>
                
                <h1>{String[language].TITLE_IS}   {this.props.title }</h1>
              </div>
            )
          }}
        </LanguageContext.Consumer>
        
        
         
        </div>
      )

}
