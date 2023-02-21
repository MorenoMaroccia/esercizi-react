import React from "react";

export function Sum(props) {
    let sum = props.numer.reduce((a,b) => a+b)
    return(
    <h1>{sum}</h1>
    )
}