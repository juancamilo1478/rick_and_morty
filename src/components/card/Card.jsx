import { Link } from 'react-router-dom'
import estilo from './Card.module.css'

export default function Card(props) {

const borrarElemento=()=>{
   props.borrar(props.id);
}


   return (
      <div className={estilo.contenedor}>
         <button  className={estilo.x} onClick={borrarElemento}>X</button>
         <img className={estilo.imagen} src={props.image} alt="" /> 
         <div className={estilo.texto}>
            
         <Link to={`/detail/${props.id}`} className={estilo.lin}>
         <div className={estilo.boton1}>
         <h2> {props.name}</h2>
         </div>
         </Link>
       
         <div className={estilo.boton2}>
         <h2> {props.gender}</h2>
         </div>
         <div className={estilo.boton3}>
         <h2> {props.species}</h2>
         </div>
         </div>
      </div>
   );
}
