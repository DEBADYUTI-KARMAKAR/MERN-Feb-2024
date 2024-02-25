let doc = document.getElementById('para');
console.log(doc);
console.log(doc.innerHTML);
console.log(doc.innerText);
console.log(doc.textContent);

let hd = document.getElementsByTagName('h1');
console.log(hd[0].innerHTML);
console.log(hd);

let d=document.getElementsByClassName('do');

console.log(d);
console.log(d[0].innerHTML);

let e = document.querySelector('.do');
console.log(e.innerHTML);
console.log(e.innerText);

let j = document.querySelector('h2');
console.log(j.innerText);

let i = document.querySelector('#para');
console.log(i.textContent);


let u = document.querySelector('ul');
console.log(u);
console.log(u.innerHTML);

let item = document.querySelectorAll("ul>li");
console.log(item);
console.log(item[0].innerHTML);

item.forEach((data)=>{

    // console.log(data);
    console.log(data.innerHTML);

});


let m = document.querySelector('.st');
m.style.color='red';
m.style.backgroundColor='yellow';
m.style.padding='40px';


let b1 = document.querySelector('.b');
b1.style.color='white';
b1.style.backgroundColor='blue'
b1.style.border='none';
b1.style.paddingTop='10px';
b1.style.paddingBottom='10px';
b1.style.paddingLeft='15px';
b1.style.paddingRight='15px';
b1.style.borderRadius='5px';
b1.style.margin='20px';