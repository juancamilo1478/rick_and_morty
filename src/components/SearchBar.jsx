import estilo from "./SearchBar.module.css";
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
         <input   className={estilo.barra}  value={buscador.barra} onChange={escuchando}     />
         <button onClick={ejecuta}  value={buscador.barra} className={estilo.mas}> +</button> 
         </div>
      </div>
   );
}
