//sets
const myset = new Set ();
myset.add(100);
myset.add(true);
myset.add([1,2,3]);
//myset.add(100); we cannot add same value!
console.log(myset);

//delete method

// myset.delete(100);
// console.log(myset);

//has method

console.log(myset.has(100));

//foreach

myset.forEach(function(value){

   console.log(value);

})

for(let value of myset){
    console.log(value);

}



const array =Array.from(myset);

console.log(array);

