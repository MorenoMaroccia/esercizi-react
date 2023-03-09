import React from "react";
import { Container } from "./Container";
import { RenderProps } from "./RenderProps";
import { Welcome } from "./Style1";
import { Login3 } from "./Style3";



export class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <Login3 />
        <Container title="componente container" />
        <RenderProps render={(items, handleDeleteItem) => {
          return items.map((item) => {
            return( <li key={items.indexOf(item)}>{item}
            <button onClick={ handleDeleteItem}>delete</button></li>
            )
          })
          
        }} />
      </div>
    )

  }
}