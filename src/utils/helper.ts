// Chequea si el string es vacio o nulo
export default function checkEmptyString(str: string) {
  let valid = false;
  if (str !== "" && str !== null) {
    valid = true;
  }
  console.log(str, valid);
  
  return valid;
}