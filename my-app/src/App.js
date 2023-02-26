import React from "react";
import { TodoList3 }from "./TodoList3";
import { TodoList4 } from "./TodoList4";
import { TodoList5 } from "./TodoList5";
import { TodoList6 } from "./TodoList6";



export class App extends React.Component{
  render () {
      return (
      <div>
        <TodoList3  />
        <TodoList4 />
        <TodoList5 />
        <TodoList6 />

      </div>
      )

}
}