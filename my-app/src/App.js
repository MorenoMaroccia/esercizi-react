import React from "react";
import { Container } from "./Container";
import { Welcome } from "./Style1";
import { Login3 } from "./Style3";


export class App extends React.Component{
  render () {
      return (
      <div>
          <Welcome  />
          <Login3 />
          <Container title = "componente container" />
          
        </div>
      )

}
}