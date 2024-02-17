let ar = [12,4,56,7];
let min = ar[0];
let max = ar[0];
for(let i=1;i<ar.length;i++){
    
    if(min>ar[i]){
        min=ar[i];
    }
    if(max<ar[i]){
        max=ar[i];
    }
}

console.log(max);
console.log(min);