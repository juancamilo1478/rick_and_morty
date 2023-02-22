import { useDispatch, useSelector } from "react-redux";
import { linck, filters } from "../../redux/actions/actions";
import estilo from "./SearchBar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SearchBar(props) {
  const estados = useSelector((state) => state.drive);
  const noDelete = useSelector((state) => state.savefilter);
  const dispatch = useDispatch();

  const [estado, setEstado] = useState("All");
  let direction = useLocation();
  // filtro para cuando cambia de pagina mirando las cartas
  useEffect(() => {
    if (estado === "Alive" || estado === "Dead") {
      let estados = noDelete.filter((data) => {
        return data.status === estado;
      });
      dispatch(filters(estados));
    } else if (estado === "Male" || estado === "Female") {
      let geners = noDelete.filter((data) => {
        return data.gender === estado;
      });
      dispatch(filters(geners));
    } else {
      dispatch(filters(noDelete));
    }
  }, [noDelete]);
  // filtros funtion
  const filtro = (e) => {
    // use efect siempre esta mirando a los lincks a la hora de cambiar ejecutara
    if (e.target.value === "Alive" || e.target.value === "Dead") {
      let estados = noDelete.filter((data) => {
        return data.status === e.target.value;
      });
      dispatch(filters(estados));
      setEstado(e.target.value);
    } else if (e.target.value === "Male" || e.target.value === "Female") {
      let geners = noDelete.filter((data) => {
        return data.gender === e.target.value;
      });
      dispatch(filters(geners));
      setEstado(e.target.value);
    } else {
      dispatch(filters(noDelete));
      setEstado("All");
    }
  };
  // mirar pagina

  const buttonNext = () => {
    dispatch(linck(estados.next));
  };
  const buttonPrev = () => {
    dispatch(linck(estados.prev));
  };
  return (
    <div className={estilo.contenido}>
      {direction.pathname === "/cartas" && (
        <div className={estilo.nextc}>
          {estados.prev && (
            <button onClick={buttonPrev} className={estilo.buttonleft}>
              prev
            </button>
          )}
          {estados.next && (
            <button onClick={buttonNext} className={estilo.buttonright}>
              Next
            </button>
          )}
        </div>
      )}

      <div className={estilo.home}>
        <Link to="/cartas" className={estilo.lin}>
          <h3>Home</h3>
        </Link>
      </div>

      <div className={estilo.home}>
        <Link to="/favorites" className={estilo.lin}>
          <h3>Favorites</h3>
        </Link>
      </div>

      {direction.pathname === "/cartas" && (
        <div className={estilo.filters}>
          <div className={estilo.filtro}>
            <h3 className={estilo.namefilter}>Filter:</h3>

            <select className={estilo.filterselect} onChange={filtro}>
              <option value="All">All</option>
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="Female">Female</option>
              <option selected value="Male">
                Male
              </option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
