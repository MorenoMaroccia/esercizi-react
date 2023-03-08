import React from "react";

import { Counter } from "./Counter";
// import { GithubUser } from "./GithubUser";
import { Login } from "./Login";

import { CarDetails } from "./UseRef";

import { Language } from "./UseContext";

import { Hooks3 } from "./Hooks3";
import { LanguageContext } from "./LanguageContext";
import { UseCallback } from "./UseCallback";
import { FilteredList } from "./UseMemo";


export class App extends React.Component{
  render () {
      return (
      <div>
 <CarDetails />

        <Counter />
        <Login />
        
        {/* <GithubUser /> */}
        
        
        <Language username='gainamarcotoso'/>

        <Hooks3 username='gainamarcotoso'/> 

        <Language />
        <UseCallback />
        <FilteredList age= {33} name="Mario " id="MR  " />

        
        

        

       
        
      </div>
      )

}
}