/* function removeFirstElement(array) {
        
    // Write your code here 
    let arr = array.slice(1);// array.slice(start,end) start is inclusive(means start from index elments ) and end is exclusive 
    return arr;
}

let arr = [1,2,3,4,5];
console.log(removeFirstElement(arr));


let marks = 10;
switch (true) {
    case(marks >= 80 && marks <= 100):
    console.log("Grade A+");
    break;

    case(marks >=70 && marks <= 79):
    console.log("Grade A");
    break;

    case(marks >=60 && marks <= 69):
    console.log("Grade B");
    break;

    default:
        console.log("Fail");
        break;
}
         

for(let i =0; i<5; i++){
    console.log(i);
}
    

var i =0;
while(i<5) {
    console.log(i);
    i = i+1;
}

var i = 0;
do{
    console.log(i);
    i++;
}

while(i<5);

*/

let arr = ['ibrahim','ali',"ahmed","rhan"];
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}