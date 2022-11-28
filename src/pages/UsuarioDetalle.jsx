import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormCheck, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { findUsuarioById } from "../Server/Server";

function UsuarioDetalle(){

    const [shown, setShown] = React.useState(false);
    const switchShown = () => setShown(!shown);
    

    const { id } = useParams();

    const [usuario,setUsuario] =useState({});

    const getUsuario = async ()=> {
        findUsuarioById(id).then(respuesta=>{
            setUsuario(respuesta);
        })

    }    

    useEffect(()=>{
        getUsuario();
    })

    return(
             
            <Form>
                <h2>Detalle del Usuario</h2>
                <Row>
                    <Col className="my-1">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control value ={usuario.estado ? "Activo" : "Inactivo"}/>
                    </Col>
                    <Col className="my-1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control value={usuario.nombre}/>
                    </Col>
                    <Col className="my-1">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control value ={usuario.apellido}/>
                    </Col>
                    <Col className="my-1">
                        <Form.Label>Nombre de Usuario</Form.Label>
                        <Form.Control value ={usuario.username}/>
                    </Col>
                    <Col className="my-1">
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type={shown ? 'text ' : 'password'} value = {usuario.username}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <FormCheck type="switch"
                            id="custom-switch" onClick={switchShown} label="Ver Contraseña"/>
                    </Form.Group>   
                    </Col>   
                </Row>

                <Row>
                <h2>Rol</h2>
                    <Form.Group className="my-1">
                        
                    </Form.Group>
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
                        <Button href="#/usuarios"  type="submit">Atras</Button>{' '}
                    </Form.Group>
                </Row>
                
                
            </Form>
          
                
  

            
    )
}
export{UsuarioDetalle}