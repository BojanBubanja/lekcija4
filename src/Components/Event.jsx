import React, { useEffect, useState } from "react";

function Event() {
  const [brojac, setBrojac] = useState(1);

  useEffect(() => {
    setTimeout(() => {
        let dugme = document.getElementById('sakrijDugme');
       dugme.innerText = 'Kliknuto vec '
    }, 2000);
  }, [brojac]);

  // function upisilog() {
  //     console.log('kliknuli ste na dugme');
  // }

  function uvecajBrojac() {
    setBrojac(brojac + 1);
  }
  return (
    <div>
      <button id='sakrijDugme' onClick={uvecajBrojac}>Ovo je dugme</button>
      <h2>Trenutni broj je {brojac}</h2>
    </div>
  );
}

export default Event;
