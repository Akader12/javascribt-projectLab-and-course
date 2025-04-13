// let str1 = "10" & 5;

// console.log(str1)
// console.log(str1)  ===> 512

// explicity type conversion
// string to number
// let str = "3456";
// console.log(typeof(str)) ===> string
// let num = Number(str)
// console.log(typeof(num)) ===> number

// Number to string
// let num = 1234;
// console.log(typeof(num)); ====> number
// let str = String(num);
// // console.log(typeof(str)); ====> string

// number to Boolean
// let str = 3456;
// console.log(typeof(str)); ====> number
// let str1 = Boolean(3456);
// console.log(typeof(str1)) ====> Boolean

// number to object
// let str = 3456;
// console.log(typeof(str)); 
// let str1 = Object/Array/new RegExp(str);
// console.log(typeof(str1))// ====> object

// const zero = document.querySelector(".zero");
// const decrease = document.querySelector(".btn1");
// const reset = document.querySelector(".btn2");
// const increase = document.querySelector(".btn3");
// let count = 0;


// increase.addEventListener("click", () =>{
//     count ++;
//     zero.textContent = count;
// });
// decrease.addEventListener("click", () =>{
//     count -= 1;
//     zero.textContent = count;
// });
// reset.addEventListener("click", () =>{
//     count = 0;
//     zero.textContent = count;
// });


// const btn = document.querySelector(".btn1");
// const label1 = document.querySelector(".label");
// let random1;

// let max1 = document.getElementById("max").value;
// let min1 = document.getElementById("min").value;
// let max = Number(max1);
// let min = Number(min1);

// console.log(max, min)
// btn.addEventListener("click", () =>{
//     random1 = Math.floor(Math.random() * (max - min)) + min;
//     label1.textContent = random1;
// });
// let a = 12;
// let b = 10;
// // let result = a * b;
// console.log(a * b);
// let muslim = Number(prompt("enter your age in year: "));
// while(muslim.typeOf != Number){

// }
// let str = "hello world";
// let pattern = /world/;
// console.log(pattern.test(str));
// let str = "javascribt is fun. i love javascribt";
// let pattern = /javascribt/gi;
// console.log(str.match(pattern));  
// let str = "i love cats";
// let pattern = /i/
// console.log(str.replace(pattern, match => `<p>${match}</p>`));
// pattern = document.getElementsByClassName("dogs") 
// console.log(pattern)
              
// if(age != Number){
//     let age = Number(prompt("enter you age in year(please enter number): "));
// }
// else if(age = Number){
//     console.log(`you are ${age} years old`)   
// }

// let score = prompt("enter your score: ");
// if(score === "" || score === null){
//     let score = prompt("enter your score: ");
// }else if(score >= 90){
//     console.log("grade a")
// }else if(score >= 80){
//     console.log("grade B")
// }else if(score>=70){
//     console.log("grade C")
// }else if(score <= 60){
//     console.log("you lose")
// const expr = "apple";
// switch(expr){
//     case "apple":
//         console.log("apple");
        
//     case "mangoes":
//         console.log("mangoes")
        
//     default :
//         console.log("out")
// }

// let day = Number(prompt("enter the nmber of the day"));
// while(day === "" || day === null || day === 0  || day > 7 ){
//     day = prompt("enter the nmber of the day");
// };
// chacked  = property that determines the chacked state of an html checkbox or radio button elemeng;


// switch(day){
//     case 1:
//         console.log("sabti");
//         break;
//     case 2:
//         console.log("Axad")
//         break;
//     case 3:
//         console.log("isniin")
//         break;
//     case 4:
//         console.log("talado")
//         break;
//     case 5:
//         console.log("Arbaco");
//         break;
//     case 6:
//         console.log("Khamiis")
//         break;
//     case 7:
//         console.log("arbaco")
//         break;
//     default:
//         console.log(`${day} isn't valid day`)
// } 
// let testScore = prompt("ente test score: ");
// let letterrade;
// switch(true){
//     case testScore >= 90:
//         letterrade = "A"
//         break;
//     case testScore >= 80:
//         letterrade = "B"
//         break;
//     case testScore >= 70:
//         letterrade = "C"
//          break;
//     case testScore >= 60:
//         letterrade = "d"
//         break;
//     default:
//         letterrade = "losed"
// }                              
// console.log(letterrade);


//                             ternary operator

// let age = 30;
// let msg = (age >= 20) ? `you are adult` : `you are minor`
// let time = 6;
// let greeting = (time <= 12) ? `good morning` : `good afternoun`;
// let isStudent = true;
// let msg = isStudent ? `you are student`:`youur arn't student`;
// let amount = 200;
// let dicount = amount > 100 ? 10 : 0;
// console.log(`you total $${amount - amount * (dicount/100)}`)
//                     loop
//     for //while // do ...while
// for(let i = 1; i <= 10; i++){
// }
// let sum = 0;
// for(let i = 1; i <=100; i++){
//     sum += i;
// }
//                 while
// let n = 0;
// while(n<10){
//     n++
//     console.log(n)
// }
// let password = "123abc";
// let attemps = 0;
// let logged = false;
// while(attemps <3 && !logged){
//     let password = String(prompt("enter a password:"));
//     if(password.length < 4){
//         password = prompt("enter a  password:");
//     }
//     else{
//         logged = true;
//     }
// }
// console.log(password.length)
// let num;
// do{
//     num = prompt("enter anumber")
// }while(isNaN(num)||num == ""|| num == null || num == 0 || num.length < 4);
// console.log(num)
//                 string slicing
// String methods = allow you to manipulate and work with text
// trim,toUpperCase,toLowerCase,repeat,length,indexOf,lastIndexOf,startsWith,startsWith,endsWith,replace,padstart,padEnd,slice
// let phoneNumber = "123-456-7890";
// phoneNumber = phoneNumber.padEnd("15", "0")
// console.log(phoneNumber)

//            email testing program
// let email = prompt("enter your email")
// while(email === "" || email === null || email.includes(" ") || !email.includes("@") || email.endsWith("@") || email.startsWith("@")){
//     email  = prompt("enter your email");
//     if(email.includes(" ")){
//         while(email.includes(" ")){
//              console.log("email can't include space")
//             break;
//         }
       
//     }else if(!email.includes("@")){
//         while(!email.includes("@")){
//             console.log("email must have @")
//             break;
//         }
//     }else if(email.endsWith("@")){
//         while(email.endsWith("@")){
//             console.log("you must enter domain")
//             break;  
//         }      
//     }else if(email.startsWith("@")){
//         while(email.startsWith("@")){
//             console.log("you must enter a username")
//             break;
//         }
//     }else{
//         break           
// }}
// let domain = email.slice(email.indexOf("@") + 1)
// let user = email.slice(0,email.indexOf("@"))
// console.log(`your username is ${user} and domain is ${domain}`)   
// for(let i = 1; i<10; i++){
//     console.log(i);
//     if(i === 0){
//         break
//     }
// }

// number guessing game 
// const minimum = 1;
// const maxmum = 100;
// const answer = Math.floor(Math.random() * (maxmum - minimum + 1) + minimum);
// let attemps = 0;
// let gues;
// let running = true;
// while(running){
//     gues = prompt(`gues anumber between 1 and 100`)
//     gues = Number(gues);

//     if(isNaN(gues)){
//         alert("please enter avalid number")
//     }
//     else if(gues < minimum || gues > maxmum){
//         alert("please enter avalid number")
//     }else{
//         attemps++
//         if(gues < answer){
//             alert(`too low! try again`)
//         }
//     }

//     running = false
// }
// variable scope = where avariablen is recognized and accesiible (local vs global)

// Aray = avariabel lke structure that can hold more than 1 value
// let fruit = ["apple","orrange", "banana"];
// fruit.sort().reverse()
// fruit.push("coccnut");
// fruit.pop();
// fruit.unshift("mango")
// fruit.shift()
// let numFruits = fruit.length;
// let index = fruit.indexOf('banana')
// fruit[0] = "coconut"
// conso/le.log(fruit)
// let fruits = ["apple", 'orange', "banana", "cocunut"];
// let sliced = fruits.slice(-3,-1)
// console.log(sliced)

// let fruits = ["apple", 'orange', "banana", "cocunut"];
// let spliced = fruits.splice(0,2)
// console.log(spliced)



// spread operator = ...allows an iterable such as array or string to be expanded into separate elements(inpucks the element)
// let num = [1,2,3,4,5];
// let max = Math.max(...num)
// let minimum = Math.min(...num)
// console.log(minimum)
// let user = "biite";
// let letters = [...user].join("-")
// console.log(letters)
// let fruits = ["apple", "orrange", "banana"]
// let vegatable = ["carrots", "celery", "potatoes"]
// let foods = [...vegatable, ...fruits, "eggs", "milk"];
// console.log(foods)


// rest parameters = (...rest) allow afunction work witha variable number of arguments by bundling them into an array.
// spread = expanes an array into separate elements
// rest = bundles separates into an array

// function openFridge(...foods){
//     console.log(...foods);
// }
// function getFood(...foods){
//     return foods
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "bariis";
// const food4 = "canjeero";
// const food5 = "baasto"
// openFridge(food1, food2, food3, food4, food5);
// const foods = getFood(food1,food2,food3,food4,food5);
// console.log(foods)

// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }
// function getAverage(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }
// const total = getAverage(9,100,85,90,50)
// console.log(`your total is $${total}`)

// function combineStrings(...string){
//     return string.join(" ");
// }

// const fullName = combineStrings("mr.", "spongebob","squarepants","iii");
// console.log(fullName)
        

//            function
// function declaraton = define a reusable block of code that performs a specific task
// function expression = a way  to define function as values or variables

// callback = a function that is passed as an argumenet to another function.

// hell();
// goodbye();
// function hell(){
//     setTimeout(function (){
//         console.log(`hello`);
//     },3000);
// }
// function goodbye(){
//     console.log(`goodbye`)
// }

// hello(wait);

// function hello(callback){
//     console.log(`hello`);
//     callback()
// }
// function wait(){
//     console.log(`wait`)
// }
// function leave(){
//     console.log("leave")
// }
// function goodbye(){
//     console.log(`goodbye`)
// }
// sum(dispalyPage, 6 ,7)
// function sum(callback, x, y){
//     let result = x + y;
//     callback(result)
// }
// function dispaly(result){
//     console.log(result)
// }
// function dispalyPage(result){
//     document.getElementById("myH1").textContent = result
// }

// forEach() = method use to iterate over the elements of an array and apply a speccific
// function to each element(callback) to each element
// array.forEach(callback)
// element,index,array are provided

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(double)
// numbers.forEach(triple)
// numbers.forEach(cube)
// numbers.forEach(dispaly)

// function triple(element,index,array){
//     array[index] = element * 3;
// }
// console.log(numbers)
// function double(element,index,array){
//     array[index] = element * 2;
// }
// function square(element,index,array){
//     array[index] = Math.pow(element,2);
// }
// function cube(element,index,array){
//     array[index] = Math.pow(element,3);
// }

// function dispaly(element){
//     console.log(element)
// }
// let fruits = ["apple", 'orange', "banana", "cocunut"];

// fruits.forEach(captalize)
// fruits.forEach(upperCase)
// fruits.forEach(dispaly)

// function upperCase(element,index,array){
//     array[index] = element.toUpperCase()
// }

// function lowerCase(element,index,array){
//     array[index] = element.toLowerCase()
// }

// function captalize(element,index,array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function dispaly(element){
//     console.log(element)
// }

//map() = accepts a callback and apllies that the function to each element of an array,then return new array
// const numbers = [1,2,3,4]
// const squares = numbers.map(square)
// const cubes = numbers.map(cube)


// function square(element){
//     return Math.pow(element , 2)
// }
// function cube(element){
//     return Math.pow(element,3)
// }
// console.log(cubes)
// const students = ["spongebob",'patrick','sandy']
// let studentUpper = students.map(upperCases)
// function upperCases(element){
//     return element.toUpperCase()
// }
// console.log(studentUpper)
// const dates = ["2024-1-10","2025-2-20",'2026-3-30']
// const formatedDates = dates.map(formatDates)
// console.log(formatedDates)
// function formatDates(element){
//     let part = element.split("-");
//     return `${part[1]}/${part[2]}/${part[0]}`
// }
// let numbers = [1,2,3,4,5,6,7]
// let isEven = numbers.filter(element => element % 2 === 0) 
// let isOdd = numbers.filter(element => element % 2 !== 0)
// console.log(isOdd)
// const ages = [16,17,18,19,20,60]
// let elligible = ages.filter(age => age >=18)
// console.log(elligible)
// let words = ['bi','cabdi','xasan','xuseen']
// let wordLenght = words.filter(word => word.length > 4)
// console.log(wordLenght)

//reduce() = reduce the element of an array to a single value
// const prices = [5,30,10,25,15,20]
// const total = prices.reduce(sum)
// console.log(total.toFixed(2))
// function sum(accumulator,element){
//     return accumulator + element
// }
// const grades = [90,70,40,20,10]
// const maxmum = grades.reduce(getMax)
// const manimum = grades.reduce(getMin)
// console.log(maxmum)
// console.log(manimum)

// function getMax(accumulator,element){
//     return Math.max(accumulator,element)
// }

// function getMin(accumulator,element){
//     return Math.min(accumulator,element)
// }

// this = reference to the object where THIS is used(the object depends on the immediate context). this keyword does not work in arrow function
//person.name = this.name
// const person1 = {
//     name : "biite",
//     favFood: "baasto",
//     sayHello: function(){console.log(`hi! I am ${this.name}`)},
//     eat: function(){console.log(`hi! I am ${this.favFood}`)}
// }
// const person2 = {
//     name : "biite",
//     favFood: "canjeero",
//     sayHello: function(){console.log(`hi! I am ${this.name}`)},
//     eat: function(){console.log(`hi! I am ${this.favFood}`)}
// }  
// person1.eat() ===> baasto
// person2.eat() ==> canjeero
// console.log(this)

//construtor = special method for defining the property and method of object
// function Car(make,model,year,color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function(){console.log(`you drive the ${this.model}`)}
// }
// const car1 = new Car("maarkeed","mustang",2024,"red")
// const car2 = new Car("probox","camaro",2025,"blue")
// const car3 = new Car("alta","biite",2025,"white")

// car1.drive()
// car2.drive()
// car3.drive()

// console.log(car1)
// console.log(car2)
// console.log(car3)

//class = (ES16 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor function. exple static keyword,encapsulation,inherutance

// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     displayProduct(){
//         console.log(`product: ${this.name}`);
//         console.log(`price: $${this.price.toFixed(2)}`);
//     }
//     calculatedTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }  
// const salesTax = 0.05;

// const product1 = new Product("ghj",80);
// const product2 = new Product("io", 19.99);

// product1.displayProduct()

// const total = product1.calculatedTotal(salesTax)
// console.log(total)

//static = keyword that defines properties or method that belong to a class itself rather than the objects created from that class(class  owns anything static not the object) 
// class mathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius *  2;
//     }
//     static getCorcomference(radius){
//         return 2 *  this.PI * radius;
//     }
//     static getArea(radius){
//         return this.PI * radius * radius
//     }
// }

// console.log(mathUtil.PI)
// console.log(mathUtil.getDiameter(10))
// console.log(mathUtil.getCorcomference(10))
// console.log(mathUtil.getArea(10))

// class User{
//     static userCount = 0;
//     constructor(userName){
//         this.userName = userName;
//         User.userCount++
//     }

//     static getUserCount(){
//         console.log(`ther are ${User.userCount} users online`)
//     }

//     sayHell0(){
//         console.log(`my userName is ${this.userName}`)
//     }
// }
// const user1 = new User("biite")
// const user2 = new User("xasan")
// const user3 = new User("cabdi")

// user1.sayHell0()
// user2.sayHell0()
// user3.sayHell0()

// User.getUserCount()

// inheritance = allows anew class to inherit properties from an existing class(parent -> child). it helps code reusable
// class Animal{
//     allived = true;

//     eat(){
//         console.log(`this ${this.name} is eating`)
//     }
//     sleeping(){
//         console.log(`this ${this.name} is sleeping`)
//     }
// }
// class Rabbit extends Animal{
//     name ="rabbit";

//     run(){
//         console.log(`this ${this.name} is running`)
//     }
// }
// class Fish extends Animal{
//     name ="Fish";

//     swim(){
//         console.log(`this ${this.name} is swimming`)
//     }    
// }
// class Hawk extends Animal{
//     name ="Hawk";

//     fly(){
//         console.log(`this ${this.name} is flying`)
//     }
// }
// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();
// console.log(rabbit.allived);
// rabbit.eat()
// rabbit.sleeping()
// rabbit.run()

//super = keyword is used in class to call the constructor or acces the properties and methods of a parent(superclass)
//this = this obect
//super = the parent

// class Animal{

//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     move(speed){
//         console.log(`the ${this.name} moves a speed of ${speed}mph`)
//     }

// }
// class Rabbit extends Animal{
//     constructor(name,age,runSpeed){
//         super(name,age);
//         this.runSpeed = runSpeed;
//     }

//     run(){
//         console.log(`this ${this.name} can run`);
//         super.move(this.runSpeed)
//     }

// }
// class Fish extends Animal{
//     constructor(name,age,swimSpeed){
//         super(name,age);
//         this.swimSpeed = swimSpeed;
//     }
//     swim(){
//         console.log(`this ${this.name} can swim`)
//         super.move(this.swimSpeed)
//     }
    
// }
// class Hawk extends Animal{
//     constructor(name,age,flySpeed){
//         super(name,age);
//         this.flySpeed = flySpeed;        
//     }
//     fly(){
//         console.log(`this ${this.name} can fly`)
//         super.move(this.flySpeed)
//     }
// }
// const rabbit = new Rabbit("rabbit1",1,23);
// const fish = new Fish("fish1",2,12);
// const hawk = new Hawk("hawk1",3,50);

// rabbit.run()
// fish.swim();
// hawk.fly()


//getter = special method that make a property readable
//setters = special method that makes a proper writeable

//validate and modify a value when reading/writing a property

// class Rectangle{
//     constructor(width,height){
//         this.width = width;
//         this.height = height;
//     }
//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth
//         }
//         else{
//             console.error(`width must be a positive number`)
//         }
//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height= newHeight;
//         }
//         else{
//             console.error(`height must be a positive number`)
//         }
//     }

//     get width(){
//         return `${this._width.toFixed(1)}cm`
//     }
//     get height(){
//         return `${this._height.toFixed(1)}cm`;
//     }
//     get arae(){
//         return `${(this._height * this._width).toFixed(1)} cm^2`
//     }


// }
// const rectangle = new Rectangle(3,4);

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.arae);

// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set firstName(newfirstName){
//         if(typeof newfirstName === "string" && newfirstName.length > 0){
//             this._newfirstName = newfirstName;
//         }
//         else{
//             console.error(`the first name must be valid`)
//         }
//     }
//     get firstName(){
//         return this._newfirstName;
//     }

//     set lastName(newlastName){
//         if(typeof newlastName === "string" && newlastName.length > 0){
//             this._newlastName = newlastName;
//         }
//         else{
//             console.error(`the last name must be valid`)
//         }
//     }
//     get lastName(){
//         return this._newlastName;
//     }


//     set age(newAge){
//         if(typeof newAge === "number"){
//             this._newAge = newAge;
//         }
//         else{
//             console.error(`the age must be valid`)
//         }
//     }

//     get age(){
//         return this._newAge;
//     }
// }
// const person = new Person("fgh","69",9);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);

// desttructuring = extract values from arrays and objects, then assign them to variable in a convenient way
//[] = to perform array desttructuring
//{} = to perform object desttructuring

// -----EXAMPLE1------
// SWAP  THE VALUE OF TWO VARIABLES
// let a = 1;
// let b = 2;
// [a,b] = [b,a]; 
// console.log(a)

// -----EXAMPLE2------
// SWAP  2 ELEMENTS IN AN ARRAY
// const colors = ["red","gereen","blue","black","white"];
// [colors[0],colors[4]] = [colors[4],colors[0]];
// console.log(colors)

// -----EXAMPLE3------
//ASIGN ARRAY ELEMENTS TO VARAIBLES
// const [firstColor,secondColor,thirdColor,...extaColors] = colors;
// console.log(firstColor,secondColor,thirdColor,extaColors)

//-----EXAMPLE4------
// EXTRACT VALUES FROM OBJECTS
// const person1 = {
//     firstName: "spongebob",
//     lastName: "squarePants",
//     age:30,
//     job: "CEO",
// }
// const person2 = {
//     firstName: "patrick",
//     lastName: "star",
//     age:33,
// }
// const {firstName,lastName,age,job = "Unemployed"} = person2;
// console.log(`${firstName} \n${lastName}\n${age}\n${job}`)

//-----EXAMPLE4------
//DESTRUCTURE IN FUNCTION PARAMETERS

// function diplayPerson({firstName,lastName,age,job = "unemployed"}){
//     console.log(`name: ${firstName} ${lastName}\nage: ${age}\njob: ${job}`);
// }


// const person1 = {
//     firstName: "spongebob",
//     lastName: "squarePants",
//     age:30,
//     job: "CEO",
// }
// const person2 = {
//     firstName: "patrick",
//     lastName: "star",
//     age:33,
// }
// diplayPerson(person1);

// const person2 = {
//     firstName: "patrick",
//     lastName: "star",
//     age:33,
// }
// console.log(Object.keys(person2));
// console.log(Object.values(person2));
// let sum = Object.entries(person2);
// let y = sum.concat(person2);
// console.log(person2);

// const person1 = {
//     firstName: "patrick",
//     lastName: "star",
//     info: function(){
//         console.log(`${this.firstName} ${this.lastName}`)
//     }
// }
// const person2 = {
//     firstName: "biite",
//     lastName: "mohammed",
// }
// person1.info.call(person2)
// const person1 = {
//     name: "patrick",
//     age:56,
//     }
// const person2 = {
//     name: "biite",
//     age:32,
// }
// function say(greeting){
//     console.log(greeting  + " " +this.name);
// }
// say.apply(person1,["hi"])

// const person1 = {
//     name: "patrick",
//     age:56,
//     }
// const person2 = {
//     name: "biite",
//     age:32,
// }
// function say(){
//     console.log(this.name, this.age);
// }
// let info =say.bind(person1);
// info()

//nested object = object inside another object. allows you to repersent more complex data sructures. child object is enclosed by a parent object

//person{address{},contactInfo}
//shoppingCart{keyboard{}, mouse{}, monitor{}}

// let person = {
//     fullName: "biite mohammed",
//     age: 16,
//     isStudent: true,
//     hobies: ['coding','reading','praying'],
//     address: {
//         street: '1223 b st.',
//         city: 'Abudwak',
//         country: 'Somalia'
//     }
// }

// for(let value in person){
//     console.log(value)
// }

// class Person{
//     constructor(name,age,...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address)

//     }
// }

// class Address{
//     constructor(street,city,country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }
// const person1 = new Person("biite",16,"km4","Mogadishu",'Somalia')
// const person2 = new Person("Abdikader",20,"bt.","Abuwak",'Somalia')
// const person3 = new Person("Faarah",23,"ceel cade","Hargeisa",'Somalia')

// console.log(person1.address.street)

// Array Object
// const fruits = [
//     {name: "apple",color: "red",calories: 95},
//     {name: "orange",color: "orange",calories: 45},
//     {name: "banana",color: "yellow",calories: 105,},
//     {name: "coconut",color: "white",calories: 159},
//     {name: "pineaple",color: "yellow",calories: 37,}
// ]
// fruits.push({name: "grapges", color: "purple", calories: "62"})
// fruits.pop()
// fruits.splice(1,3)
// console.log(fruits)
//------------forEach----
// fruits.forEach(fruit =>{
//     console.log(fruit.color)
// });
//--------map--
// let fruitNames = fruits.map(fruit => fruit.name)
// let fruitColors = fruits.map(fruit => fruit.name)

// console.log(fruitColors)
// -------filter--
// let yellowColor = fruits.filter(fruit => fruit.color === "yellow") ;
// let lowColories = fruits.filter(fruit => fruit.calories < 100)
// let highColories = fruits.filter(fruit => fruit.calories >= 100)

// console.log(lowColories)
// --------reduce()--
// let maxColories = fruits.reduce((acc,curr) =>{
//     return Math.max(curr.calories,acc)
// },0)  
// console.log(maxColories)
// let maxFruit = fruits.reduce((max, fruit) =>{
//     return fruit.calories > max.calories ? fruit: max
// })
// console.log(maxFruit)
// let minFruit = fruits.reduce((min, fruit) =>{
//     return fruit.calories < min.calories ? fruit: min
// })
// console.log(minFruit)

// sort = method used to sort element of an Array in place.
// sorts elements String in lexicographic order, not alphabetical.
// lexicographic = (alphabet + NumberSymbol) as String
// let numbers = [1,9,8,6,5,7,3,4,0,2,12];

// console.log(numbers.sort((a,b)=> a-b));
// console.log(numbers)

// const people = [
//     {name: 'sponegebob', age:30, gba:3.0},
//     {name: 'patrick', age:37, gba:1.5},
//     {name: 'squidward', age:51, gba:2.5},
//     {name: 'sandy', age:27, gba:4.0},
// ]
// people.sort((a,b) => a.age - b.age)
// people.sort((a,b)=> a.name.localeCompare(b.name))
// console.log(people)

//Shuffle an array
// using Fisher-Yates algorithm
// const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
// shuffle(cards);
// console.log(cards)
// function shuffle(array){
//     for(let i = array.length - 1; i > 0; i--){
//         const random = Math.floor(Math.random() * (i + 1));
//         [array[i],array[random]] = [array[random],array[i]];
//     }
// }

//Date object = objects that contain values that represnet dates andn times these date object can be changed and formatted
//date(year,month,day,hour,minute,second,ms)
// const date = new Date(2025,0,12,12,5,8);
// const date = new Date("2025-01-12T10:00:00");
// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();
// const hour = date.getHours()
// const minutes = date.getMinutes()
// const second = date.getSeconds()
// const milliSecond = date.getMilliseconds()

// const date = new Date();
// date.setFullYear(2024);
// date.setMonth(2)
// date.setDate(12)
// date.setHours(12)
// date.setMinutes(30)
// date.setSeconds(4)


// console.log(date)
// const date1 = new Date(2024,0,1)
// const date2 = new Date(2025,0,12)

// if(date2 > date1){
//     console.log(`it is`)
// }

//closure = a function defined inside of antherrr function,
//the function has access to the variables and scope of the outer function
//it allow for private variables and state maintenance
//Used frequently in JS frameworks: React,vue,Angular

// function outer(){
//     let massage = "hello";
//     function inner(){
//         let v = 789;
//         console.log(massage)
//     }
//     inner()
// };
// function createCounter(){
//     let count = 0;
//     function increment(){        
//         count++
//         console.log(`count increase to ${count}`)
//     }
//     function getCount(){
//         return count;
//     }
//     return {increment,getCount}
// }
// const counter = createCounter();
// counter.increment()
// counter.increment()
// counter.increment()

// console.log(counter.getCount())
// function createGame(){
//     let score = 0;
//     function increasedScore(points){
//         score += points;
//         console.log(`+${points}pts`)
//     }
//     function discreasedScore(points){
//         score -= points;
//         console.log(`-${points}pts`)
//     }
//     function getScore(){
//         return score;
//     }
//     return {increasedScore,discreasedScore,getScore}
// }
// const game = createGame();

// game.increasedScore(5)
// game.increasedScore(6)
// game.discreasedScore(3)
// console.log(`the final score is ${game.getScore()}pts`)

// setTimeout() = function in javascribt that allow you to schedule the execution of afunction after an amount of Time(millisecond)
//times are approximate (varies based on the workload of thejavascribt runtime env.)

// setTimeout(callback,delay)
// clearTimeout(timeoutId) = cancancel a timeout before it triggers

// const timeoutId = setTimeout(() => alert(`hello`),3000);
// clearTimeout(timeoutId);

// let timeoutId;
// function startTimer(){
//     timeoutId = setTimeout(()=>alert(`hallo`),3000);
//     console.log(`START`)
// }
// function clearTimer(){
//     clearTimeout(timeoutId);
//     console.log(`CLEAR`)
// }

// ES16 Modules = an external file that contains reusale code that can be imported into other javascrint files.
//write reusable code for many different apps.
//can contain varaibles,classes,functions ...and more

// import {PI, getArea, getCircumference,getVolume} from './mathUtil.js';

// const circumference = getCircumference(10);
// const area = getArea(10)
// const volume = getVolume(10)

// console.log(circumference.toFixed(2))
// console.log(area.toFixed(2),`cm^2`)
// console.log(volume.toFixed(2),`cm^3`)

//synchronous = executes line by line in asequently manner code thet waits for an operation to complete

//Asynchronous = allows multiple operation to be performed concurrently without waiting
//Asynchronous deosn`t block the execution flow and allows the program to continue (i/o operations,network,fetching data)
//aAsynchronous handled with callbacks,promises,async/Await

// function func1(callback){
//     setTimeout(()=>{console.log(`task 0`);callback()},3000);
// }

// function func2(){
//     console.log(`Task 1`)
//     console.log(`Task 2`)
//     console.log(`Task 3`)
// }
// func1(func2)

//Error = an object that is created to represent a problem that occurs
//Error occurs often with user input or establishing a connection

// try{} = encolses code that might potentialy cause an error
//catch{} = catch and handle any thrown from error{}
// finally{} = (optional) always executess. Used mostly for clean up ex. close files close connection,release resources

// try{
//     console.log(`hello`)
// }catch(e){
//     console.error(e)
// }
// finally{
//     console.log(`this always executes`)
// }
// console.log(`you have reached the end`)
// try{
//     let dividend = Number(prompt('Enter sn devidend:'));
//     let divisor = Number(prompt('Enter sn devisor:'));

//     if(divisor == 0){
//         throw new Error('you can devide by zero')
//     }
//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error(`must be number`)
//     }

//     const result = dividend  / divisor;
//     console.log(result)
// }catch(e){
//     console.error(e)
// }
// console.log(`you have reached the end`)
// console.dir(document)


// callback hell = situation in javascript whre callbacks aren nested within other calllbacks to the degree where the  code is difficult to read.
//Old pattern to handle asynchronous functions.
//use promises + async/await to avoid callback hell


// function task1(callback){
//     setTimeout(()=>{
//         console.log('task 1  completed');
//         callback()
//     },2000)
    
    
// }
// function task2(callback){
//     setTimeout(()=>{
//         console.log('task 2  completed');
//         callback()
//     },2000)
   
// }
// function task3(callback){
//     setTimeout(()=>{
//         console.log('task 3  completed');
//         callback()
//     },3000)
    
// }
// function task4(callback){
//     setTimeout(()=>{
//         console.log('task 4  completed');
//         callback()
//     },1500)
    
// }
// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 console.log('all task complete')
//             })
//         })
//     })
// })

/*
Promise = An object manages asynchronous operations.
wrap a promise object aroud {asynchronous}
'I will promise to return a value';
pending => resoved or rejectes;
new Promise(resolve,reject) => {asynchronous code}

Do these in order

1. Walk the dog
2. clean the kitchen
3. take out the trash
*/
// function walkDog(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             const dogWalked = true;
//             if(dogWalked){
//                 resolve('you walk the dog');
//             }else{
//                 reject('you did not walk the dog')
//             }
            
//         },1500)
//     })
// }
// function cleanKitchen(){    
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             const kitchenCleaned = false;
//             if(kitchenCleaned){
//                 resolve('you clean the kitchen');
//             }else{
//                 reject('you did not clean the kitchen')
//             }            
//         },2500)
//     })
// }
// function takeOutTheTrash(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             const trashTakenOut = true;
//             if(trashTakenOut){
//                 resolve('you take out the trash');
//             }else{
//                 reject('you did not take out the trash')
//             }
            
//         },500) 
//     })
// }

// walkDog().then(value => {
//     console.log(value); return cleanKitchen()
// }).then(value => {
//     console.log(value);
//     return takeOutTheTrash()
// }).then(value =>{
//     console.log(value);
//     console.log('you finished all the chores')
// }).catch(error => console.error(error))

//Promise = balan
//Asynchronous = wax aan isku mar dhacayn(not simultaneous)

// let promise = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         reject("waan helay")
//     },3000)
// })

//.then() for resolve
//.catch() for reject

// promise.then(result=> alert(result))
// promise.catch(error => console.log(error))


//async/await = async= makes a function return a promise
//await = makes an async function wait for a promise

//allows you write asynchronous code in a synchronous manner. async does not have resolve or reject parameters everything after await is placed in an event queue

// function walkDog(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             const dogWalked = false;
//             if(dogWalked){
//                 resolve('you walk the dog');
//             }else{
//                 reject('you did not walk the dog')
//             }
            
//         },1500)
//     })
// }
// function cleanKitchen(){    
//     return new Promise((resolve,reject) =>{
//         setTimeout(() =>{
//             const kitchenCleaned = true;
//             if(kitchenCleaned){
//                 resolve('you clean the kitchen');
//             }else{
//                 reject('you did not clean the kitchen')
//             }            
//         },2500)
//     })
// }
// function takeOutTheTrash(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             const trashTakenOut = true;
//             if(trashTakenOut){
//                 resolve('you take out the trash');
//             }else{
//                 reject('you did not take out the trash')
//             }
            
//         },500) 
//     })
// }

// async function doChores(){
//     try{
//         const walkDogResult = await walkDog()
//         console.log(walkDogResult)
//         const cleanKitchenResult = await cleanKitchen()
//         console.log(cleanKitchenResult)
//         const trashTakenOutResult = await takeOutTheTrash()
//         console.log(trashTakenOutResult)
//     }
//     catch(error) {
//         console.error(error)
//     }
    
// }
// doChores()

// async function firstAsync(){
//     let promise = new Promise((res,rej)=>{
//         setTimeout(()=>res('waan healau'),3000)
//     })
//     let result = await promise;
//     alert(result)
// }
// firstAsync()

//JSON = (javasccript object notation) data-interchage format used for exchaging data between a server and a web application
//JSON files {key:value} or [value1,value2,value3]

//JSON.stringify() = converts a js object to a json string
// JSON.parse() = converts a JSON strig to a js object