let ar = [1,"hello",true,3.9];
console.log(ar);

let a = [1,2,5,6];
console.log(a);
console.log(a[0]);

let arr = [];
console.log(arr);// []
arr[0]=4;
console.log(arr); // [4]
arr[1]=6;
console.log(arr);//[4,6]

//add last
arr.push(77);
console.log(arr);
arr.push("Hello");
console.log(arr);
// add front
arr.unshift("JS");
console.log(arr);//[ 'JS', 4, 6, 77, 'Hello' ]

// delete from last
arr.pop();
console.log(arr);

// delete from first
arr.shift();
console.log(arr);

