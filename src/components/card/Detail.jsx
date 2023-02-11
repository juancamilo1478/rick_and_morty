import {useParams} from'react-router-dom'
import { useState,useEffect } from 'react';

        

function Detail(){
const[character,setCharacter]=useState('');
let {detailId}=useParams();



    useEffect(() => {
  
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)  
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);


    return(<dic>
        <h1>Nombre: {character?.name}</h1>
        <h2>Especie: {character?.species}</h2>
        <h2>Genero: {character?.gender}</h2>
        <h2>Estado: {character?.status}</h2>
        <h2>lugar: {character?.origin?.name}</h2>
        <img  src={character?.image} alt={character?.name} /> 
    </dic>)
}
export default Detail;  