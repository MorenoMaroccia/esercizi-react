import React from "react";

import { Counter } from "./Counter";
// import { GithubUser } from "./GithubUser";
import { Login } from "./Login";

import { CarDetails } from "./UseRef";

import { Language } from "./UseContext";



import { UseCallback } from "./UseCallback";
import { FilteredList } from "./UseMemo";
import { GithubUsers } from "./GithubUser";


export class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hooks1</p>
        <Counter />
        <p>Hooks2</p>
        <Login />
        <p>hooks3</p>
        <GithubUsers username="gianmarcotoso" />

        <p>useRef</p>
        <CarDetails />
        <p>UseContext</p>
        <Language />
        <p>UseCallback</p>
        <UseCallback />
        <p>useMemo</p>
        <FilteredList age={33} name="Mario " id="MR  " />
      </div>
    )

  }
}