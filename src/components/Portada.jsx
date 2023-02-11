import estilo from "./Portada.module.css";
import foto from "../img/portada.jpg"
import { Link } from "react-router-dom";

function Portada(){
return<div >
     <img src={foto} alt="foto" className={estilo.foto}/>
    <div className={estilo.contenido}>
    <div className={estilo.letras}>
        <h1>¡WUBBA LUBBA DUB DUB!</h1>
       <h3>¿Dinosaurios? ¿Más clones? ¿Naves espaciales? ¿Drama familiar? Nadie sabe qué deparará a Rick and Morty</h3>
    </div>
    <div className={estilo.botton}>
        <Link to='/cartas'>
        <div className={estilo.color}>
        <p>Explorar Personajes</p>
        </div>
        </Link>
    </div>
   </div>
   
    
   
</div>
}
export default Portada;