const API_URL = "http://localhost:8080/"

export async function listaEquipos(){
    try {
        const res = await fetch (API_URL+"equipo");
        return await res.json()
    }
     catch (error) {
        console.log(error);
    }
}

export async function findEquipoById(id){
    const res = await fetch (API_URL+"equipo/"+id);
    const data = await res.json();
    return data;
} 

export async function deleteEquipoById(id){
    const options = {method:"DELETE"}
    const res = await fetch (API_URL+"equipo/"+id,options);
    const texto = await res.text();
    return texto;
} 

export async function GuardarEquipos(equipo){
    const options = {
        method:"POST", 
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(equipo)
    }
    const res = await fetch (API_URL+"equipo/",options);
    const texto = await res.text();
    return texto;
}


export async function listaUsuarios(){
    try {
        const res = await fetch (API_URL+"usuarios");
        return await res.json()
    }
     catch (error) {
        console.log(error);
    }
}

export async function findUsuarioById(id){
    const res = await fetch (API_URL+"usuarios/"+id);
    const data = await res.json();
    return data;
} 

