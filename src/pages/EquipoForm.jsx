import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { GuardarEquipos } from "../Server/Server";

function EquipoForm() {
  const [equipo, setEquipo] = useState({
    referencia: "",
    nombre: "",
    serial: "",
    categoria: "",
    listaVerificacion: "",
    listaChequeo: "",
  });

  function handkeChange({ target }) {
    setEquipo({
      ...equipo,
      [target.name]: target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    equipo.listaVerificacion = equipo.listaVerificacion.split(",");
    equipo.listaChequeo = equipo.listaChequeo.split(",");

    const res = await GuardarEquipos(equipo);
    alert(res);
    console.log(equipo)
    returnToEquipo();
  }

  const navigate = useNavigate();
  function returnToEquipo() {
    navigate("/Equipo");
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Reguistar del Equipo</h1>
        <Row>
          <Col xs="auto" className="my-1">
            <Form.Label>Referencia</Form.Label>
            <Form.Control
              required
              type="text"
              name="referencia"
              onChange={handkeChange}
            />
          </Col>
          <Col className="my-1">
            <Form.Label>Nombre</Form.Label>
            <Form.Control required type="text" name="nombre" onChange={handkeChange} />
          </Col>
          <Col xs="auto" className="my-1">
            <Form.Label>Serial</Form.Label>
            <Form.Control required type="text" name="serial" onChange={handkeChange} />
          </Col>
          <Col xs="auto" className="my-1">
            <Form.Label>Categoria</Form.Label>
            <Form.Control required type="text" name="categoria" onChange={handkeChange} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col xs lg="3" className="my-1">
            <Form.Label>Lista de Verificación</Form.Label>
            <textarea
              className="form-control"
              type="text"
              name="listaVerificacion"
              onChange={handkeChange}
            />
          </Col>
          <Col xs="auto" className="my-1">
            <Form.Label>Lista de Chequeo</Form.Label>
            <textarea
              className="form-control"
              type="text"
              name="listaChequeo"
              onChange={handkeChange}
            />
          </Col>
          <Col></Col>
        </Row>
        <Row xs={2} md={4} lg={6} className="my-3">
          <Button onClick={returnToEquipo} type="submit">
            Atras
          </Button>

          <Button type="submit" variant="success">
            Guardar
          </Button>
        </Row>
      </Form>
    </Container>
  );
}
export { EquipoForm };
