import { useDispatch, useSelector } from "react-redux";
import { linck } from "../../redux/actions/actions";
import estilo from "./SearchBar.module.css";
import logo from "../../img/logoRickmorty.png";
export default function SearchBar(props) {
  const estados = useSelector((state) => state.allcards);
  const dispatch = useDispatch();

  const buttonNext = () => {
    dispatch(linck(estados.info.next));
    console.log(estados);
  };
  const buttonPrev = () => {
    dispatch(linck(estados.info.prev));
  };

  return (
    <div className={estilo.contenido}>
      <img src={logo} alt="logo" className={estilo.image} />
      <div className={estilo.drive}>
        {estados.info?.prev && <button onClick={buttonPrev}>prev</button>}
        {estados.info?.next && <button onClick={buttonNext}>Next</button>}
      </div>

      <div className={estilo.favorites}>
        <h3>Favoritos</h3>
      </div>
      <div className={estilo.filters}>
        <h3>Filter by :</h3>
        <select name="select">
          <option value="all">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
        </select>
      </div>
    </div>
  );
}
