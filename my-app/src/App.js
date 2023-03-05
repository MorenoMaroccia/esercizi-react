import React from "react";

import { Counter } from "./Counter";
// import { GithubUser } from "./GithubUser";
import { Login } from "./Login";

import { CarDetails } from "./UseRef";

import { Language } from "./UseContext";

import { Hooks3 } from "./Hooks3";
import { LanguageContext } from "./languageContext";


export class App extends React.Component{
  render () {
      return (
      <div>
 <CarDetails />

        <Counter />
        <Login />
        
        {/* <GithubUser /> */}
        
        
        {/* <Language username='gainamarcotoso'/>

        <Hooks3 username='gainamarcotoso'/> */}

        <Language />
        

        

       
        
      </div>
      )

}
}