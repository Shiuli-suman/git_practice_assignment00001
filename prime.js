function prime(num){
    let factor=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            factor++;
        }
    }if(factor===2){
        return true;
    }return false;
}
let answer=prime(13);
if(answer==true){
    console.log("prime");
}
else { console.log("Not prime");}