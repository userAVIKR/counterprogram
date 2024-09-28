
const decreasebtn = document.getElementById('decreasebtn');
const reset = document.getElementById('resetbtn');
const increasebtn = document.getElementById('increasebtn');
const counter = document.getElementById('counter');
let count=0;

decreasebtn.onclick= function(){
    count--;
    counter.textContent=count;
}
increasebtn.onclick= function(){
    count++;
    counter.textContent=count;
}
resetbtn.onclick= function(){
    count=0;
    counter.textContent=count;
}