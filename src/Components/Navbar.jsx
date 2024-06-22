import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { useContextGlobal } from "./utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const   Navbar = () => {
  const { state, dispatch } = useContextGlobal();

  const toggleTheme = () => {
    console.log(state.theme);
    dispatch({type: "TOGGLE_THEME", payload : !state.theme })
  };

  return (
    <nav >
      <Link to={routes.inicio}>
        <h4>Inicio</h4>
      </Link>
      <Link to={routes.contacto}>
        <h4>Contacto</h4>
      </Link>
      <Link to={routes.destacados}>
        <h4>Destacados</h4>
      </Link>
      <button className="theme-button" onClick={toggleTheme}>
        {state.theme ? "☀" : "🌑"}
      </button>
    </nav>
  );
};

export default Navbar;
