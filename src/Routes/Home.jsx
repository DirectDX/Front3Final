import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/Context";

const Home = () => {
  const { state } = useContextGlobal();
  if (state && state.dentists && state.dentists.payload) {
    return (
      <main className="">
        <h1>Home</h1>
        <div className="card-grid">
          {state.dentists.payload.map((dentist) => (
            <Card item={dentist} key={dentist.id} />
          ))}
        </div>
      </main>
    );
  }
};

export default Home;
