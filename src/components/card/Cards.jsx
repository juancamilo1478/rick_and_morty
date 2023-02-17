import Card from './Card';
import estilo from './Cards.module.css'
import fotos from "../../img/portada.jpg"

export default function Cards(props) {
   const { characters } = props;

   return <div className={estilo.contenedor}>
      <img src={fotos} alt="foto" className={estilo.foto}/>
      <div className={estilo.contenedorcar}>
         {characters.map((data)=>{
      return<Card  name={data.name} gender={data.gender} species={data.species} image={data.image} borrar={props.borrar} id={data.id} />
   })}</div></div>;
}
