//Segun el servidor puede arrojar resultados distintos al esperado
export function dateConvertUsingLocaleDateString(fecha) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let dateInJs = new Date(fecha);
    return dateInJs.toLocaleDateString("es-ES", options)
  }

export function dateConvertByHand(fecha) {
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const fechaJS = new Date(fecha);
    return fechaJS.getDate() + 1 + " de " + meses[fechaJS.getMonth()] + " de " + fechaJS.getFullYear();
  }

export const sortByCantidadAndFirstLetters = (array, group) => { 
    return  array.sort((a,b) => group[b].cantidad - group[a].cantidad || group[a].tag.text.charCodeAt(0) - group[b].tag.text.charCodeAt(0) || group[a].tag.text.charCodeAt(1) - group[b].tag.text.charCodeAt(1)) 
}