// // Ejercicio lista de super

var lista = []

lista.push('agua', 'leche')

console.log(lista)

lista.unshift('yogurt','frutas')
console.log(lista)

console.log(lista.length)

var noHabia = lista.pop(0)
console.log('no había '+ noHabia)

var comprado = lista.shift(0)
console.log('compré '+ comprado)

console.log('El arreglo tiene ' + lista.length+ ' variables')

// // Map: Ejercicios

let numbers = [3, 7, 13, 99];
// CODEA LA SOLUCIÓN 
console.log(numbers); // [3, 7, 13, 99]

let dobles = numbers.map(x => x*2)

console.log(dobles); // [6, 14, 26, 198]


// // Ejercicio 2

let frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
// CODEA LA SOLUCIÓN
console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']

let frasesExclamadas = frases.map(function(frases){
    return `¡${frases}! `})

console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]


// // Reduce : Ejercicios
// // Ejercicio 1

let numbers1 = [6, 1, 34, 94, 3, 17];

const mul = numbers1.reduce((numbers1, mul) => numbers1 * mul)// CODEA LA SOLUCIÓN


console.log(mul);
// debería mostrar 977976



// // Condicional ternario: Se utiliza el símbolo "?" para crear una expresión . Sintaxis general: "condicion ? valor1 : valor2", donde "condicion" es una expresión booleana que se evalúa como verdadera o falsa, "valor1" es el valor que se devuelve si la condición es verdadera, y "valor2" es el valor que se devuelve si la condición es falsa.

// // Propiedad "length" de los arrays: Devuelve la cantidad de elementos del array.

// // Métodos de los arrays:

// // - "push": Añade uno o más elementos al final del array.
// // - "pop": Elimina el último elemento del array y lo devuelve.
// // - "unshift": Añade uno o más elementos al comienzo del array.
// // - "shift": Elimina el primer elemento del array y lo devuelve.
// // - "indexOf": Retorna la posición del primer elemento que coincida con el valor especificado en el argumento (o -1 si no se encuentra).
// // - "slice": Crea un nuevo array que contiene una copia de los elementos del array original. Se puede especificar desde qué posición se debe copiar y hasta qué posición (o desde una posición en adelante).
// // - "splice": Elimina uno o más elementos del array a partir de la posición especificada en el primer argumento, y opcionalmente agrega nuevos elementos en la misma posición.
// // - "join": Une todos los elementos del array en un string, utilizando el separador especificado como argumento.
// // - "includes": Retorna true si el array contiene al menos un elemento que coincide con el valor especificado en el argumento, o false si no lo contiene.
// // - "reverse": Invierte el orden de los elementos del array.
// // - "filter": Crea un nuevo array que contiene los elementos del array original que cumplen con la condición especificada en la función que se pasa como argumento.
// // - "forEach": Itera por cada elemento del array y ejecuta la función especificada como argumento.
// // - "map": Crea un nuevo array con los resultados de ejecutar la función especificada como argumento sobre cada elemento del array.
// // - "reduce": Ejecuta la función especificada como argumento sobre cada elemento del array, utilizando el valor acumulado en el primer parámetro como valor inicial. El resultado final es el valor acumulado después de procesar todos los elementos del array.

// // Condicional ternario utiliza ? (condicion ? valor1 : valor2)}
// // Propiedad de arreglo:
// // Length(): Devuelve e llargo de la lista
// // Metodos de arreglos:
// // Push: Añade elementos al final del arreglo
// // Pop: Saca el último elemento y lo retorna
// // Unshift: Agrega elementos al inicio del arreglo
// // Shift: Saca el primer elemento y lo retorna
// // IndexOf(Elemento): Retorna la posición del elemento (-1 si no está)
// // Slice: Clona el arreglo. Se puede especificar de que posición a que posición o desde una posición en adelante
// // Splice(2 o 3 argumentos): Saca elementos desde una posición la cantidad de veces especificada en el segundo argumento y los devuelve. El tercer argumento
// // detalla que reemplaza en el array original a los elementos eliminados
// // Join: Junta a los elementos del array en un string. Toma un argumento que es aquello que irá entre elementos en el string
// // Split(Método de string): Toma un string y lo divide en un array. Debe tener un argumento que indica que caracter utilizará para hacer la división.
// // Concat: Concatena dos arrays.
// // Includes: Igual al indexOf pero con valores booleanos.
// // Reverse: Invierte el array.
// // Filter: Crea un nuevo arreglo que cumple con las condiciones dictaminadas por la función que recibe como argumento.
// // ForEach: Itera por todos los elementos del arreglo y utiliza una función como argumento para realizar acciones sobre los elementos.
// // Map: Similar al ForEach pero más rápido
// // Reduce: Recibe una función que contiene 3 argumentos. El primero es el que guarda la el valor parcial de las operaciones que se ejecutan(Sirve como valor
// // inicial). El segundo guarda el valor de cada elemento del array. El tercero guarda el índice del arreglo con el que comienza a leer la función. 
// // Adentro de la función se coloca un return en el cual se agarra el primer parámetro de la función y se le realiza una operación con el segundo parámetro. 

// // Reduce: Recibe una función que contiene de 2 (obligatorios) a 4 argumentos. El primer argumento contiene el valor acumulado de las operaciones que se realizan y 
// // por defecto equivale a 0. El segundo argumento simplemente contiene el valor actual que se utiliza en la operación. El tercero guarda el index del arreglo desde 
// // el que comienza a iterar la función y por defecto es 0. El cuarto contiene la referencia al arreglo en sí.
// // -Los dos últimos argumentos son innecesarios y más complicados de implementar.
// // -Si coloco una coma después de la función que toma puedo especificar un valor de inicio quedando así: arr.reduce((a, b) => a * b, Valor inicial)


// // Ejercicio 2
// // Teniendo un Arreglo de números en la variable numeros, usá .reduce() para crear un nuevo Arreglo que contenga solo los números impares.
let numeros = [3, 7, 6, 13, 2, 24, 99];

// el segundo pasa uno por uno en el array y el primero acumula
// recorda que la funcion reduce recibe varios parametros (acumulador, valor_actual, index_actual, array_con_el_que_trabaja)

let impares = numeros.reduce(function transf(factorear, numero){
    if(numero % 2 != 0){
        factorear.push(numero)
        
    }
    return factorear
}, [])

console.log(impares)


// Ejercicio 3
// Teniendo un Arreglo de números (llamado numbers), usá .reduce() para obtener el máximo valor que posea el Arreglo.
let numbers2 = [5, 4, 1, 9, 2]

let max = numbers2.reduce(function maximo(elem, number){
    if(elem < number){
        elem.pop()
        elem.push(number)
    }
    return elem


}, []) // CODEA LA SOLUCIÓN

console.log(max)
// debería mostrar 9



// Ejercicio 4
// Completá la Función join que reciba un Arreglo de números y retorne un String con todos los números concatenados.
let arr = [1,2,3]
arr = arr.join("")
// CODEA LA SOLUCIÓN

console.log( arr ) // "123"

// Ejercicio 5
// Teniendo un Arreglo de números en la variable numeros, usá .reduce() para crear un Arreglo con los mismos números pero eliminando los repetidos.
// PISTA
// El método indexOf() puede ayudarte. Para más información, accedé a la documentación de Mozilla.
let numeros3 = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11]

let sinRepetidos = numeros3.reduce(
    function(acum, num){

     if(!acum.includes(num)){
        acum.push(num)
        
     }
    return acum;
},[])

// CODEA LA SOLUCIÓN
console.log(sinRepetidos)
// debería mostrar [ 5, 1, 7, 12, 2, 9, 0, 11 ]


// Ejercicio 6
// Teniendo un Arreglo llamado notasDeTPs(con números del 1 al 10), usá .reduce() para calcular la nota promedio final de todos los trabajos prácticos de este curso.
// PISTA
// Recordá que el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad total.
let notasDeTPs = [4, 7, 8, 5, 10];

let notaFinal = notasDeTPs.reduce((acumulador, nota) => acumulador + nota) / notasDeTPs.length;

console.log(notaFinal);
// debería mostrar 6.8




