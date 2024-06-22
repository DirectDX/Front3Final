import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContextGlobal();
  if (state && state.dentists && state.dentists.payload) {
    return (
      <>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {/* este componente debe consumir los destacados del localStorage */}
          {/* Deberan renderizar una Card por cada uno de ellos */}
          {state.favs.map((dentist) => (
            <Card item={dentist} key={dentist.id} />
          ))}
        </div>
      </>
    );
  }
};

export default Favs;
