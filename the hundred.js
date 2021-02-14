//1.Print numbers from 1 to 10.

//[...Array(10)].map((trash, index) => console.log(index + 1))

//2.Print the odd numbers less than 100

//Array(100).fill('Trash').map(function(trash, index){if((index + 1) % 2 != 0) {console.log(index + 1)}})

//3.Print the multiplication table with 7

//Array(10).fill('Trash').map((trash, index)=> console.log((index + 1) *7))

//4.Print all the multiplication tables with numbers from 1 to 10
/*for(var i = 1; i < 11; i ++){
    newarray = []
    Array(10).fill('Trash').map((trash, index)=>newarray.push((index + 1) * i))
    console.log(newarray)
}*/

//5.Calculate the sum of numbers from 1 to 10

//var a = []
//Array(10).fill('Trash').map((trash, index) => a.push(index + 1))
//console.log(a.reduce((a, b) => a + b))

//6.Calculate 10!

/*var ans = 1
for(var i = 1 ; i < 11; i++){
    
    ans *= i
}
console.log(ans)*/

//7.Calculate the sum of even numbers greater than 10 and less than 30

/*var sum = 0

for(var i = 11; i < 30; i++){
    if (i%2 == 0){
        sum += i
        console.log(i)
    }
}
console.log(sum)*/

//8.Calculate the sum of numbers in an array of numbers

/*var a = Array(10).fill(10)
console.log(a.reduce((a, b) => a + b))*/

//9.Calculate the average of the numbers in an array of numbers

/*var array = Array(10).fill('Trash').map((trash, index) => (index + 1) * Math.floor(Math.random()*30))
console.log(array.reduce((a, b) => a + b) / array.length)*/

//10.Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

/*function goodVibes(array){
    var ans = []
    for(var i = 0; i < array.length; i++){
        if (array[i] >= 0){
            ans.push(array[i])
        }
    }
    return ans
}

var mixed_vibes = [0, 0, 1, -200, 3000, 500, 600, 5, 100, 2, 300, 'death'] 

console.log(goodVibes(mixed_vibes))

*/

//11. Find the maximum number in an array of numbers

/*function maxim(array){
    var current_max = -Infinity 
    for (var i = 0; i < array.length; i++){
        if (array[i]> current_max){
            current_max = array[i]
        }
    }
    return current_max
}

var values = [-200, 300, 400, 500, -Infinity, 'soul']

console.log(maxim(values))*/

//12.Print the first 10 Fibonacci numbers without recursion

/*var a = [1]
for(var i = 1; i < 9; i++){
    if(a.length === 1){
        a.push(1)
    }else{
        a.push(a[a.length-1]+a[a.length-2])
    }
}
console.log(a)*/

//12b. Print first 100 Fibonacci numbers
/*var a = 0
var b = 1
var result = b
var fibonacci_array = []
for(var i = 0; i < 100; i++){
    fibonacci_array.push(result)
    result = a + b
    a = b
    b = result
}

console.log(fibonacci_array)*/


//13 Create a function that will find the nth Fibonacci number using recursion
/*function fiboFinder(n){
    var a = 0
    var b = 1
    var result = b
    var fibonacci_array = []
    for(var i = 0; i < n+1; i++){
        fibonacci_array.push(result)
        result = a + b
        a = b
        b = result
    }
    return fibonacci_array[n-2]
}

console.log(fiboFinder(25))*/

//14 Create a function that will return a boolean specifying if a number is prime

/*function primeChecker(n){
    if(n<2){
        return false
    }
    for(var i = 2; i < n; i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}

*/

//14b Create a function that returns an object with number:prime status(boolean) up to n (argument)

/*function primeStatus(n){
    var list = Array(n).fill('trash').map((trash, index)=> (index+1))
    var ans = {}

    function primeChecker(n){
        if(n<2){
            return false
        }
        for(var i = 2; i < n; i++){
            if(n%i === 0){
                return false
            }
        }
        return true
    }
    for(var i = 0; i < n; i++){
        ans[list[i]] = primeChecker(list[i])
    }
    return ans
}


        
console.log(primeStatus(100))
*/

//15.Calculate the sum of digits of a positive integer number

/*function digitSum(n){
    var digits = n.toString().split("")
    var counter = 0
    for(var i = 0; i < digits.length; i++){
        counter += parseInt(digits[i], 10)
    }
    return counter
}

console.log(digitSum(33319191))*/

//16.Print the first 100 prime numbers

/*var checker = 0
function primeChecker(n){
    if(n<2){
        return false
    }
    for(var i = 2; i < n; i++){
        if(n%i === 0){
            return false
        }
    }
    return true
}
var checker = 0
for(var i = 3; i < Infinity; i++){
    if(checker == 100){
        break
    }else{
        if(primeChecker(i)){
            checker +=1
            console.log([checker, i])
        }
    }
} */


//17.Create a function that will return in an array the first “p” prime numbers greater than “n”
/*function arrayPrimer(p, n){
    var ans = []
    function primeChecker(x){
        if(x<2){
            return false
        }
        for(var i = 3; i < x; i++){
            if(x%i === 0){
                return false
            }
        }
        return true
    }
    var counter = 0
    for(var i = n+1; i < Infinity; i++){
        if (counter == p){return ans}
        if(primeChecker(i)){
            counter += 1
            ans.push(i)
        }
    }
    return ans
}

console.log(arrayPrimer(1, 10))*/


//18.Rotate an array to the left 1 position

/*var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var b = Array(a.length)
for (var i = 0; i < a.length; i++){
    b[i] = a[(i+1)%a.length]
}

console.log(b)*/

//19. Rotate an array to the right 1 position

/*var c = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var d = Array(c.length)

for(var i = 0; i < c.length; i++){
    if(i == 0){
        d[i] = c[c.length-1]
    }else{
        d[i] = c[(i-1) % c.length]
    }
}

console.log(d)*/

//20.Create a function to reverse an array and return the result as a new array

/*function reverser(array){
    var a = array.reverse()
    return a
}

console.log(reverser([0, 1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]))*/


//21.Create a function that will merge two arrays and return the result as a new array

/*function concatenation(array1, array2){
    var newarray = []
    for(var i = 0; i < array1.length; i++){
        newarray.push(array1[i])
    }
    for(var j = 0; j < array2.length; j++){
        newarray.push(array2[j])
    }

    return newarray
}

console.log(concatenation([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]))*/

//22.Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

/*function only(array1, array2){
    var newarray = []
    for(var i = 0; i < array1.length; i++){
        if(!array2.includes(array1[i])){
            newarray.push(array1[i])
        }
    }
    for(var j = 0; j < array2.length; j++){
        if(!array1.includes(array2[j])){
            newarray.push(array2[j])
        }
    }
    return newarray
}


console.log(only([1, 2, 3, 4, 5], [1, 7, 8, 9, 4, 11]))
console.log(only([0, 0, 3, 4, 5], [9, 7, 8, 54, 4, 11]))*/

//23.Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

/*function only1(array1, array2){
    var newarray = []
    for(var i = 0; i < array1.length; i++){
        if(!array2.includes(array1[i])){
            newarray.push(array1[i])
        }
    }
    return newarray
}

console.log(only1([0, 1, 2, 3, 4, 5], [4, 5, 9, 8, 7, 4, 5]))
*/

//24.Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

/*function distinct(array){
    var ans = array.map(x => x = Math.floor(x * Math.random()*20))
    return ans
}

console.log(distinct([1, 1, 2, 3, 4 , 5, 6, 6]))*/

//25.Calculate the sum of first 100 prime numbers and return them in an array

/*var checker = 0
function primeChecker(n){
    if(n<2){
        return false
    }
    for(var i = 2; i < n; i++){
        if(n%i === 0){
            return false
        }
    }
    return true
}
var checker = 0
var prime_list = []
for(var i = 2; i < Infinity; i++){
    if(checker == 100){
        break
    }else{
        if(primeChecker(i)){
            checker +=1
            prime_list.push(i)
        }
    }
} 

console.log(prime_list.reduce((a, b) => a + b))*/

//26.Print the distance between the first 100 prime numbers
//27.Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

//28.Create a function that will return the number of words in a text
 
/*
function wordCounter(text){
    var word_list = text.split(" ")
    return word_list.length
}


console.log(wordCounter("uno dos tres cuatro cinco seis siete ocho nueve diez once doce trece catorce quince dieciseis diecisiete dieciocho diecinueve veinte veintiuno veintidos veintitres veinticuatro"))
*/




// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

/*var objetardo = {
    firstName : 'Jorge',
    lastName : 'Perez',
    size : 177,
    weigth : 80
}

function myFunction(object) {
    var newObject = {}
    if(object.hasOwnProperty('firstName')){
        newObject['firstName'] = object['firstName']
    }
    if(object.hasOwnProperty('lastName')){
        newObject['lastName'] = object['lastName']
    }
    if(object.hasOwnProperty('size')){
        newObject['size'] = object['size'].toString() + 'cm'
    }
    if(object.hasOwnProperty('weigth')){
        newObject['weigth'] = object['weigth'].toString() + 'kg'
    }
    return newObject
}

 console.log(myFunction(objetardo))*/

//29.Create a function that will capitalize the first letter of each word in a text

/*
function capitalizer(text){
    var word_list = text.split(" ")
    var capital_list = []
    var without_empty = word_list.filter(x => !!x == true)

    for(let i = 0; i < without_empty.length; i++){
        capital_list.push(without_empty[i][0].toUpperCase() + without_empty[i].substr(1))
    }

    var new_string = capital_list.join(" ")
    return new_string
}

console.log(capitalizer("test test test test test           test hola hola si si supercalifas jadhkasdj adhajd dahjsdhkahd ahd   "))
*/

//30.Calculate the sum of numbers received in a comma delimited string

function sumadorax(string){
    var numbers = string.split(",")
    var final = numbers.map(x => parseInt(x))
    return final.reduce((a, b) => a + b)
}


console.log(sumadorax("1,2,3,4,5,6,7,8,9"))

