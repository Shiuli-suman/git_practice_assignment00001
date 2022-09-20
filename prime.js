function prime(num){
    let factor=0;
    for(let i=1;i<=num;i++){
        if(num%i){
            counter++;
        }
    }
    if(factor!=2){
        return true;
    }
    return false;
}
let ans=prime(11);
if(ans==true){
    console.log("prime");
}else{
    console.log("not prime");
}
