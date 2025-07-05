var name2 = 1000;
const Pi = 3.14;

function changeTextTitle(){
    let newText = (Math.random() + 1).toString(36).substring(7);
    console.log(newText);
    document.getElementById("titleId").innerHTML = newText + name2;
}

 // Biến

/*
let: được sử dụng để khai báo trong các khối code hoặc trong các method, biến local
var: được sử dụng như 1 biến toàn cục, khai báo và sử dụng trong toàn bộ file
const: được sử dụng để khai báo các biến hằng, không thể thay đổi
 */
console.log(name2);
console.log(Pi);

var dataString = 'hello';
var checked = true;
let person1 = {
    name: 'kien',
    age: 25,
    id: true,
    getName(){
        console.log(this.name);
    }
}
console.log(person1);
person1.getName();


var numbers = [1,2,3,4,5];
var names = ['a','b','c'];

names.push('e');
console.log(names);

console.log('demo for i')
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
console.log('demo while')
let i = 5;
while (i > 1){
    console.log(i--);
}

console.log('demo for in')

for (let i of numbers){
    console.log(i);
}

for (let data in person1){
    console.log(data);
}

function demo1(){
    return 1;
}

function demo2(){
    console.log('a')
}

function demo3(){
    console.log('a')
}

let method4 = () => {
    console.log('a')
}
demo1();
demo2();
demo3();
method4();

/*
call back: gọi lại hàm
method call back: là method có tham số truyền vào chính là 1 method khác, và method đó sẽ được
gọi ở trong method cha
 */
// method chính được truyê vào tham số là method callBack có tên là callBack
function chaoHoi(ten,callBack){
    console.log('Xin chao ' + ten);
    // gọi lại hàm callBack
    callBack();
}
// callBack method được sử dụng để truyền vào method khác
function hoiThamCallBack(){
    console.log('Bạn có khỏe không');
}
// truyền method callback vào method chính
chaoHoi('Kiên',hoiThamCallBack);

function changeInput(){
    // lấy value của thẻ input có id = textValue, gán cho biết valueInput
    let valueInput = document.getElementById('textValue').value;
    console.log(valueInput);
}

// tạo ra promise và chưa thực thi, đang trạng thái Pending
const promise = new Promise((resolve, reject) => {
    // Giả lập tác vụ bất đồng bộ
    let success = true;  // Biến để kiểm tra thành công hay thất bại
    if (success) {
        // Đưa ra kết quả khi thành công, trả về trạng thÁI resolve
        resolve("Tác vụ hoàn thành thành công!");
    } else {
        // Đưa ra lỗi khi thất bại, trả về trạng thái reject
        reject("Có lỗi xảy ra trong quá trình thực hiện!");
    }
});

promise // gọi tới promise
    .then(data => console.log(data)) //  vì success = true => sẽ vào .then
    .catch(error => console.log(error)) // nếu thay đổi success = false => sẽ vào .catch


// Hàm mô phỏng lấy dữ liệu từ API
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "John Doe" }; // Dữ liệu giả lập
            const success = true; // Biến giả lập tình trạng thành công hoặc thất bại

            if (success) {
                resolve(data);  // Thành công, trả về dữ liệu
            } else {
                reject("Lỗi khi lấy dữ liệu!");  // Thất bại, trả về lỗi
            }
        }, 2000); // Giả lập độ trễ 2 giây
    });
}
// Hàm async sử dụng await
async function getClaimData() {
    try {
        const data = await fetchData();  // Chờ fetchData() trả về kết quả
        console.log("Dữ liệu đã được lấy thành công:", data);
    } catch (error) {
        console.log("Đã có lỗi:", error);
    }
}
getClaimData();
