import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

export const initialState = { theme: true, dentists: [], favs: [] };

export const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTIST":
      return { ...state, dentists: action };
    case "ADD_FAVS":
      return { ...state, favs: [...state.favs, action.payload] };
    case "DELETE_FAVS":
      const filteredFav = state.favs.filter(
        (item) => item.id != action.payload
      );
      return { ...state, favs: filteredFav };
    case "TOGGLE_THEME":
      return { ...state, theme: action.payload };
  }
};

// export const ContextProvider = ({ children }) => {
export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_DENTIST", payload: res.data }).catch((err) =>
        console.log(err)
      );
    });
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default Context;
export const useContextGlobal = () => useContext(ContextGlobal);
