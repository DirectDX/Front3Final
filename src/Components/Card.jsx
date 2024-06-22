import React from "react";
import { useContextGlobal } from "./utils/Context";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";

function Card({ item }) {
  const { state, dispatch } = useContextGlobal();


  const addFav = () => {
    if (!state.favs.includes(item)) {
      dispatch({ type: "ADD_FAVS", payload: item });
    }
  };

  const deleteFav = () => {
    dispatch({ type: "DELETE_FAVS", payload: item.id });
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <img src="images\doctor.jpg" alt={item.name} />
      <Link to={"/dentist/" + item.id }><h4>{item.name}</h4></Link>
      
      <p>{item.username}</p>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {location.pathname == "/home" ? (
        <button onClick={addFav} className="favButton">
          ⭐
        </button>
      ) : (
        <button onClick={deleteFav} className="favButton">
          ❌
        </button>
      )}
    </div>
  );
}

export default Card;
