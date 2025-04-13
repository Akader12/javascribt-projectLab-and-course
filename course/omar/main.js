//                         arrays
// syntax  = let array = [item1,iitem2,item3]
// let shoppingList = ["milk","bread","kabo"];
// shoppingLis[0] = "sabiib"; => change the element of this index to the new element
// shoppingList.push("caano") => use to add in the last of the arrow
// shoppingList.pop(); =>  use to remove the last element of an array
// shoppingList.unshift("khamiis"); ==> add an element to the biginning
// shoppingList.shift(); => remove an element from the biginning
// shoppingList.sort() => sort into alphabetical order(A > Z)
// shoppingList.sort().reverse() => sort into alphabetical order(Z > A)
// shoppingList.length = to get the length of the array
// let index = shoppingList.indexOf("milk"); => to get the index of an Element
// for(let i = shoppingList.length - 1; i >= 0; i--){
//     console.log(shoppingList[i])
// }
// for(let shopping of shoppingList){
//     console.log(shopping)
// }
// console.log(shoppingList);
// let numbers = [10,20,30,40,50];
// for(let i = numbers.length -1; i >= 0;i--){
//         console.log(numbers[i])
// }
// for(number of numbers){
//         console.log(number)
// }
// numbers.forEach(function(nam){
//         console.log(nam)
// })
// console.log(numbers)
//                         objects
// syntax==> objectname{
//     key1: value1,
//     key2: value2,
//     key3: value3
// }
// let person = {
//     name: "biite",
//     age: 15,
//     city: "Abudwak",
// }
// person.email = "oamr@biite.com"
// console.log(person)
// person.age = 16;
// console.log(person["city"])

// let userProfile = {
//     name: "bite",
//     email: "biite@bb.com",
//     age: 15,
//     hobies: ["reading","coding","trraveling"],
//     address: {
//         street: 5678,
//         city: "Abudwak",
//         country: "somalia"
//     },
//     great:function(){
//         console.log(`hello yuo name is ${this.name}`);
//     }
// };
// for(key in userProfile){
//     console.log(`${key}:${userProfile[key]}`)
// }
// let userProfile = {
//     name: "bite",
//     email: "biite@bb.com",
//     age: 15,
//     hobies: ["reading","coding","trraveling"],
//     address: {
//         street: 5678,
//         city: "Abudwak",
//         country: "somalia"
//     }  
// };
// let {email,name,age} = userProfile;
// console.log(name,email,age);
// let userProfile = [{
//     name: "Cabdixafiid",
//     email: "cabdixafiid@gmai.com",
//     hobies: ["reading","coding","programming"],
//     address: {
//         street: 5678,
//         city: "Hargaisa",
//         country: "somalia"
//     }
// },
// {
//     name: "bite",
//     email: "biite@bb.com",
//     age: 15,
//     hobies: ["reading","coding","trraveling"],
//     address: {
//         street: 5678,
//         city: "Abudwak",
//         country: "somalia"
//     } 
// },
// {
//     name: "abdikader",
//     email: "abdikader@gmail.com",
//     age: 15,
//     hobies: ["reading","coding","walking"],
//     address: {
//         street: 5678,
//         city: "mogadisho",
//         country: "somalia"
//     },
// }];

// userProfile.forEach((student) =>{
//     //concatination
//     console.log(`name: ${student.name} \nclass: ${student.email} \nhobbies: ${student.hobies}`)
// })


//advanced array method
//scenario: E-commerce order management
// const orders = [
//     {id: 1, customer: "Biite", total:  50, status: "shipped"},
//     {id: 2, customer: "cabdi", total:  20, status: "delivered"},
//     {id: 3, customer: "Bakar", total:  40, status: "pending"},
//     {id: 4, customer: "saciid", total: 60, status: "shipped"},
//     {id: 5, customer: "xasan", total:  70, status:  "delivered"},
//     {id: 6, customer: "cali", total:  45, status: "pending"},
// ]
//map
// const costomerName = orders.map(order => order.customer)
// console.log(costomerName)

//filter
// const pendingOrders = orders.filter(order => order.status === "pending")
// console.log(pendingOrders)

//reduce
// const totalShipedReveniu = orders.reduce((total,order) =>{
//     if(order.status === "shipped"){
//         return total + order.total
//     }
//     return total
// },0);
// console.log(totalShipedReveniu)

// const pendingValue = orders.reduce((total,order) =>{
//     if(order.status === "pending"){
//         return total + order.total
//     }
//     return total
// },0)
// console.log(pendingValue)

// const deliveredValue = orders.reduce((order,deliver) =>{
//     if(deliver.status === "delivered"){
//         return order + deliver.total
//     }
//     return order
// },0);
// console.log(deliveredValue)
// let arr = [1,2,3,4];
// let sum = arr.reduce((tir,guud) => tir + guud,0)
// console.log(sum)
// let arr = [1,2,3,4]
// let iskuDhufasho = arr.reduce((acc,curr)=>acc * curr ,1)
// console.log(iskuDhufasho)

//map
// const marks = [40,50,60,70];
// let sum = marks.map((mark) => mark + 2)
// console.log(sum)

//filter
// const marks = [40,50,60,70];
// const fltered = marks.filter(mark => mark == 40 || mark == 80)
// console.log(fltered)

//Math objectctre
//1.random method
// console.log(Math.round(2.4)) nearest integer

//2.floor method
// console.log(Math.floor(4.3)); to non-decimal

// 3. pow method
// console.log(Math.pow(4,3))
// .max method
// console.log(Math.max(1,202,20,123))
// .min method
// console.log(Math.min(123,202,20,123))
// .random() methhod
// let r = 1;
// let y = 4;
// console.log(Math.floor(Math.random(r) * (y + 1)));
