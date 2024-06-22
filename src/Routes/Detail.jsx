import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [details, setDetails] = useState({});
  const params = useParams();
  console.log(params.id);
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    const getDetails = async () => {
      let res = await axios(url);
      console.log(res.data);
      setDetails(res.data);
    
    };
    getDetails();
  }, []);

  return (
    <div className="details">
      <h1>{"Name: " + details.name}</h1>
      <img src="\images\doctor.jpg"  alt={details.name} />
      <h2>{"Email: " + details.email}</h2>
      <h3>{"Celphone: "+ details.phone}</h3>
      <h3>{"Website: " + details.website}</h3>
      <h4>{"Detail Dentist id: " + details.id} </h4>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  );
};

export default Detail;
