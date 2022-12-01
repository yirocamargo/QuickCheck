import React, { useEffect, useState } from "react";
import { Button, Col, Form, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { findEquipoById } from "../Server/Server";

function EquipoDetalle(){

    const { id } = useParams();
    const [equipo,setEquipo] =useState({});
    // const navigate = useNavigate();
    // function returnToEquipo(){
    //     navigate("/Equipo")
    // }

    useEffect(()=>{
        findEquipoById(id).then(respuesta=>{
            setEquipo(respuesta)
        });
           // getEquipo();
    },[id])

    return(
        <>   
        <Form>
        <h2>Detalle del Equipo</h2>
        <Row>
            <Col xs="auto" className="my-1">
                <Form.Label>Referencia</Form.Label>
                <Form.Control value={equipo.referencia}/>
            </Col>
            <Col className="my-1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control disabled value ={equipo.nombre}/>
            </Col>
            <Col xs="auto" className="my-1">
                <Form.Label>Serial</Form.Label>
                <Form.Control value ={equipo.serial} disabled/>
            </Col>
            <Col xs="auto" className="my-1">
                <Form.Label>Marca</Form.Label>
                <Form.Control value ={equipo.categoria}/>
            </Col> 
        </Row>
        <br/>   
        <Row>
            <Col xs="auto" className="my-1">
                <ListGroup class="list-group">
                    <Form.Label>Lista de Verificación</Form.Label>
                    <ListGroupItem>
                        {equipo.listaVerificacion !== undefined ? 
                        equipo.listaVerificacion.map(listaVerificacionEquipo => <li>{listaVerificacionEquipo}</li>): null}       
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col xs="auto" className="my-1">
                <ListGroup class="list-group">
                    <Form.Label>Lista de Chequeo</Form.Label>
                    <ListGroupItem> 
                        {equipo.listaChequeo !== undefined ? equipo.listaChequeo.map(listaCheuqeoEquipo => 
                           <li>{listaCheuqeoEquipo}  </li>      
                        ): null }
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </Row>
               

                <Row>
                    <Form.Label></Form.Label>
                    <Form.Label></Form.Label>
                    <Form.Label></Form.Label>
                    <Form.Label></Form.Label>
                    <Form.Label></Form.Label>
                </Row>
                <Row>
                    
                    
                </Row>
            </Form>  
                 
        <Form.Group>
            <Button href="#/Equipo"  type="submit">Atras</Button>
        </Form.Group>                    
        </>   
    )
}
export{EquipoDetalle}