const button = document.querySelector('#button');
const container = document.querySelector('#container');
const string = "0123456789abcdef";
// let colorback="#";
let color ="";

button.addEventListener('click',function(e){

    for(let i=0; i<6; i++){
    // var color="#";
    color += string[Math.floor(Math.random()*16)];
   
    // return 0;
    }
    console.log(color); 
    container.style.backgroundColor= `#${color}`;
    color="";

});