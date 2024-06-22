import React, { useState } from "react";

// En esta pagina deberán implementar un [Form](/src/Components/Form.jsx) (con sus validaciones pertinentes) que

// capture la información del usuario que desea contactar con la empresa. Los campos serán los siguientes:

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [contact, setContact] = useState({ fullName: "", email: "" });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);

  const handleName = (event) =>
    setContact({ ...contact, fullName: event.target.value });
  const handleEmail = (event) =>
    setContact({ ...contact, email: event.target.value });

  const handleSubmite = (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    contact.fullName.trim().length > 5 && emailRegex.test(contact.email)
      ? (setError(false), setMessage(true))
      : setError(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmite}>
        <label>Full Name</label>
        <input type="text" value={contact.fullName} onChange={handleName} />
        <label>Email</label>
        <input type="text" value={contact.email} onChange={handleEmail} />
        <button>Send</button>
        {error && (
          <div style={{ color: "red", border: "1px solid black" }}>
            Por favor verifique su información nuevamente
          </div>
        )}
        {message && (
          <div style={{ color: "green", border: "1px solid black" }}>
            {"Gracias " +
              contact.fullName +
              ", te contactaremos cuando antes vía mail"}
          </div>
        )}
      </form>
    </div>
  );
};

// - Nombre completo (con longitud mayor a 5)
// - Email (con formato correcto de email)
// - En caso de haber un error mostrar el siguiente mensaje de
// error: **Por favor verifique su información nuevamente**
// - Una vez "enviado"( no se envía a ningún servidor pero podemos mostrar por consola los datos submiteados)
// el formulario deberán mostrar un mensaje de éxito que contenga el siguiente formato: **Gracias _[nombre del usuario]_,
// te contactaremos cuando antes vía mail**

export default Form;
