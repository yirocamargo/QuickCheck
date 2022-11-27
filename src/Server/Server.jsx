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
    const res = await fetch (API_URL+id);
    const data = await res.json();
    return data;
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

