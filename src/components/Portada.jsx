import estilo from "./Portada.module.css";
import foto from "../img/portada.jpg";
import { Link } from "react-router-dom";
import volar from "../img/animation.png";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { allcards } from "../redux/actions/actions";

function Portada() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allcards());
  });

  return (
    <div className={estilo.total}>
      <img src={foto} alt="foto" className={estilo.foto} />
      <div className={estilo.contenido}>
        <div className={estilo.letras}>
          <h1>¡WUBBA LUBBA DUB DUB!</h1>
          <h3>
            ¿Dinosaurios? ¿Más clones? ¿Naves espaciales? ¿Drama familiar? Nadie
            sabe qué deparará a Rick and Morty
          </h3>
        </div>

        <div className={estilo.botton}>
          <Link to="/cartas" className={estilo.lin}>
            <div className={estilo.color}>
              <p>Explorar Personajes</p>
            </div>
          </Link>
        </div>
        <div className={estilo.animation}>
          <div className={estilo.circulo}></div>
          <img src={volar} alt="volar" />
        </div>
      </div>
    </div>
  );
}
export default Portada;
