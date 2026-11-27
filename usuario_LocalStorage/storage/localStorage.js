//localStorage
//funciones para manejar los LocalStorage
const CLAVE_USUARIOS = 'usuarios';

//guardar la informacion
export const guardarDatos = async (datos)=>{
    try{
        localStorage.setItem(
            CLAVE_USUARIOS,
            JSON.stringify(datos)
        );
        return true;
    }catch (error){
        console.error('Error al guardar los datos: ', error);
        throw error;
    }
};

//recuperamos la información 
export const obtenerDatos = async() =>{
    try{
        const datos = localStorage.getItem(CLAVE_USUARIOS);
        if (datos === null){
            return null;
        }
        return JSON.parse(datos);

    }catch(error) {
        console.error('Error al recuperar los datos', error);
        throw error;
    }
};

//eliminar los datos
export const eliminarDatos = async() =>{
    try{
        localStorage.removeItem(CLAVE_USUARIOS);
        return true;

    }catch (error){
        console.error('Error al eliminar los datos', error);
        throw error;
    }
};