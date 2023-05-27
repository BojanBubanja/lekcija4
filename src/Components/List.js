import React from "react";

function List() {
  const lista = ["Janko", "Marko", "Petar", "Jovan"];

  return (
    <ul>
      {lista.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;