import axios from "axios";

//Métodos de Consumo del API

const obtenerPorCedula = async (cedula) => {
  const data = await fetch(
    `http://localhost:8080/API/v1.0/Matricula/estudiantes/cedula/${cedula}`
  ).then((r) => r.json());
  console.log(data);
  return data;
};
const obtenerPorCedulaAxios = async (cedula) => {
  console.log(cedula);
  console.log("AXIOS");
  const data = axios
    .get(
      `http://localhost:8082/API/v1.0/Matricula/estudiantes/${cedula}/cedula`
    )
    .then((r) => r.data);
  console.log("AXIOS2");
  console.log(data);
  return data;
};
const guardar = async (estudianteBody) => {
  const data = axios
    .post(
      `http://localhost:8082/API/v1.0/Matricula/estudiantes/hateoas`,
      estudianteBody
    )
    .then((r) => r.data);
  console.log(data);
  return data;
};
const actualizar = async (cedula, estudianteBody) => {
  const data = axios
    .put(
      `http://localhost:8082/API/v1.0/Matricula/estudiantes/${cedula}/buscarPorCedula`,
      estudianteBody
    )
    .then((r) => r.data);
  console.log(data);
  return data;
};
const actualizarParcial = async (cedula, estudianteBody) => {
  const data = axios
    .patch(
      `http://localhost:8082/API/v1.0/Matricula/estudiantes/${cedula}/buscarPorCedula`,
      estudianteBody
    )
    .then((r) => r.data);
  console.log(data);
  return data;
};
const eliminar = async (cedula) => {
  const data = axios
    .delete(
      `http://localhost:8082/API/v1.0/Matricula/estudiantes/${cedula}/cedula`
    )
    .then((r) => r.data);
  console.log(data);
  return data;
};
//Métodos de Fachada es una buena práctica ya que no se debe exponer directamente los metodos que tiene la logica
export const obtenerPorCedulaFachada = async (cedula) => {
  return await obtenerPorCedula(cedula);
};
export const obtenerPorCedulaAxiosFachada = async (cedula) => {
  return await obtenerPorCedulaAxios(cedula);
};
export const guardarFachada = async (estudianteBody) => {
  return await guardar(estudianteBody);
};
export const actualizarFachada = async (cedula, estudianteBody) => {
  return await actualizar(cedula, estudianteBody);
};
export const actualizarParcialFachada = async (cedula, estudianteBody) => {
  return await actualizarParcial(cedula, estudianteBody);
};
export const eliminarFachada = async (cedula) => {
  return await eliminar(cedula);
};
