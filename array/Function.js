let data = ['Ram','Sham','Ratul','Parthib','Rajdeep'];

console.log(data.length);
console.log(data.includes('Ram'));//true
console.log(data.includes('Parthib'));//true
console.log(data.includes('R'));//false

console.log(data.indexOf('Sham'));// index number
console.log(data.indexOf('Rahul'));// -1

console.log(data.slice(1,3));//[ 'Sham', 'Ratul' ]

//splice

data.splice(3,0,'Hello')
console.log(data);//[ 'Ram', 'Sham', 'Ratul', 'Hello', 'Parthib', 'Rajdeep' ]

data.splice(1,1,'Bipin');
console.log(data);//[ 'Ram', 'Bipin', 'Ratul', 'Hello', 'Parthib', 'Rajdeep' ]

data.splice(3,2);
console.log(data);//[ 'Ram', 'Bipin', 'Ratul', 'Hello', 'Parthib', 'Rajdeep' ]


data.splice(1,1,'Rakrim','Pritam');//[ 'Ram', 'Rakrim', 'Pritam', 'Ratul', 'Rajdeep' ]
console.log(data);

console.log(data.reverse());//[ 'Rajdeep', 'Ratul', 'Pritam', 'Rakrim', 'Ram' ]