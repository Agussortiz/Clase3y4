// Lista de Súper - Parte III
var lista = []

lista.push('agua', 'leche', 'Azucar', 'Café')

// console.log(lista)

lista.unshift('yogurt','frutas')
// console.log(lista)

// console.log(lista.length)

var noHabia = lista.pop(0)
// console.log('no había '+ noHabia)

var comprado = lista.shift(0)
// console.log('compré '+ comprado)

// console.log('El arreglo tiene ' + lista.length+ ' variables')

// Lo de arriba seria el primer ejercicio de la lista del super

function logItems(){

    for(lista [0]; lista.length ; lista++){
        lista.forEach(arreglo => console.log(arreglo));
        
    }
[]
}

logItems(lista)
logItems(123)

function logItems(){
    lista.forEach(arreglo => console.log(arreglo));

[]
}

// Hasta acá estaría echo el primer ejercicio, vamos por el segundo


function invertir(listacomun){
    for( let i = listacomun.length - 1; i >= 0; i--) {
        console.log(listacomun[i])
        
    }
    
}

invertir(["a", "b", "c"])

function reverser(arreglo_func){
    for (let i = arreglo_func.length -1; i>= 0; i--){
        console.log(arreglo_func[i])
    }
}

reverser([1, 2, 3, 4])


// Ejercicio Poema Desordenado

// let poemaDesordenado = "los sean porque es ley tengan verdadera cualquier que porque entre pelean devoran de ajuera los los ellos si sea tiempo en unión primera la ésa unidos hermanos"

// Usá .split(' ') en poemaDesordenado y guardalo en un Arreglo llamado arregloDesordenado.
// Instanciá un nuevo Arreglo llamado arregloOrdenado.
// Mientras que el largo de arregloDesordenado sea mayor que 0, sacá el primer y el último elemento y guardalo en arregloOrdenado.

// let arregloDesordenado = poemaDesordenado.split(' ')

// console.log(arregloDesordenado)

// function ordenar(arregloOrdenado, arregloDesordenado2){
//     for(let i = arregloDesordenado2.length -1; i> 0; i--){
//         let partea = arregloDesordenado2.unshift()
//         arregloOrdenado.join(partea)
//     } 
//     console.log(arregloOrdenado)
// }

// ordenar(arregloDesordenado)


// Paso 1: Convertir el string en un array
let poemaDesordenado = "los sean porque es ley tengan verdadera cualquier que porque entre pelean devoran de ajuera los los ellos si sea tiempo en unión primera la ésa unidos hermanos";
let arregloDesordenado = poemaDesordenado.split(' ');

// Paso 2: Crear un nuevo array vacío para guardar los elementos ordenados
let arregloOrdenado = [];

// Paso 3: Usar un bucle while para sacar el primer y último elemento de arregloDesordenado
while (arregloDesordenado.length > 0) {
  let primerElemento = arregloDesordenado.shift(); // sacar el primer elemento
  let ultimoElemento = arregloDesordenado.pop(); // sacar el último elemento
  arregloOrdenado.push(primerElemento, ultimoElemento); // agregarlos al arregloOrdenado
}

// Paso 4: Convertir el array ordenado en un string
let poemaOrdenado = arregloOrdenado.join(' ');

console.log(poemaOrdenado)



// Desafío isUniform()

function isUniform(arreglo){
    
    if(arreglo.length === 0){
            return true
        }

        let primerelemento = arreglo[0]
        for(let i = 1; i<arreglo.length; i++){
            if(arreglo[i] !== primerelemento){
                return false
            }
        return true
        
    }
    
    
}

console.log(isUniform([1, 1, 1, 1]))
console.log(isUniform([1, 2, 1, 1])) // false
console.log(isUniform(["a", "b", "p"])) // false
console.log(isUniform (["b", "b", "b"])) // true





isUniform([1, 2, 1, 1]) // false


// Biggest Smallest
console.log('A partir de acá es el Biggest Smallest')



function biggest_smallest(arr) {
    let min = arr[0];
    let max = arr[0];
  
    arr.forEach(num => {
      if (num < min) {
        min = num;
      }
      else if (num > max) {
        max = num;
      }
    });
  
    console.log([min, max]);
}
  


biggest_smallest([111, 27, 31, 44, 101, 213, 33, 58]);


// Ejercicios: Filter



let mayoresOIgualesA5 = arr => {
    return arr.filter(num => num >=5)
}
 // Codeá la solución

console.log(mayoresOIgualesA5([3, 6, 8, 21])); // [6, 8, 21]


let numeros = [3, 7, 6, 13, 2, 24, 99];
let pares = numeros.filter(numero => numero%2 == 0)// Codeá la solución
console.log(pares); // [6, 2, 24]


console.log('Ejercicio de palabras')

let palabras = ['Et', 'Voluptua', 'Sed', 'At', 'Diam', 'Lorem']


const palabrasCortas = palabras.filter(palabra => palabra.length <= 3)// Codeá la solución
// Pongo funcion flecha haciendo que palabra sea menor o igual a 3

console.log(palabrasCortas);
// [ 'Et', 'Sed', 'At' ]



const mix = ['Ut vero.', 2, function () { console.log('hola mundo!') }, 56, 'Diam rebum nonumy et.', true,false,'Kasd stet.','Sit et dolor.',null,null,[ 1, 2, 3],'Dolore.'];
   
const soloStrings = mix.filter(ultramix => typeof ultramix === 'string')
// Codeá la solución
   
console.log(soloStrings);
// Debería mostrar
// [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]


//Fibonacci

function Fibonacci(fibonum){
    var vuelta = [0,1]
    if(fibonum == 0 || fibonum == 1){
        if(fibonum == 0){
            return '0'
        }else if(fibonum == 1){
            return '1'
        }
    }else{
        for(var i= 2; i <= fibonum; i++){
            vuelta[i] = vuelta[i-1]+vuelta[i-2]
            if(i === fibonum){
                return vuelta[i];
            }
        }
    }
    
}


console.log(Fibonacci(parseInt(prompt('Indica el número'))))

// SumArray
function sumArray(arreglo) {
    var suma = 0;
  
    for (var i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
  
    return suma;
}
  
  console.log(sumArray([1, 2, 3])); // Imprime 6
  console.log(sumArray([10, 3, 10, 4])); // Imprime 27
  console.log(sumArray([-5, 100])); // Imprime 95
  

  