let name = "John";
const age = 30;
var check = true;
let isActive = true;     // Boolean
let person = {           // Object
    name: "Alice",
    age: 25
};
let numbers = [1, 2, 3]; // Array

let x = 10;
let y = 5;
let result = x + y; // Toán tử số học
let isEqual = (x == y); // Toán tử so sánh
let isValid = (x > y && y > 0); // Toán tử logic

if (age > 18) {
    console.log("Adult");
} else {
    console.log("Child");
}

let color = "red";
switch (color) {
    case "red":
        console.log("Red color");
        break;
    case "blue":
        console.log("Blue color");
        break;
    default:
        console.log("Other color");
}

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // In ra 0, 1, 2, 3, 4
}
// while loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
// for...of loop (dùng với mảng)
let numbers = [1, 2, 3, 4];
for (let number of numbers) {
    console.log(number);
}

// Hàm không có tham số
function greet() {
    console.log("Hello, World!");
}
// Hàm có tham số
function add(a, b) {
    return a + b;
}
greet(); // Gọi hàm greet
// Gọi hàm add và in ra kết quả 5
console.log(add(2, 3));

let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // In ra "apple"
fruits.push("orange"); // Thêm phần tử "orange" vào cuối mảng

let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
console.log(person.name);  // In ra "John"
person.greet();            // Gọi phương thức greet() trong đối tượng


let age2 = 20;
if (age2 >= 18) {
    alert("Bạn đã đủ tuổi.");
}

for (let i = 0; i < 5; i++) {
    console.log("Lần lặp thứ " + i);
}

document.getElementById('myElement').innerHTML = "Nội dung mới";

function sayHello() {
    alert("Chào mừng bạn đến với trang web!");
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('input-text').addEventListener('input', function() {
        console.log("Giá trị nhập: " + this.value);
    });
});


$('#search-button').click(function() {
    alert("Nút tìm kiếm đã được nhấn!");
});


