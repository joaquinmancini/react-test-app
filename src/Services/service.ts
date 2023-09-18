import axios from "axios";
const baseURL = "https://jsonplaceholder.typicode.com/users/.";

export interface Auto {
    id: number;
    marca: string;
    modelo: string;
    anio: number;
    patente: string;
    imagen: string;
}
// : Promise<Auto[]>
export const getUser = async(userID: string) => await axios.get(baseURL + userID)
.then((response) => {
  // manejar respuesta exitosa
  console.log(response.data);
  return response.data.email;
})
.catch((error) => {
  // manejar error
  console.log(error);
  console.log("Error en la peticion");
  
})
.finally(() => {
  console.log('Peticion ejecutada');
});