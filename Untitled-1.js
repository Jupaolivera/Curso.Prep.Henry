/*var alumnos = {
  'emi': {
    'hobbies':'sí'
  },
  'jorge':{
    hehecho : 'He hecho lo mío',
    nunca : 'Nunca he sido',
    get hazlotuyo() {
       return this.hehecho
    },
    get nunca2(){
      return this.nunca
    },
    set hazlotuyo2(value){
      this.hehecho = value
    },
    set nunca3(value2){
      this.nunca = value2
    }
  }
}
console.log(alumnos.jorge.hazlotuyo)
console.log(alumnos.jorge.nunca2)
alumnos.jorge.hazlotuyo2 = 'Lo he hecho'
alumnos.jorge.nunca3 = 'Sí, he sido'
console.log(alumnos.jorge.hazlotuyo)
console.log(alumnos.jorge.nunca2)
console.log(alumnos.emi, alumnos.emi.hobbies)*/


/*function FizzBuzz(){
  for (var i = 1; i < 101; i++) {
    if (i%3 === 0 && i%5 === 0) {
      console.log('FizzBuzz')
    } else {
      if (i%5 === 0) {
        console.log('Buzz')
      } else {
        if (i%3 === 0){
          console.log('Fizz')
        } else {
          console.log(i)
        }
      }
    }
  }
}

FizzBuzz()*/

/*function checker(array, integer){
  var checker2 = []
  for(var i = 0; i < array.length; i++){
    for (var j = 0; j < array.length; j++){
      if (i >= j){continue}
      if(array[i] + array[j] === integer){
        checker2.push(true)
      } else {
        checker2.push(false)
      }
    }
  }
  if(checker2.includes(true)){
    return true
  } else {
    return false
  }
}

console.log(checker([1, 2, 3, 4, 5, 6, 7, 8], 5)) */


/*function maxmin(array){
  var max_value = -Infinity;
  var min_value = Infinity;
  for(var i = 0; i < array.length; i++){
    if (array[i] > max_value){
      max_value = array[i]
    }
    if (array[i] < min_value){
      min_value = array[i]
    }
  }
  console.log(min_value, max_value)
}

maxmin([1, 2, 3, 4, -2000, 999999999])


function mixer(array1, array2){
  var object = {}
  for(var i = 0; i < array1.length; i++){
    object[array1[i]] = array2[i]
  }
  return object
}

console.log(mixer(['name', 'surname','treasure'], ['test', 'test2', 'test3']))*/


/*var a = 'aa54456(((sd'
console.log(/^\w+$/.test(a))*/

/*var a = '&/(asd'

var b = a.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
console.log(b)*/





/*function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var objeto = {
    nombre,
    edad,
    meow(){
      console.log('Meow!')
    }
  }
  return objeto
}*/


/*var usuario = {
  posts: [{post1:{likes:10}}, {post2:{likes:3}}]
}
usuario.posts.forEach(each=> console.log(each))*/



/*var a = 897
console.log(`${a.toString()}hola`)*/

//console.log(/^\d+$/.test("asd"))

/*var a = ["1, 2, 4, 13, 15"]
var b = []

b.push(a[0].split(", ")) 


console.log(b) */

/*function FindIntersection(strArr) { 
  var a = strArr[0] //primer subarray
  var b = strArr[1] //segundo subarray
  var a_int_str = strArr[0].split(", ")//subarray de ints written as strings (["1, 2, 3, 4"] => ["1", "2", "3", "4"])
  var b_int_str = strArr[1].split(", ")//mismo con el segundo
  var a_int = a_int_str.map(function(x){return parseInt(x, 10)})// de int written as a string to int a secas (["1", "2", "3", "4"], ([1, 2, 3, 4]))
  var b_int = b_int_str.map(function(x){return parseInt(x, 10)})//mismo con el segundo

  var final_array = []
  var answer = ""
  for(var i = 0; i < a_int.length; i++){
    if(b_int.includes(a_int[i])){  //itera. si element esta presente en ambos subarrays, agrega a la lista final
      final_array.push(a_int[i])
    }
  }
  if(final_array.length == 0){ //si la lista final esta vacia, retorna falso
    return false
  }else{
    for(var j = 0; j < final_array.length; j ++){
      answer += final_array[j].toString() + "," //convierte la lista final de ints a una string, agregandole coma
    }
  }
  return answer.slice(0, answer.length-1) //retorna la final string sin la ultima coma ("x, y, z," => "x, y, z")
}
  
   
//console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]))
//console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]))

var diez = [...Array(10)].map(function(tetarrota, i){return i + 1})
var tabladelseis = diez.map(x => x*6) // same as diez.map(function(x){return x*6})
console.log(tabladelseis)*/


/*strings = 'hola si chauchau tuvieja maicena rokelig supercalifrastilistico fasito ol o 321'

console.log(Math.max(...strings.split(" ").map(string => string.length)))
*/

/*
var array = [1, 2, 3, 4]
var a = Math.max(array)

console.log(a) //Nan

var array2 = [1, 2, 3, 4]
var b = Math.max(...array2)

console.log(b) //4
*/

/*
function tresdigitos(n){
  return(n>= 100 && n < 1000 ? true : false)
}

console.log(tresdigitos(100))
console.log(tresdigitos(99.9999))
console.log(tresdigitos(10000))
console.log(tresdigitos(999.99999))
*/


/*
function checkDigits(n, checker){
  if (n.toString().split('').length == checker){
    return true
  }
  return false
}


console.log(checkDigits(100, 3))
console.log(checkDigits(10000, 5))
console.log(checkDigits(10, 1))
console.log(checkDigits(100, 3))
console.log(checkDigits(1, 1))
console.log(checkDigits(1, 0))
*/
/*
class Viajeros{
  constructor(nombre, edad, pais){
    this.nombre = nombre,
    this.edad = edad,
    this.pais = pais
  }
}


var jorge = new Viajeros('Jorge', 23, 'Argentina')
var pablo = new Viajeros ('Pablo', 19, 'Chile')
var laura = new Viajeros ('Laura', 43, 'Bolivia')




Viajeros.prototype.saludar = function(){
  console.log(`${this.nombre} ${this.edad} ${this.pais}`)
}
*/

//laura.saludar()








/*

function filtrar(funcion){
  //tu codigo
  Array.prototype.filtrar = function(funcion){
      var newarray = []
      for (var i = 0; i < this.length; i++) {
        if (funcion(this[i])){
          newarray.push(this[i]);
        }
      }
      return newarray;
  };
}




filtrar()
var a = [1, 2, 3, 5, 6, 100, 101, 1000]
console.log(a.filtrar(function(x){return x % 2 == 0})) // regular function
console.log(a.filtrar(x => x % 2 == 0))//arrow function

*/
/*
function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function() {
    var stringInvertida = '';
    for(var i = this.length - 1; i>=0; i--) {
      stringInvertida = stringInvertida + this.charAt(i);
    }
    return stringInvertida;
  };
}

agregarStringInvertida()
var a = "asdfghijk"

console.log(a.reverse())


*/
/*
function buscarAmigo(array, nombre){
  for(let i = 0; i < array.length; i++){
      if (array[i].nombre == nombre){ //(array[i].nombre == nombre) <--- pelele
          return array[i]
      }
  } return 'object does not exist'
}

var list = [{nombre: 'test', edad: 'test age'}, {nombre: 'test2', edad: 'test age 2'}, {nombre: 'test3', edad: 'test age 3'}]


console.log(buscarAmigo(list, 'test'))
console.log(buscarAmigo(list, 'test2'))
console.log(buscarAmigo(list, 'test3'))
console.log(buscarAmigo(list, 'test4'))
*/
/*
var object = {maicena : 'una banda'}

console.log(Object.keys(object)[0])*/

/*
function cuantosRepetidos(array, number){
  var flat_array = array.flat()
  var counter = 0
  for(let i = 0; i < flat_array.length; i++){
    if(flat_array[i] == number){
      counter++
    }
  }
  return counter
}


console.log(cuantosRepetidos([[3, 23, 1], [9, 23, 5], [1, 23, 8], [23, 23, 23, 23, 23, 23, 23]], 23))
*/

/*
function sumaTodos(array){
  counter = 0
  for(let i = array[0]; i < array[1]+1; i++){
    counter += i
  }
  return counter
}

console.log(sumaTodos([5, 5]))
*/


















//OPCION 2

/*
function filtrar(funcion){
  Array.prototype.filtrar = function(funcion){
      var newarray = []
      for (var i = 0; i < this.length; i++) {
        if (funcion(this[i])){
          newarray.push(this[i]);
        }
      }
      return newarray;
  };
}




filtrar()
var a =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(a.filtrar(x => x % 2 == 0)) //arrow 


console.log(a.filtrar(function(x){
  return x % 2 == 0
}))


*/


/*
//OPCIÓN 1


function filtrar(funcion){
  Array.prototype.filtrar = funcion
}



filtrar(function(){
  var new_array = []
  for(let i = 0; i < this.length; i++){
    if(this[i] % 2 == 0){
      new_array.push(this[i])
    }
  }
  return new_array
})


var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


console.log(b.filtrar())
*/





//FREE CODE CAMP ALGORITHMS 1

/*
function sym(args) {
  var temp_array = arguments[0].filter(element => !arguments[1].includes(element)).concat(arguments[1].filter(element=> !arguments[0].includes(element)))
  if(arguments.length == 2){
    var final_answer2 = Array.from(new Set(temp_array))
    return final_answer2.sort((a, b) => a - b)
  }else{
    temp_array = arguments[0].filter(element => !arguments[1].includes(element)).concat(arguments[1].filter(element=> !arguments[0].includes(element)))
    for(let i = 2; i < arguments.length; i++){
      temp_array = arguments[i].filter(element=> !temp_array.includes(element)).concat(temp_array.filter(element=>! arguments[i].includes(element)))
    
    }
    var final_answer = Array.from(new Set(temp_array))
    return final_answer.sort((a, b) => a - b)
  }
}


console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))
*/
/*
//FREE CODE CAMP ALGORITHMS 2

function updateInventory(arr1, arr2) {
  var ans = []
  var object = {}
  for(let i = 0; i < arr1.length; i++){
    object[arr1[i][1]] = 0 + arr1[i][0]
  }
  for(let i = 0; i < arr2.length; i++){
    
    if(object[arr2[i][1]] == undefined){
      object[arr2[i][1]] = 0 + arr2[i][0]
    }else{
    object[arr2[i][1]] += arr2[i][0]
    }
  }
  var keys = Object.keys(object)
  var sorted_keys = keys.sort()
  console.log(object)

  for(let i = 0; i < keys.length; i++){
    ans.push([object[sorted_keys[i]], sorted_keys[i]])
  }
  return ans
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]
];

 console.log(updateInventory(curInv, newInv))
 */
/*
var twoSum = function(nums, target) {
  var ans = []
  for(let i = 0; i < nums.length; i++){
      for(let j = 0; j < nums.length; j++){
          if(i >= j){continue}
          else{
              if(nums[i] + nums[j] == target){
                  ans.push(i, j)
                  return ans
              }
          }
      }
  }
};

console.log(twoSum([2,7,11,15], 9))

*/

/*
function filtrar(funcion){
  Array.prototype.filtrar = function(funcion){
      var newarray = []
      for (var i = 0; i < this.length; i++) {
        if (funcion(this[i])){
          newarray.push(this[i]);
        }
      }
      return newarray;
  };
}




filtrar()
var a =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(a.filtrar(x => x % 2 == 0)) //arrow 


console.log(a.filtrar(function(x){
  return x > 2
}))

*/

String.prototype.reverse = function(){
  return this.split("").reverse().join("")
}



var a = "holahola"

console.log(a.reverse())