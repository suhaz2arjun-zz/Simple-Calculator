function disp(val){
    document.getElementById('sdm').value+=val;

}
function clr(){
    document.getElementById('sdm').value=" ";
}

function solve(){
   let x= document.getElementById('sdm').value;
   let y=eval(x);
   document.getElementById("sdm").value=y
}