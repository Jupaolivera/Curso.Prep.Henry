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

function myFunction( input ) {
  var max = -Infinity 
  for(var i = 0; i < input.length; i++){
     if(input[i] > max){
        max = input[i]
     }
  }
  return max
}



console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1000]))