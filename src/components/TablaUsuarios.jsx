import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listaUsuarios } from "../Server/Server";

function TablaUsuarios(){
    
    const [listaUsuario,setListaUsuario] = useState([]);

    async function listarUsuarios(){
        try{
            const res = await listaUsuarios();
            setListaUsuario(res);
        }catch (error){

        }
    }

    useEffect(()=>{
        listarUsuarios();
    });

    let ConttadorEquipos=0;
    return(
        <>
        <h1>Lista de Usuarios</h1>
        <Table id="datatebleUS" striped bordered hover >
            <thead class="table-light">
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Username</th>
                    <th>Contraseña</th>
                    <th>Estado</th>
                    <th>Ver Detalle</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">   
            {
              listaUsuario.map((usuario)=>(
                <tr key={usuario.id}>
                    <td>{++ConttadorEquipos}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.apellido}</td>
                    <td>{usuario.username}</td>
                    <td type="password">{"*********"}</td>
                    <td>
                    {usuario.estado ?  "Activo" : "Inactivo" }
                    </td>
                    <td><Link to={`/usuarios/${usuario.id}`}>Ver Detalle</Link>
                    </td>
                </tr>
              ))
            }
            </tbody>
        </Table>
        </>
    )
}
export{TablaUsuarios}