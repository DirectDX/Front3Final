import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./Components/utils/routes";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { useContextGlobal } from "./Components/utils/Context";
import Layout from "./Layout/Layout";

function App() {
  const { state } = useContextGlobal();

  return (
    <div className={!state.theme ? "dark" : ""}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={routes.inicio} element={<Home />} />
          <Route path={routes.contacto} element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/" element={<Navigate to={routes.inicio} />} />
          <Route path={routes.destacados} element={<Favs />} />
          <Route path="*" element={<h1>Error 404 - Page not found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
