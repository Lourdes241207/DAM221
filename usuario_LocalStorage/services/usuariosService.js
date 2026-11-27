// usuariosService

import {
    guardarDatos,
    obtenerDatos
} from '../storage/localStorage';

// USUARIOS INICIALES PARA LA PRIMERA EJECUCIÓN
const usuariosIniciales = [
    { id: '1', nombre: 'Isay Guerra', edad: 22 },
    { id: '2', nombre: 'Ana López', edad: 19 },
    { id: '3', nombre: 'Carlos Gonzalez', edad: 25 },
    { id: '4', nombre: 'Bjork Guerra', edad: 21 },
    { id: '5', nombre: 'Luisa Martínez', edad: 28 }
];

// CONSULTAR TODOS LOS USUARIOS
export const obtenerUsuarios = async () => {

    let usuarios = await obtenerDatos();

    if (usuarios === null) {
        await guardarDatos(usuariosIniciales);
        usuarios = usuariosIniciales;
    }

    return usuarios;
};

// BUSCAR USUARIO POR ID
export const obtenerUsuarioPorId = async (id) => {

    const usuarios = await obtenerUsuarios();

    return usuarios.find(
        usuario => usuario.id === String(id)
    );
};

// AGREGAR UN NUEVO USUARIO
export const agregarUsuario = async (nombre, edad) => {

    if (!nombre || !nombre.trim()) {
        throw new Error('El nombre es obligatorio');
    }

    if (
        !edad ||
        !Number.isInteger(Number(edad)) ||
        Number(edad) <= 0
    ) {
        throw new Error('Ingresa una edad válida');
    }

    const usuarios = await obtenerUsuarios();

    const nuevoUsuario = {
        id: Date.now().toString(),
        nombre: nombre.trim(),
        edad: Number(edad)
    };

    usuarios.push(nuevoUsuario);

    await guardarDatos(usuarios);

    return nuevoUsuario;
};

// ACTUALIZAR USUARIO
export const actualizarUsuario = async (id, nombre, edad) => {

    if (!nombre || !nombre.trim()) {
        throw new Error('El nombre es obligatorio');
    }

    if (
        !edad ||
        !Number.isInteger(Number(edad)) ||
        Number(edad) <= 0
    ) {
        throw new Error('Ingresa una edad válida');
    }

    const usuarios = await obtenerUsuarios();

    const indice = usuarios.findIndex(
        usuario => usuario.id === String(id)
    );

    if (indice === -1) {
        throw new Error('Usuario no encontrado');
    }

    usuarios[indice] = {
        ...usuarios[indice],
        nombre: nombre.trim(),
        edad: Number(edad)
    };

    await guardarDatos(usuarios);

    return usuarios[indice];
};

// ELIMINAR USUARIO
export const eliminarUsuario = async (id) => {

    const usuarios = await obtenerUsuarios();

    const nuevaLista = usuarios.filter(
        usuario => usuario.id !== String(id)
    );

    if (nuevaLista.length === usuarios.length) {
        throw new Error('Usuario no encontrado');
    }

    await guardarDatos(nuevaLista);

    return true;
};