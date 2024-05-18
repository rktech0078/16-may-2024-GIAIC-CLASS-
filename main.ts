let stringArray: string[] = ['Rafay','Arsalan','Ayan'];

let numArray: number[] = [1,2,3,4,5];

let boolArray: boolean[] = [true, false,true];


// *********************************************************************************************** //

let mixedArray = [true, 1, 'Rafay', ]

// ********************************************************************************************** //


// console.log(numArray);

// console.log(boolArray);

// console.log(mixedArray);


let unionArray: (string|number|boolean|string[])[] = ['RK-TECH', 2, true,['Rafay'], 8, "Ayan"];

// console.log(unionArray[2]);
// console.log(unionArray[3]);

let students: string[] = ['Rafay','Arsalan','Naeem','Noman','Alvi']

// console.log(students);
// console.log("Before: " + students[3]);

students[3] = "Farzana"

// console.log(students);
// console.log("After: " + students[3]);

students.push("Ayan");
students.push("Kasahan");

students.push("Muheeb","Mustaqeem");


students.pop()
students.pop()

students.unshift("Arham" , "Aziz");

students.shift()

console.log(students);



