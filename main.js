var stringArray = ['Rafay', 'Arsalan', 'Ayan'];
var numArray = [1, 2, 3, 4, 5];
var boolArray = [true, false, true];
// *********************************************************************************************** //
var mixedArray = [true, 1, 'Rafay',];
// ********************************************************************************************** //
// console.log(numArray);
// console.log(boolArray);
// console.log(mixedArray);
var unionArray = ['RK-TECH', 2, true, ['Rafay'], 8, "Ayan"];
// console.log(unionArray[2]);
// console.log(unionArray[3]);
var students = ['Rafay', 'Arsalan', 'Naeem', 'Noman', 'Alvi'];
// console.log(students);
// console.log("Before: " + students[3]);
students[3] = "Farzana";
// console.log(students);
// console.log("After: " + students[3]);
students.push("Ayan");
students.push("Kasahan");
students.push("Muheeb", "Mustaqeem");
students.pop();
students.pop();
students.unshift("Arham", "Aziz");
students.shift();
console.log(students);
