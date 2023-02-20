//component card ,show the cards
import Card from "./Card";
import React, { useEffect } from "react";
//style css
import estilo from "./Cards.module.css";
import fotos from "../../img/portada.jpg";
//bookstores react-react-redux

import { useSelector } from "react-redux";
//accion todas las cartas

export default function Cards() {
  const cartass = useSelector((state) => state.allcards);

  return (
    <div className={estilo.contenedor}>
      <img src={fotos} alt="foto" className={estilo.foto} />
      <div className={estilo.contenedorcar}>
        {cartass.results &&
          cartass?.results?.map((data, index) => {
            return (
              <Card
                name={data.name}
                gender={data.gender}
                species={data.species}
                image={data.image}
                id={data.id}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
}
//
