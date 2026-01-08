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
console.log("data types of JS - summary");

// Primitive -> 7 types (call by value): String, Number, Boolean, null, undefined, Symbol, BigInt
// Reference -> Array, Objects, Functions
// to master JS, master objects and browser events

// JS is dynamically typed language

// video - 10
console.log("Stack and Heap memory in JS");
// Primitive type - Stack memory
// Reference type - Heap memory

// stack ke ander stored hue variable ka copy milta hai and heap ke andar stored hue variable ka reference millta hai

// video - 11
console.log("String");

const name1 = "Deepanshu";

const name2 = new String("Deepanshu"); // check its console log
console.log(name1.__proto__);
// same as
console.log(name2.__proto__);

console.log(name1.charAt(3));
console.log(name1.indexOf('p'));
console.log("substring and substr are 2 different methods");

// video - 12
console.log("Maths and Numbers");
const num = new Number(34.6);

console.log(num);
console.log(num.toFixed());
// imp --- toPrecision --- returns string
const otherNum = 123.4986
console.log(otherNum.toPrecision(7));
console.log(typeof otherNum.toPrecision(7));
// number me coma chahiye to localeString use kro
const hundreds = 10000000;
console.log(hundreds.toLocaleString()); // USA waala
console.log(hundreds.toLocaleString('en-IN')); // Ind waala

const maxSafeInterger = Number.MAX_SAFE_INTEGER;
const minSafeInterger = Number.MIN_SAFE_INTEGER;
console.log(minSafeInterger, maxSafeInterger);

// video - 13
console.log("Date and time in depth");
console.log(`Date is stored in ms in JS and sarting from 1 Jan 1970`);
const myDate = new Date();
console.log(typeof myDate); // Object
// year, month, date, hh, mm, ss
let createdDate = new Date(2026, 0, 8);
createdDate = new Date(2026, 0, 8, 3, 5, 87);

// video - 14 & 15 Array
console.log("Array");
console.log("slice, splice");

console.log(Array.from("Deepanshu"));
console.log(Array.from({name: "Deepanshu"}));

console.log(Array.of(name1, name2, points, points2, null));

// video - 16, 17,18 Object
// console.log("Objects");
// 