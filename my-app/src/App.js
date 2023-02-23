import React from "react";

import { Counter } from "./Counter";
// import { GithubUser } from "./GithubUser";
import { Login } from "./Login";
import {UseGithubUser} from './Hooks3'
import { CarDetails } from "./UseRef";


export class App extends React.Component{
  render () {
      return (
      <div>
 <CarDetails />

        <Counter />
        <Login />
        <UseGithubUser username="gianmarcotoso"/>
        {/* <GithubUser /> */}

       
        
      </div>
      )

}
}