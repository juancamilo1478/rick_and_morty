import {Link, useParams} from'react-router-dom'
import { useState,useEffect } from 'react';
import estilo from './Detail.module.css'
import fondo from '../../img/fondo.jpg'     
import portal from '../../img/portal.png'

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


    return(<div>
       <img src={fondo} alt="foto" className={estilo.foto}/>
    <dic className={estilo.contenedor  } >

      <div  className={estilo.texto}>
      
      <Link to='/cartas' className={estilo.lin}>
      <div className={estilo.botton}>
      <img src={portal} alt="fotso" className={estilo.portal}/>
      <div className={estilo.circulo}></div>
        <p>Salir</p>
      </div>
      </Link>

        <h1 className={estilo.letras}>Nombre: {character?.name}</h1>
        <h2 className={estilo.letras}>Especie: {character?.species}</h2>
        <h2 className={estilo.letras}>Genero: {character?.gender}</h2>
        <h2 className={estilo.letras}>Estado: {character?.status}</h2>
        <h2 className={estilo.letras}>lugar: {character?.origin?.name}</h2>
        </div>

        <div  className={estilo.imagen}>
        <img  src={character?.image} alt={character?.name} className={estilo.figura}/> 
        </div>
    </dic></div>)
}
export default Detail;  