let mark=[25,43,56,78,43];
let sum=0;
for(let i of mark){                                 //for( let i=0;i<mark.length;i++){sum=sum+marks[i]; }
    sum=sum+i;
}
let res= sum/mark.length;
console.log(res);