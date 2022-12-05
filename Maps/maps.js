//Maps - key() - value()

// let myMap =new Map(); //create

// //console.log(myMap);

// const key1 ="Merve";
// const key2 ={a:10,b:20};
// const key3 =()=>2;

// //set

// myMap.set(key1,"String value");
// myMap.set(key2,"object value");
// myMap.set(key3,"functuion value");


// //get

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));


// console.log(myMap);

// //Map size

// console.log(myMap.size);






// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("Istanbul",15);
// cities.set("Izmir",4);

//foreach
// cities.forEach(function(value,key){
//     console.log(key,value);

// });

// //for of 

// for(let[key,value] of cities){
//     console.log(key,value);

// }

// //map Keys

// for (let key of cities.keys()){
//     console.log(key);

// }

// //map value

// for(let value of cities.values()){
//     console.log(value);

// }

// //create a map with arrays

// const array = [["key1","value1"],["key2","value2"]];


// const lastMap = new Map(array);

// console.log(lastMap);


//create an array from map
const cities = new Map();

 cities.set("Ankara",5);
 cities.set("Istanbul",15);
 cities.set("Izmir",4);

 const array = Array.from(cities);
 console.log(array);




