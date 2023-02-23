import React from "react";

import { Counter } from "./Counter";
import { GithubUser } from "./GithubUser";
import { Login } from "./Login";
import {UseGithubUser} from './Hooks3'


export class App extends React.Component{
  render () {
      return (
      <div>
        <Counter />
        <Login />
        <GithubUser username="gianmarcotoso"/>
        <UseGithubUser />
        
      </div>
      )

}
}