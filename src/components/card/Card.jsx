import { Link } from "react-router-dom";
import estilo from "./Card.module.css";
// import img favorite
import favorito from "../../img/heartfull.png";
import nofavorite from "../../img/emtyHeart.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addfavorito, deletefavorito } from "../../redux/actions/actions";

export default function Card(props) {
  //dispatch
  const dispatch = useDispatch();
  // traer datos de favoritos para mirarlos con useEfect
  const favoritos = useSelector((state) => state.favorite);
  const cartas = useSelector((state) => state.allcards);
  const [favorite, setFavorite] = useState(false);
  //use effect mirar favoritos
  useEffect(() => {
    mirar();
  }, [favoritos, cartas]);

  const mirar = () => {
    let auxiliar = false;
    if (favoritos) {
      favoritos.forEach((data) => {
        if (data.id === props.id) {
          auxiliar = true;
        }
      });
    }
    setFavorite(auxiliar);
  };

  const addFavorite = () => {
    if (favorite === false) {
      dispatch(addfavorito(props.id));
    } else {
      dispatch(deletefavorito(props.id));
    }
  };

  return (
    <div className={estilo.contenedor}>
      <div className={estilo.opcions}>
        {favorite ? (
          <img
            src={favorito}
            alt="nofavorito"
            className={estilo.favorite}
            onClick={addFavorite}
          />
        ) : (
          <img
            src={nofavorite}
            alt="nofavorito"
            className={estilo.favorite}
            onClick={addFavorite}
          />
        )}
      </div>
      <img className={estilo.imagen} src={props.image} alt="" />

      <div className={estilo.contenedorbotton}>
        <Link to={`/detail/${props.id}`} className={estilo.lin}>
          <div className={estilo.boton1}>
            <div className={estilo.texto}>
              <h2> {props.name}</h2>
            </div>
          </div>
        </Link>

        <div className={estilo.boton2}>
          <h2 className={estilo.texto}> {props.gender}</h2>
        </div>
        <div className={estilo.boton3}>
          <h2 className={estilo.texto}> {props.species}</h2>
        </div>
      </div>
    </div>
  );
}
