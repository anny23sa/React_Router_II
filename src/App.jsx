import { Routes, Route } from "react-router-dom";
import Menu from "react-bootstrap";
import Home from "./views/Home";
import Detalle from "./views/Detalle";
import Pokemones from "./views/Pokemones";

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Routes>
        {/* DEFINIR LAS RUTAS HOME, POKEMONES, DETALLE */}
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<Detalle />} />
      </Routes>
    </div>
  );
};
export default App;
