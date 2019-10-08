//set up  variable 
var X = [];          //first numbers are 0 and 1 that include the Array
var N;              //defined upper limit for an Array

function cleanUP(){
    X = [0,1];
    generateFiboNum();
}
function generateFiboNum(){
    N = Number(document.getElementById("quantity").value) + 1;
    console.log(N)
    if(N <= 151 && N > 1 ){
        for(var n = 0; n < N - 1; n++){
            var num;
            num = X[n] + X [n+1];
            console.log(num)
            X.push(num);
        }
        console.log(X)
        showResult();
        console.log("no")
    }
}
function showResult(){
    target = document.getElementById("fibonum");
    target.value = X;
}
