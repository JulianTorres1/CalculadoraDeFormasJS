
// codigo del cuadrado

const ladoCuadrado = 5;

//Funciones de circulos

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
}


let perimetroCuadradoResultado = perimetroCuadrado(ladoCuadrado);
let areaCuadradoResultado = areaCuadrado(ladoCuadrado);

console.group("cuadrado");
console.log("el area del cuadrado es: " + areaCuadradoResultado);
console.log("el perimetro del cuadrado es: " + perimetroCuadradoResultado);
console.log("-------------------------------------------");
console.groupEnd();

// codigo del triangulo
console.group("triangulos");

let ladoTriangulo1 = 6;
let ladoTriangulo2 = 6;
let baseTriangulo = 4;
let alturaTriangulo = 5.5;

// Funciones del triangulo

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo){

    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

function areaTriangulo(baseTriangulo, alturaTriangulo){

    return baseTriangulo * alturaTriangulo;
}

let perimetroTrianguloResultado = perimetroTriangulo(
    ladoTriangulo1,
    ladoTriangulo2,
    baseTriangulo
    );

let alturaTrianguloResultado = areaTriangulo(baseTriangulo,alturaTriangulo);    



console.log("Los lados Del Triangulo son: "

    + ladoTriangulo1
    + ladoTriangulo2
    + baseTriangulo
    + " y el perimetro del triangulo es "
    + perimetroTrianguloResultado
);
console.log("el area del triangulo es: " + alturaTrianguloResultado);

console.log("-------------------------------------------");
console.groupEnd();


// codigo del circulo

let radioCirculo = 4;

//Diametro
function diametroCirculo(radioCirculo){
    
    return radioCirculo * 2;
} 

//Circunferencia
function circunferenciaCirculo(radioCirculo){
    
    return Math.PI * diametroCirculo(radioCirculo);
}

//area
function areaCirculo(radioCirculo){
    
    return (radioCirculo * radioCirculo) * Math.PI;
}

// ejecucion

let diametroCirculoResultado = diametroCirculo(radioCirculo);
let circunferenciaCirculoResultado = circunferenciaCirculo(radioCirculo);
let areaCirculoResultado = areaCirculo(radioCirculo);

console.group("circulos");
console.log("el diametroCirculo es: " + diametroCirculoResultado);
console.log("La circunferencia del Circulo es: " + circunferenciaCirculoResultado);
console.log("El area del circulos es: " + areaCirculoResultado);
console.groupEnd(); 
