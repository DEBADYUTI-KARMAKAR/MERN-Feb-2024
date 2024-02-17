let s = 'Hello Javascript';
console.log(s); //Hello Javascript
console.log(s.length);//16
console.log(s.indexOf('H'));//0
console.log(s.indexOf('l'));//2
console.log(s.toUpperCase());//HELLO JAVASCRIPT
console.log(s);
console.log(s.toLowerCase());//hello javascript

console.log(s.substring(0,4));//Hell
console.log(s.slice(0,3));//Hel

console.log(s.replace('Hello','Hii'));

console.log(s.replace('hello','Hii'));//Hello Javascript

console.log(s.includes('ipt'));//true
console.log(s.includes('ja'));//false

console.log(s.startsWith('Hello'));//true
console.log(s.startsWith('Hello Javascript'));//true
console.log(s.startsWith('Javascript'));//false

console.log(s.endsWith('Javascript'));//true
console.log(s.endsWith(' Javascript'));//true
console.log(s.endsWith('Hello Javascript'));//true

console.log(s.endsWith('Hello'));//false

console.log(s.concat(' Functions'));//Hello Javascript Functions 
console.log(s);//Hello Javascript

console.log(s.charAt(3));//l
console.log(s.charAt(6));//J



let st = '  Hello World  ';
console.log(st);//  Hello World
console.log(st.length);//15
console.log(st.trim());//Hello World
st=st.trim();
console.log(st.length);//11


console.log(3+9+'Hii'+4+8);





console.log(`Hello`);
console.log('Hello');
console.log("Hello");


// console.log('Hello's');❌
console.log("Hello's");//Hello's

// console.log("Hello's "Hii"");❌
console.log(`Hello's "Hii"`);//Hello's "Hii"

// console.log(`Hel`l`o's "Hii"`);❌


console.log(`Hel\`l\`o's "Hii"`);//Hel`l`o's "Hii"


console.log('Hel`l`o\'s "Hii"'); //Hel`l`o's "Hii"

console.log('a\\b'); // a\b
