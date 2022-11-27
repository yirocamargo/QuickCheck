import { Container } from "react-bootstrap";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Menu } from "../components/Menu";
//import { EquipoDetalle } from "../pages/EquipoDetalle";
import { PaginaEquipo } from "../pages/PaginaEquipo";
import { PaginaInicial } from "../pages/PaginaInicial";
import { PaginaNoFound } from "../pages/PaginaNoFound";
import { PaginaUsuario } from "../pages/PaginaUsuario";

function App() {
  return (
    <Container>
    <HashRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<PaginaInicial/>}/>
        <Route path="/equipo" element={<PaginaEquipo/>}/>
        {/* <Route path="/equipo/:id" element={<EquipoDetalle/>}/> */}
        <Route path="/usuarios" element={<PaginaUsuario/>}/>
        {/* <Route path="/usuarios/:id" element={<UsuarioDetalle/>}/> */}
        <Route path="/*" element={<PaginaNoFound/>}/>
      </Routes>
    </HashRouter>
    </Container>

  );
}

export default App;
