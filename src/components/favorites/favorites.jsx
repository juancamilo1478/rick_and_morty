import style from "./favorites.module.css";

import { useSelector } from "react-redux";
import Card from "../card/Card";
const Favorites = () => {
  const favoritos = useSelector((state) => state.favorite);
  return (
    <>
      <img
        src="https://wallpapercave.com/wp/wp5015262.jpg"
        alt="fondo"
        className={style.fondo}
      />
      <div className={style.favoritos}>
        {favoritos &&
          favoritos.map((data, index) => {
            return (
              <Card
                name={data.name}
                gender={data.gender}
                species={data.species}
                image={data.image}
                id={data.id}
                key={index}
              />
            );
          })}
      </div>
    </>
  );
};
export default Favorites;
