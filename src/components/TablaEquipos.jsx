import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteEquipoById, listaEquipos } from "../Server/Server";

function TablaEquipos() {
  const [listaEquipo, setListaEquipos] = useState([]);

  async function listarEquipos() {
    try {
      const res = await listaEquipos();
      setListaEquipos(res);
    } catch (error) {}
  }

  useEffect(() => {
    listarEquipos();
  });

  async function eliminarPaciente(id) {
    let result = window.confirm("Seguro de eliminar Equipo");
    if (result) {
      const res = await deleteEquipoById(id);
      alert(res);
      setListaEquipos(listaEquipo.filter((equipo) => equipo.id !== id));
    }
  }

  let ConttadorEquipos = 0;
  return (
    <Container>
      <Row className="my-3">
        <Col><h2>Lista de Equipos</h2></Col>
        <Col xs={6}></Col>
        <Col><Link to="/equipo/form"><Button variant="success">Reguistar</Button></Link></Col>
      </Row>
      <Table id="datateble" striped bordered hover>
        <thead class="table-light">
          <tr>
            <th>#</th>
            <th>Referencia</th>
            <th>Nombre</th>
            <th>Serial</th>
            <th>Categoria</th>
            <th>Ver Detalle</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {listaEquipo.map((equipo) => (
            <tr key={equipo.idEquipos}>
              <td>{++ConttadorEquipos}</td>
              <td>{equipo.referencia}</td>
              <td>{equipo.nombre}</td>
              <td>{equipo.serial}</td>
              <td>{equipo.categoria}</td>
              <td xs="auto">
                <Link to={`/equipo/${equipo.idEquipos}`}>Ver Detalle</Link>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => eliminarPaciente(equipo.idEquipos)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
export { TablaEquipos };
