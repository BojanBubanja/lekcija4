import React from "react";

function Greetings(props) {
  return(
    <h1>Moje ime je {props.name} {props.surname}</h1>
  )
}

export default Greetings;
