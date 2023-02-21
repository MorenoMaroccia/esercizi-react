

import React from "react";
import { LanguageContext } from "./LanguageContext";
import { Container } from "./Container";

export class  Language extends React.Component{
    state = {
        language: "en"
    }

    handleLanguageChange = (event) => {
        this.setState({
            language:event.target.value
        })
    }


  render () {
    
      return (
      <div>
         <h1>Contesto2</h1>
          <select  value={this.state.language} onChange={this.handleLanguageChange}>
            <option value="en">ENGLISH</option>
            <option value="it">ITALIANO</option>
          </select>
          <LanguageContext.Provider value={this.state.language}>

            <Container title = "componente container" />
          </LanguageContext.Provider>
        
      
      </div>
      )
}
}