let item=[300,499,378,283];
let idx=0;
for( let val of item){
    let offer=val/10;
    item[idx]=item[idx]-offer;
    console.log(item[idx]);
    idx++
}
