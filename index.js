// video 1
console.log("Chai aur code - JS");

// video - 4
console.log("let var const");

// video - 5
console.log("use strict, dataTypes and EMCA standards");

// video - 6
console.log("DataType conversion confusion");

Number("33"); // 33
Number("33abc"); // NaN
Number(null); // 0
Number(undefined); // NaN
Number(true); // 1
Number(false); // 0
typeof NaN; // number

console.table([Number("33"), Number("33abc"), Number(null), Number(undefined), Number(true), Number(false), typeof NaN]);

// video - 7
console.log("Why string to number conversion is confusing");

console.log(1 + 2);
console.log(1 + "2");
console.log("1" + 2);
console.log("1" + "2");
console.log("1" + 2 + 2);
console.log(1 + "2" + 2);
console.log(1 + 2 + "2");

console.log(+true); // 1
// console.log(true+); // error
console.log(+""); // 0

let points = 50;
console.log("points")
console.log(++points); // pre fix.... value phle increase hoti hai uske baad operation chlta hai
console.log("points2")
let points2 = 80;
console.log(points2++);// post fix.... phle operation chlta hai and baad me increase hoti hai

// video - 8
console.log("Comparison of datatypes in JS");
console.log("in JS equality check (==) and comparison checks (<,>,>=,<=) work differently");
// examples
console.log(null == 0); // false ... null ki value 0 se alag hoti hai

console.log(null > 0); // false .... null is coerced to 0 (type coecrion se type same kiiii and then 0 > 0 is false (obvi))
console.log(null >= 0); // true .... null is coerced to 0 (type coecrion se type same kiiii and then 0 >= 0 (obvi))


console.log(undefined == 0); // false ... undefined ka hr comparison me false
// TS ye sb allow hi nhi krta to ye sb bakchodi hi nhi

// video - 9
console("data types of JS - summary");

// Primitive -> 7 types (call by value): String, Number, Boolean, null, undefined, Symbol, BigInt
// Reference -> Array, Objects, Functions
// to master JS, master objects and browser events

// JS is dynamically typed language

// video - 10
console.log("Stack and Heap memory in JS");
// Primitive type - Stack memory
// Reference type - Heap memory