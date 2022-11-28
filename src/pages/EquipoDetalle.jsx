import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { findEquipoById } from "../Server/Server";

function EquipoDetalle(){

    const { id } = useParams();

    const [equipo,setEquipo] =useState({});

    const getEquipo = async ()=> {
        findEquipoById(id).then(respuesta=>{
            setEquipo(respuesta)
        })

    }    

    useEffect(()=>{
        getEquipo();
    })

    return(
           
            <Form>
                <h2>Detalle del Equipo</h2>
                <Row>
                    <Col xs="auto" className="my-1">
                        <p>Referencia</p>
                        <Form.Control placeholder={equipo.referencia}/>
                    </Col>
                    <Col xs="auto" className="my-1">
                        <p>Nombre</p>
                        <Form.Control placeholder ={equipo.nombre}/>
                    </Col>
                    <Col xs="auto" className="my-1">
                        <p>Serial</p>
                        <Form.Control placeholder ={equipo.serial}/>
                    </Col>
                    <Col xs="auto" className="my-1">
                        <p>Marca</p>
                        <Form.Control placeholder ={equipo.marca}/>
                    </Col> 
                    <Col xs="auto" className="my-1">
                        <p>Estado</p>
                        <Form.Control placeholder ={equipo.estado ? "Activo" : "Inactivo"}/>
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
                    <Form.Group>
                        <Button href="#/Equipo"  type="submit">Atras</Button>
                    </Form.Group>
                </Row>
            </Form>

            
    )
}
export{EquipoDetalle}