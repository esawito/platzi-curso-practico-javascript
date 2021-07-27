//Código del cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado} Cm`);

function perimetroCuadrado(lado){
    return lado * 4;
}

// console.log(`El perímetro del cuadrado es : ${perimetroCuadrado} Cm`);

function areaCuadrado(lado){
    return lado * lado;
}
// console.log(`El area del cuadrado es : ${areaCuadrado} Cm^2`);

console.groupEnd();

//Código del triangulo
console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(`Los lados del triangulo miden: ${ladoTriangulo1} Cm, ${ladoTriangulo2} Cm, ${baseTriangulo} Cm`);
// console.log(`La altura del triángulo es de : ${alturaTriangulo}Cm`);

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}
// console.log(`El perímetro del Triangulo es : ${perimetroTriangulo} Cm`);

// const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
function areaTriangulo(base,altura){
    return (base*altura)/2;
}
// console.log(`El area del Triangulo es : ${areaTriangulo} Cm^2`);

console.groupEnd();

//Código del Circulo
console.group("Circulo");

// const radioCirculo = 4;
// console.log(`El radio del círculo es: ${radioCirculo}Cm`);
// const diametroCirculo = radioCirculo*2;
function diametroCirculo(radio){
    return radio*2;
}
// console.log(`El diametro del círculo es: ${diametroCirculo}Cm`);
// const PI = Math.PI;
// console.log(`PI es: ${PI}`);
// const circunferenciaCirculo = diametroCirculo*PI;
function circunferenciaCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*Math.PI;
}
// console.log(`La circunferencia del círculo es: ${circunferenciaCirculo}Cm`);
// const areaCirculo =  (radioCirculo*radioCirculo)*PI;
function areaCirculo(radio){
    return (radio*radio)*Math.PI;
}
// console.log(`El area del círculo es: ${areaCirculo}Cm^2`);

console.groupEnd();

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    alert(area);
}

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const valueLado1 = parseInt(inputLado1.value);
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const valueLado2 = parseInt(inputLado2.value);
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = parseInt(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);

    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = parseInt(inputBase.value);
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueAltura = parseInt(inputAltura.value);

    const area = areaTriangulo(valueBase,valueAltura);

    alert(area);
}

function calcularCircunferenciaCirculo(){
    const inputRadio = document.getElementById("InputCirculoRadio");
    const valueRadio = parseInt(inputRadio.value);

    const circunferencia = circunferenciaCirculo(valueRadio);

    alert(circunferencia);

}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("InputCirculoRadio");
    const valueRadio = parseInt(inputRadio.value);

    const area = areaCirculo(valueRadio);

    alert(area);

}


