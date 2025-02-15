let age = 14;
console.log(age);

let name = "kirill";
console.log(name);

let isStudent = true;
console.log(isStudent);

let myString = "У якийсь момент ви повинні відпустити образи, тому що вони тільки болять. Taylor Swift";
console.log(myString);

let myNumber = 10;
console.log(myNumber + 10);

let myNull = null;
console.log(myNull)

let enteredname = prompt("Please enter your name");

alert ("hello " + enteredname);

let isConfirmed = confirm("Ви підтверджуєте дію?");
if (isConfirmed) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}

alert ("Ця дія небезпечна, підтвердіть далі");

let dangerConfirm = confirm ("Ця дія небезпечна, ви впевненні,");

if (dangerConfirm) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}