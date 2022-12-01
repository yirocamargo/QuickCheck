function EquipoDetalle(){

    const { id } = useParams();

    const [equipo,setEquipo] =useState({});
    const listaVerificacionEquipo = equipo.listaVerificacion;

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
                        <Form.Label>Referencia</Form.Label>
                        <Form.Control value={equipo.referencia}/>
                    </Col>
                    <Col className="my-1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control value ={equipo.nombre}/>
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Serial</Form.Label>
                        <Form.Control value ={equipo.serial}/>
                    </Col>
                    <Col xs="auto" className="my-1">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control value ={equipo.categoria}/>
                    </Col> 
                </Row>

                <Row>
                   
                    
                {/* <Col xs="auto" className="my-1">
                        <Form.Label>Lista de Verificación</Form.Label>
                        <ul class="list-group">
                            <li class="list-group-item">
                                {listaVerificacionEquipo.map(listaVerificacionEquipo => <li>{listaVerificacionEquipo}</li>)}
                            </li>
                        </ul>
                    </Col>
                    <Col xs="auto" className="my-1">
                        
                        <Form.Label>Lista de Verificación</Form.Label>
                    </Col> */}
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