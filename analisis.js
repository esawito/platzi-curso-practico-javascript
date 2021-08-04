//funciones helpers
function esPar(numero) {
    return  (numero%2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado=0,nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
}

//Calculadora de mediana

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad -1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
//Mediana Mexico
const salariosMex = mexico.map(function (persona) {
    return persona.salary;
});

const salariosMexSorted = salariosMex.sort(function (a,b) {
    return a-b;
});

const medianaGeneralMex = medianaSalarios(salariosMexSorted);

//Mediana top 10
const splicesStart = (salariosMexSorted.length * 90)/100;
const spliceCount = salariosMexSorted.length - splicesStart;

const salariosMexTop10 = salariosMexSorted.splice(splicesStart,spliceCount);

const medianaTop10Mex = medianaSalarios(salariosMexTop10);

console.log({
    medianaGeneralMex,
    medianaTop10Mex
});