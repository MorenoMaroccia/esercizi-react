import React from "react";
import { LanguageContext } from "./LanguageContext";

const String = {
  en:{
    TITLE_IS:"the title is:"
  },
  it: {TITLE_IS:"il titolo è:"}
}


export class Container extends React.Component{
  render () {
      return (
      <div class="container">
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
}