// obtiene la diferencia de años
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

// calcula el total a pagar segun la brand
export function calcularMarca(brand){
    let incremento;

    switch(brand){
        case 'europeo':
            incremento = 1.30;
        break;
        case 'americano':
            incremento = 1.15;
        break;
        case 'asiatico':
            incremento = 1.05;
        break;
        default:
        break;
    }
    return incremento;
}

// calculo tipo de seguro
export function obtenerPlan (plan) {
    return (plan==='basico') ? 1.20 : 1.50;
}

// Muestra la primera letra mayuscula
export function primeraLetraMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}