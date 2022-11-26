import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { listaEquipos } from "../Server/Server";

//<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.13.1/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.13.1/js/jquery.dataTables.js"></script>

function TablaEquipos(){
    
    const [listaEquipo,setListaEquipos] = useState([]);

    // function listarEquipos(){
    //     const options = {method: 'GET'};
    //     fetch('http://localhost:8080/equipo', options)
    //         .then(response => response.json())
    //         .then(response => {
    //             setListaEquipos(response)
    //         })
    //         .catch(err => console.error(err));
    // }

    async function listarEquipos(){
        try{
            const res = await listaEquipos();
            setListaEquipos(res);
        }catch (error){

        }

    }

    useEffect(()=>{
        listarEquipos();
    });

    let ConttadorEquipos=0;
    return(
        <>
        <Table id="datateble" striped bordered hover >
            <thead class="table-light">
                <tr>
                    <th>#</th>
                    <th>Referencia</th>
                    <th>Nombre</th>
                    <th>Serial</th>
                    <th>Marca</th>
                    <th>Estado</th>
                    <th>Ver Detalle</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">   
            {
              listaEquipo.map((equipo)=>(
                
                <tr key={equipo.idEquipos}>
                    <td>{++ConttadorEquipos}</td>
                    <td>{equipo.referencia}</td>
                    <td>{equipo.nombre}</td>
                    <td>{equipo.serial}</td>
                    <td>{equipo.marca}</td>
                    <td>
                    {equipo.estado ?  "Activo" : "Inactivo" }
                    </td>
                    <td><Link to={`/equipo/${equipo.idEquipos}`}>Ver Detalle</Link>
                    </td>
                </tr>
              ))
            }
            </tbody>
        </Table>
        </>
    )
}
export{TablaEquipos}