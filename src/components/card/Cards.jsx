import Card from './Card';
import estilo from './Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return <div className={estilo.contenedor}>{characters.map((data)=>{
      return<Card  name={data.name} gender={data.gender} species={data.species} image={data.image} borrar={props.borrar} id={data.id} />
   })}</div>;
}
