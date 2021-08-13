import {Moves} from "module./news.js"



function Validateform(){

    var uservalue=document.getElementById("meet");
    if(uservalue.value.trim()==""){
        alert("plz enter the value");
        uservalue.style.border="solid 3px red";
        return false;
    }

    if(Math.round(uservalue.value)!=Math.round(Moves)){

        alert(`better luck next time the current answer is ${Moves}`);;
        uservalue.style.border="solid 3px red";
        return false;
    }

    if(Math.round(uservalue.value)==Math.round(Moves)){
        alert("You won Congratulations!!!");
        
        uservalue.style.border="solid 3px green";
        return true;
    }

 }