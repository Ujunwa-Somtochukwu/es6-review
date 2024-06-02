/*
var a;
a=10;
var b=11;
var c = 12;
a = 13;
console.log("a= "+ a + "b= "+ b + "c= "+ c)

var d;
d = a + b;
//e = a - b;
//f = a * b;
//g = a / b;
//h = a % b;
//console.log(d,e,f,g,h)

firstname = "Somto";
lastname = "Ujunwa";
Fullname = firstname +" "+ lastname;
console.log(Fullname)

a > 10;
console.log(a>10)
console.log(a>10 && b>10);
console.log(a<10 || b<10)
console.log(!(a<10));
console.log(!(a<10)) || (!(b>10));

var age = 18;
var adult = (age > 18)? "yes":"no";
console.log(adult);

bitwiseA = 0;
bitwiseB = 1;
result = (bitwiseA & bitwiseB);
console.log(result);
console.log(typeof "Ujunwa Somtochukwu");

var minimumVotingAge = 18;
var age = 16;
if (age < minimumVotingAge) {
    console.log("Not Eligible to Vote");
} else {
    console.log("Eligible to vote");
}

var dayOfTheWeekCount = 22;
switch (dayOfTheWeekCount) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursay");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        comsole.log("Saturday");
        break;
    case 7:
        console.log("Friday");
        break;
    default:
        console.log("sorry, day of the week "+ dayOfTheWeekCount+" does not exist")
      
}

var friends = "Vivian";
switch(friends) {
    case "Vivian":
        console.log(18);
        break;
    case "Gossy":
        console.log(18);
        break;
    case "dausi":
        console.log(17);
        break;
    default:
        console.log("i dont know your age");

}

for ( var c = 15; c < 21; c++) {
    if(c>=18){
        console.log("adult")
        break;
    }
    console.log("underage");
    
}

var n = 1;
while( n != 5) {
    n = Math.floor((Math.random() * 10));
    console.log(n)
}

var t = "vivian";
for(l in t){
    console.log(l);
}

var z = 10;
while (z <20){
    console.log(z);
    z++;
}

var x = 0;
do{ x += 1;
    console.log(x)
} while (x<5)

//var readlineSync = require('readline-sync');
//var answer;
//do{
//    answer= readlineSync.question('What Should i do? [Type "exit" for me to quit]:')
//    console.log('You asked me to '+ answer)
//} while (answer != 'exit')

//var GameToPlay = require('readline-sync');
//var response;
//do{
//    response=GameToPlay.question('what game should we play[Type "stop" for me to end question]:')
//    console.log('we should play ' + response +'?')
//} while (response !='stop')


//var readline = require('readline');
//var crushes = readline.createInterface({
//    input:process.stdin,
//    output:process.stdout
//})
//function recursivecrushes() {
//    crushes.question('who do you have a crush on [type "exit" for me to mind my buisness]:', function(answer){
//        console.log('you have a crush on '+ answer)
//        if (answer=='exit')
//                return crushes.close();
//        recursivecrushes();

//    });
//};
//recursivecrushes();
// i dont really understand the alternative


function fullname (firstname, lastname){
    return (firstname + lastname);
}
console.log(fullname('Ujunwa ', 'Somtochukwu'));

var coursecode = function(coursename, coursenumber) {
    return coursename + coursenumber;
}
console.log(coursecode('ISM ',209 ))

function square(number) {
    number = number**2
    return number
}
var number = 20;
var numberSquared = square(number)
console.log(numberSquared);
console.log(number);

function multiplier () {
    var product = 1;
    for (var x = 0; x <arguments.length; x++) {
        product = product * arguments[x]
    }
    return product;
}
console.log(multiplier(10,30));
console.log(multiplier(10,30,10));
// dont really understand this

var accumulatedTotal = 0;
function sum (number1, number2) {
    var total = number1 + number2;
    accumulatedTotal = accumulatedTotal + total;
    return total;
}
console.log(sum(2,3));
console.log(accumulatedTotal);
console.log(sum(10,20));
console.log(sum(40,60));
console.log(accumulatedTotal);
// the above code basically takes all the previous calls of the 'sum' function and adds it to the accumulated total. it keeps track of the total sum of all numbers processed by the 'sum' function. yay!<3

var ClassageCalculator = 0;
function total (age1,age2) {
    var sum  = age1 + age2
    ClassageCalculator = ClassageCalculator + sum
    return sum
} 
console.log(total(23,10));
console.log(total(18,19));
console.log(ClassageCalculator);

 var attempt = parseInt('b10og');
console.log(attempt); //So, in simple terms, "parseInt" is like a translator that helps us understand numbers in different formats, but it only cares about the numbers and ignores everything else.

var Fop = parseFloat('4.00');
console.log(Fop);//So, in simple terms, "parseFloat" is like a calculator that helps us understand decimal numbers, but it only cares about the numbers and ignores everything else.

var danger = eval('9 + 1');
console.log(danger); // allows you to turn a piece of text into code but it is dangerous so find other options.

console.log(isFinite(10/0));// allows you to know if a value is finite or not

console.log(isNaN('zzz'));// prints 'true' if the value is not a number.

console.log(encodeURI("http://www.website.com/?fullname = Ujunwa Somtochukwu"));//So, in simple terms, encodeURIComponent() is like a translator that makes sure your web addresses are written correctly, by changing certain characters into a format that web browsers understand, while leaving important characters untouched. This helps prevent errors and ensures your web addresses work as intended.

console.log(encodeURIComponent("http://www.website.com/?fullname = Ujunwa Somtochukwu"));//So, in simple terms, encodeURIComponent() is like a super protective wrapper for your secret message. It makes sure every part of your message is safe and sound, no matter where it goes.

console.log(decodeURI('http://www.website.com/?fullname%20=%20Ujunwa%20Somtochukwu'))

console.log(decodeURIComponent('http%3A%2F%2Fwww.website.com%2F%3Ffullname%20%3D%20Ujunwa%20Somtochukwu'))

var courses= ["computer science","Information science","Electrical Engineering"];
console.log(courses);

var basket = [];
console.log(basket);

var expressions = ["Vivian",, 2 + 3, true];
console.log(expressions);
console.log(expressions[0]);
expressions[2] = false;
console.log(expressions[2]);
console.log(expressions[1]);

 var Portfolio = {
    name : {
        firstname:"Somtochukwu",
        lastname: "Ujunwa"
    },
    expertise:"SOftware development and Artificial Intelligence",
    languages:["python", "java","javascript"],
    Graduated:false,
    favoriteNumber:2
}
console.log(Portfolio);
console.log(Portfolio.name);
console.log(Portfolio['languages']);
console.log(Portfolio.name.firstname);
Portfolio.favoriteNumber = 7;
console.log(Portfolio.favoriteNumber);
Portfolio.age = 19;
delete Portfolio.Graduated; // if you place the console bwfore the change,the deletion will not work
console.log(Portfolio);
console.log('Graduated' in Portfolio);

function Person (firstName, lastName, height, weight) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.height = height;
    this.weight = weight;
    this.FullName = function() {
        return this.firstName +" "+ this.lastName
    }
}
    var person1 = new Person("Somtochukwu","Ujunwa",1.63,80);
    var person2 = new Person("Udeani", "Larissa",1.63,70);
    
console.log(person1);
console.log(person1.FullName());

function Student(Lastname,firstname,age,matricNo,course) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.course = course;
    this.matricNo = matricNo;
    this.coursecode = function() {
        return this.course + this.matricNo 
    }
}
var user1 = new Student("Abah","Vivian",18,100,"ISMS");
console.log(user1.coursecode());


console.log(person1.constructor);
console.log(user1.constructor);

Person.prototype.complexion = 'dark';
console.log(person1.complexion);

Person.prototype.getComplexion = function() {
    return this.complexion
}
Person.prototype.setComplexion = function(complexion) {
    this.complexion = complexion;
}
person1.setComplexion('black');
console.log(person1.getComplexion());

var person3 = new Person("Oyebanji","Firdaus",1.83,55,"dark");
console.log(person3);
console.log(person3.complexion);

var Fmath = Math.min(10,5,90);
console.log(Fmath);

var today = new Date();
console.log(today);
var birthday = new Date(1940,4,30);
console.log(birthday);
var birthday = new Date('May 30,1980,19:00:00');
console.log(birthday);
var birthday = new Date(1980,4,30,19,0,0);
console.log(birthday);

function calculateAge(birthday){
    var today = new Date();
    var difference = today-birthday;
    var yearEquivalent = new Date(difference).getFullYear();
    return yearEquivalent - 1970;
}
var birthday = new Date(1980,12,30);
console.log(calculateAge(birthday));

function anniversaryCalc(anniversary){
    var today = new Date();
    var subtraction = today-anniversary;
    var EquivalentYear = new Date(subtraction).getFullYear();
    return EquivalentYear-1970;
}
 var anniversary = new Date(2004,10,16);
 console.log(anniversaryCalc(anniversary));

//function sleep(miliseconds){
//   console.log("going to sleep for " + miliseconds + "miliseconds")
//    var begin = new Date().getTime();
//    do{
//        nextTime = new Date().getTime();
//    } while(nextTime-begin < miliseconds)
//    console.log("sleep over")
//}
//sleep(3000);

//function SleepTime(milisecond){
//    console.log("im resting for "+ milisecond +" miliseconds")
//     var start = new Date().getTime();
//    do{  
//        end = new Date().getTime();
//    }while (end - start < milisecond);
//    console.log("its over already..sigh")
//}
//SleepTime(4000);



var RegExp =/xyz/;
var SearchString = "Locate xyz pattern in this text. The xyz could be in XYZ location";
console.log(RegExp.test(SearchString)); 

var RegExp = /abc/;
var alphabets = "i like to say my abc's, abc is my favorite part of the alphabets";
console.log(RegExp.test(alphabets));

var result;
while((result = RegExp.exec(SearchString)) != null) {
    console.log("index postition "+ result.index +" contains "+ result[0]);// i do not understand this RegEx thing
}

var PersonJSON1 = '{\
"names":{\
    "firstName":"Somtochukwu",\
    "lastName":"Ujunwa"\
},\
"complexion":"Dark",\
"Programmer": true,\
"degree":["highschool diploma","primary school certificate"]\
}';

console.log(PersonJSON1);

var p1Object = JSON.parse(PersonJSON1);
console.log(p1Object);//wraps it up to Jvascript object

var p1JSON = JSON.stringify(p1Object);
console.log(p1JSON) //changes it back to string

console.log(p1Object.complexion);
console.log(p1Object["complexion"]);

var x = "This is a string literal";
var y = new String ("This is a string Object");
var z = x + y;
console.log(z);
console.log(x.length);
console.log(x.constructor);

var Firstname = "Somtochukwu";
var Lastname = "Ujunwa"
var Fullname = Firstname.concat(' ',Lastname);
console.log(Fullname);

console.log(Fullname.includes('Ujunwa'));

var r = "let us searcg the text for somto. if Somto is found,..."
var regex = /somto/gi;
console.log(r.search(regex));

var d = "let us searcg the text for somto. if Somto is found,..."
var SearchTerm = 'somto';
var matchIndex;
var startIndex = 0;
while ((matchIndex = d.indexOf(SearchTerm,startIndex)) != -1){
    console.log(matchIndex);
    startIndex = matchIndex + 1;
}

var tryout = "today is the game. Game are fun";
var searchterm = 'game';
var matchindex;
var startindex = 0;
while((matchindex=tryout.indexOf(searchterm,startindex)) != -1){
    console.log(matchindex);
    startindex = matchindex + 1; // i dont even get
}

var u = " let us search for ujunwa. if Ujunwa is found...";
var regex = /ujunwa/gi;
var y = u.replace(regex,'Somto');
console.log(y);
console.log(u);

var f = " let us search for this text for uju. if Uju is found...."
var g = f.slice(33,38);
console.log(g);

var t = "let us search this text for gossy. if Gossy is found...";
var v = t.slice(-1);
console.log(v);
var v = t.slice(-17,-11);
console.log(v);
var v = t.slice(-17);
console.log(v);

var pLanguages = ["python","javascript","C++"];
console.log(pLanguages.length);
pLanguages.forEach(function(element) {
    console.log(element);
});

pLanguages.forEach(function(languages,index){
    var output = index + 1 + '.'+languages;
    console.log(output);
})

console.log(pLanguages.indexOf('python'));

var pLanguages = ["python","javascript","C++"];
var searchTerm = 'javascript';
var matchIndex;
startIndex = 0;
while((matchIndex = pLanguages.indexOf(searchTerm,startIndex)) != -1){
    console.log(matchIndex);
    startIndex = matchIndex + 1;
}

var pLanguages = ["python","javascript","C++"];
pLanguages.push('PHP');
console.log(pLanguages);

var pLanguages = ["python","javascript","C++"];
pLanguages.pop();
console.log(pLanguages);

var pLanguages = ["python","javascript","C++"];
pLanguages.shift();
console.log(pLanguages);

var pLanguages = ["python","javascript","C++"];
pLanguages.unshift();
console.log(pLanguages);

var mynumbers = [10,20,30,40,50];
var mydoublednumbers = mynumbers.map(function(number){
    return number * 2;
})
console.log(mydoublednumbers);

var magicSieve = [1,2,3,4,5,6];
var myevenNumbers = magicSieve.filter(function(numbers) {
    return numbers % 2 == 0 ;
})
console.log(myevenNumbers)

var calculator = [1,2,3,4,5,6,7,8,9,10];
var reduceOuput = calculator.reduce(function(accumulatedValue,number){
    return accumulatedValue + number;
})
console.log(reduceOuput);

var calculator = [1,2,3,4,5,6,7,8,9,10];
var reduceOuput = calculator.reduce(function(accumulatedValue,number){
    return accumulatedValue + number;
},100)
console.log(reduceOuput);

a = 10;
b = Number('10');
c = new Number(10);
console.log(a)
console.log(b);
console.log(c);
d = a.valueOf();
console.log(d)
e = b;
console.log(b);
g = Number('123somto');
h = parseInt('123somto');
console.log(g);
console.log(h);

try{
    console.output('provoking an error by calling a non-existent function');
}catch(error){
    console.log(error.message);
    console.log(error.name);
}

try{
    typefor("somto");
}catch(error){
    console.log(error.essage);
    console.log(error.name);
}

function multiplier(){
    var product = 1;
    if (arguments.length < 2){
        throw new Error("illegal arguments counts. Arguments must be greater than 1")
}
    for ( var x = 0; x < arguments.length; x++){
        product = product * arguments[x];
}
    return product;
}
try{
    console.log(multiplier())
}catch(error){
    console.log(error.message);
    }

*/

import logger, {appName,arithimetic,dummyFunction, multiplier, product} from './tools.js'; // logger is a variable and you can change it tot anything. When you import something from a module, you can name it whatever you want. The name you choose for the imported item doesn't have to match the name of the exported item in the module. It's entirely up to the developer's choice.
logger(`"Welcome!The application name is " + "${appName}" + ".There is a function that returns " + "${dummyFunction()}".`); // using tmplate literals (backticks)

import log, { genericFunction } from './tools.js';// log is also a variable and it can be anything e.g 'import now'
log(genericFunction());

import logs, {sibas} from './tools.js';
logs(sibas());
import bugger, {credentials} from './tools.js';
bugger (credentials());

log(product(2,3))
log(product(3))

try{
    log(multiplier(2,3,4));
} catch(error) {
    log(error.message);
}

log(arithimetic(2,3,4,6,7,8,9,10.5,12))

import mathematics,{area} from './tools.js';
mathematics(area(4,1,2,3,4))

import biograph, {Person} from './tools.js'
let person1 = new Person("Somto","Ujunwa","Female",1.56);
let person2 = new Person ("Gossy","Udeani","Female",1.56);
person1.firstName = "emmanuella";
log(`Person 1 is ${person1.getfirstName()} whose height is ${person1.height}. Person 2 is ${person2.getfirstName()} whose height is ${person2.height}`);

import math,{CustomMath} from './tools.js'
math(CustomMath.sqrt(100));

import bio,{User} from './tools.js';
let user1= new User ("myusername","mypassword","Somto","Ujunwa","Female","1.61");
log(`The username of ${user1.firstName} is ${user1.username}`)

new Promise ((resolve,reject) => { /* takes parameters. Promises wrap a particular task which needs to be executed asynchronously. Two outcomes: either resolved(everything works) or reject(task doesnt execute) most times when it resolves it is to accomplish another task, maybe handle an error*/
    setTimeout(()=> {
        resolve("Timeout is over");
    },1000) // this is where the promise ends
}).then ((data)=>{ // the then is the callback to execute whatver the promise said to do. it refers back to the outcome of the promise
    log(`${data}`);// this data can be anything because it is specified as any.
}).catch((error) => {
    log(`${error}`); //could also be bio
});

let user2 = new User ("igudeani","011021","Larissa","chigosirimmaya","female",undefined);
bio(`The username of ${user2.firstName} is ${user2.username}`)


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Timeout is over but i am upset, you should not have invoked a timeout in the firts  place. Hence i am sending a rejct instread of a reolve");
    }, 1000)
}). then((data)=>{
    log(`${data}`);
}).catch((error)=>{
    log(`Error message recieved: ${error}`);
})
// because you are rejecting, the catch is activated or executed, but if you reolve, the .then  block will be exectuted. so after one second the reolve function will be called and the then block will be executed, but now the reject function is called after one second and the catch block is executed
let user3 = new User ("Firedaisi","1937","Firdaus","Oyebanji","female",undefined);
bio(`The username of ${user3.firstName} is ${user3.username}`)

let myPromise = new Promise((resolve,reject)=> { // another important thing about Promise is that new Promise() coud also have been written as an expression passed to a named varible
    setTimeout(() => {
        resolve("Timeout est fini");
    }, 1000);
}); myPromise.then((data)=>{ // the .then and the .catch are then called on that variable afterwards.
    log(`${data}`);
}); myPromise.catch((error)=>{
    log(`${error}`);
});
new Promise ((resolve,reject)=> {
    setTimeout(() => {
        reject("Timeout is over, but i am upset cause youre not supposed to invoke in the first place, but i am sending a reject")
    }, 1000);
}).then((data)=>{
    log(`${data}`);
}).catch((error)=>{
    log(`Error message recieved: ${error}`);
}).then(()=>{
    log(`This function is executed after sucess or failure is returned`)
});
//  another point to note about promise is that another .then() call can be made after the .catch(). The additional .then() call is for a function that must be executed independent of whether the asynchronous function returned resolve or reject.

let url = 'https://jsonplaceholder.typicode.com/users/4';
fetch(url) // this is an a function that resolves a promise
.then (response => response.json())
.then(data => log(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email}`)) //use the json data     
.catch(error => log(`Error: ${error}`));

let link = ' https://jsonplaceholder.typicode.com/users/1';
fetch (link)//you do not have to be the one to define a new promise, because there are some built in functions in other libraries and all you have to do is provide the parameters required by the funtion and get the response with the .then and .catch.
.then(reply => reply.json()) // thesse reply and reply.json are variables, they can also be respnse.json
.then(data =>log(`Data: id = ${data.id},Name = ${data.name},Email = ${data.email}`))
.catch(error =>log(`Error:${error}`));

let fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json())
let fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json())
let fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json()) 

Promise.all([fetch1,fetch2,fetch3])// a situation where you would like to fetch asynchronously from multiple differnt sources and you want to act on the data only when all thedifferent asynchronous calls have returned. for this we use the promise.all(). this statement will get data for the three calls in an array
.then((data)=> {
    log(`User1 = ${data[0].name}; User2 = ${data[1].name}; User3 = ${data[2].name}`)//display data from array
})

const promiseAwareTimeout2 = (milliseconds=1000) =>{//This defines the function that will return new promise that wraps the asynchronous call to setTimeout(). this function expects miliseconds to be passed and if not the default will be 1000 miliseconds
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Timeout of ${milliseconds} milliseconds is over`);//send out  sucess feedback using reolve
        },milliseconds)
    });
}
const usepromiseAwareTimeout2 = async(milliseconds) => {// define a function that uses our promise executor
    log('About to call timeout')
    try{
        log(await promiseAwareTimeout2(milliseconds));
    }catch(error){
        log(error)
    }
};
usepromiseAwareTimeout2(4000);

let usersUrl = 'https://jsonplaceholder.typicode.com/users/';
const getUserById = async (userId) => { //user id parameter is expected
     let url = usersUrl + userId; //get the specific url for the user to fetch
     const response = await fetch(url); //make a call to the asynchronous fetch()
     const data = await response.json(); //make a call to the asynchronous conversion to json.     
     log (data.name); //log the feedback. 
    } 
    getUserById(2); //This should display 'Ervin Howell' on the browser. 

/*const promiseAwareTimeout = (milliseconds = 1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(`Timeout of ${milliseconds} milliseconds is over`);
        
        }, milliseconds)

    });
}
const usePromiseAwareTimeout = async(milliseconds) => { //whatever data youre passing is going to resolve a promise, it is expecting a promise
    log('About to call timeout')
    try{
        log(await promiseAwareTimeout(milliseconds));
    }catch(error) {
        log(error);
    }
};
usePromiseAwareTimeout(3000);*/
// i dont understand this thing arghhhhh


function* waitList(list){
    for(let person of list) {
        yield person; // creates yield for each item on the list. The list indicates a time of pause and resume in the function
    }
}//a return; can be used to terminate the generator at any point, it can e used betweeen yield statements if the developer wants to ignor ethe rest of the yields.
let mywaitList = waitList(['Firdaus','Gossy','Somto']);// calling waitList

let output = `The first yield value is: ${mywaitList.next().value}
Here is what is returned in the next call:${mywaitList.next().value}
Hopefully we still have room for a next call. Here is the return: ${mywaitList.next().value}
what if we call again and there is no more value to yield. Here is what we get: ${mywaitList.next().value}`//prepare the output

log(output);

function* complex(list) {
    for(let[index,value] of list.entries()){
        yield `Hi ${value}. You are number ${index + 1} on the list`
    }// return; terminates a generator at any point. can be used between two yeild statements

}
let mycomplex = complex(['Oyebanji','Udeani','Ujunwa']);

let output2 = `The first yield value is: ${mycomplex.next().value}
Here is what is returned in the next call:${mycomplex.next().value}
Hopefully we still have room for a next call. Here is the return: ${mycomplex.next().value}
what if we call again and there is no more value to yield. Here is what we get: ${mycomplex.next().value}`//prepare the output

log(output2);


