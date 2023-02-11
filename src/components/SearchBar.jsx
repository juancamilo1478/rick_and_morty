import estilo from "./SearchBar.module.css";
import imagen from "../img/buscar.png";
import { useState } from "react";
export default function SearchBar(props) {
const[buscador,setSeach]=useState({
   barra:'',
})
const escuchando=(data)=>{
   setSeach({
      ...buscador,barra:data.target.value
   })
   console.log(buscador.barra)
}

const ejecuta=(data)=>{
   props.onSearch(data.target.value)
   buscador.barra=''
}





   return (
      <div className={estilo.contenido}>
         <div className={estilo.todo}>
         <button onClick={ejecuta} className={estilo.botton} value={buscador.barra} >Agregar</button> 
         <input type='search'   className={estilo.barra}  value={buscador.barra} onChange={escuchando}     />
         <img  src={imagen} className={estilo.imagen} alt="foto"/>
         </div>
     
      </div>
   );
}
