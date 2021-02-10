// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var newarray = [];
  var keys = Object.keys(objeto);
  keys.forEach(key => newarray.push([key, objeto[key]]))
  return newarray
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var already_analized = []
  var string_set = new Set(string)
  var final_element = {}
  newstring = []
  string_set.forEach(letter => newstring.push(letter))
  for(var i = 0; i < newstring.length; i++){
    var counter = 0
    for(var j = 0; j< string.length; j++){
      if(newstring[i] === string[j]){
        counter++
      }
    }
    final_element[newstring[i]] = counter
  }
  final_element_final = {}
  var sorted_keys = Object.keys(final_element).sort()
  sorted_keys.forEach(key => final_element_final[key] = final_element[key])
  return final_element_final
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var upper = ''
  var lower = ''
  for(var i = 0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase()){
      upper += s[i]
    }
    else{
      lower+=s[i]
    }
  }
  return upper+lower
}




function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var final_phrase = ''
  var word_list = str.split(' ')
  for(var i = 0; i < word_list.length; i++){
    final_phrase += word_list[i].split('').reverse().join('') + ' '
  }
  return final_phrase.slice(0, final_phrase.length-1)
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  if(numero.toString().split('').reverse().join('') === numero.toString()){
    return 'Es capicua'
  }
  else{
    return 'No es capicua'
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var newstring = ''
  for(var i = 0; i < cadena.length; i++){
    if (cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c'){
      continue
    }
    else{
      newstring += cadena[i]
    }
  }
  return newstring
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var sorted = arr.sort((a, b) => a.length - b.length)
  return sorted
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var newarray = []
  for(var i = 0; i < arreglo1.length; i++){
    for (var j = 0; j < arreglo2.length; j++){
      if(arreglo1[i] == arreglo2[j]){
        newarray.push(arreglo1[i])
        continue
      }
    }
  }
  return newarray
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

