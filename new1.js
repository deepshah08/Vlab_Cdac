import {requestFrame,canvasXY,beakerXY,shelfXY,weightmachineXY,gcrownXY,verticalsupportXY,horizontalrodXY,springbalanceXY,woodencubeXY,scrownXY,pointerXY,springXY,fontXY,fontXY1,bigbeakerXY,waterXY,waterXY1,waterXY2,waterXY3} from "./datafilesObjects.js";
import {arr,value,Moves,weight_diff_copper,weight_diff_iron,den_city,density,copper_iron} from "./new.js";
let MovesYCount=0;
let xy=0,yx=0;
let MovesXCount=0;
let Moves1=0;
function callme(){
  MovesXCount=0;
  MovesYCount=0;
  waterRisesXY1();
}
function pointerreturns(){
  yx++;
  canvasXY.clearCanvas();

  if (yx<Moves/0.4){
    pointerXY.y-=0.4*pointerXY.dy;
    springXY.height-=0.4*springXY.dh;
    pointerXY.renderPointer();
    springXY.renderspring();
    requestFrame(pointerreturns);
  }
    beakerXY.renderBeaker();
    
    bigbeakerXY.renderbigBeaker();
          fontXY.renderfont();
          weightmachineXY.renderweight();    
          scrownXY.renderscrown();
          gcrownXY.rendergcrown();
          shelfXY.rendershelf();
          pointerXY.renderPointer();
          horizontalrodXY.renderhorizontalrod();
          verticalsupportXY.renderverticalsupport();
          springXY.renderspring();
          springbalanceXY.renderspringbalance();
          waterXY.renderWater();
          waterXY1.renderWater1();
          waterXY2.renderWater2();
          waterXY3.renderWater3();
          woodencubeXY.rendercube();
          canvasXY.renderBg();
          console.log(MovesXCount,MovesYCount);
          
  }
  
function horizontalMovesY(){
    xy++;
    canvasXY.clearCanvas();

    if (xy < 830 && scrownXY.x<820 && scrownXY.y>0){
       horizontalrodXY.y += horizontalrodXY.dy;
        springbalanceXY.y +=springbalanceXY.dy;
        springXY.y+=springXY.dy;
        pointerXY.y+=pointerXY.dy;
        scrownXY.y+=0.4*scrownXY.dy;
        if (xy==600){
          
          pointerreturns();
          callme();

        }
        requestFrame(horizontalMovesY);
    }
    else if (xy < 830 && gcrownXY.x<680 && gcrownXY.y>0 ) {
        horizontalrodXY.y += horizontalrodXY.dy;
        springbalanceXY.y +=springbalanceXY.dy;
        springXY.y+=springXY.dy;
        pointerXY.y+=pointerXY.dy;
        gcrownXY.y+=0.4*gcrownXY.dy;
        if (xy==500){
          
          pointerreturns();
          callme();
        }
        requestFrame(horizontalMovesY);
        }
    // else{
    //     MovesXCount=0;
    //     MovesYCount=0;
    //     waterRisesXY1();
    // }
        beakerXY.renderBeaker();
    
          bigbeakerXY.renderbigBeaker();
          fontXY.renderfont();
          weightmachineXY.renderweight();    
          pointerXY.renderPointer();
          horizontalrodXY.renderhorizontalrod();
          verticalsupportXY.renderverticalsupport();
          springXY.renderspring();
          springbalanceXY.renderspringbalance();
          waterXY.renderWater();
          waterXY1.renderWater1();
          scrownXY.renderscrown();
          gcrownXY.rendergcrown();
          shelfXY.rendershelf();
           waterXY2.renderWater2();
           waterXY3.renderWater3();
           woodencubeXY.rendercube();
           canvasXY.renderBg();
}

  function waterRisesXY1(){
    MovesYCount++;
    canvasXY.clearCanvas();

    if (MovesYCount<50){
      waterXY1.height +=waterXY1.dh;
      waterXY1.y -=waterXY1.dy;
      requestFrame(waterRisesXY1);
      }
      else{
        MovesXCount=0;
        waterflows();
      }
      
       
         beakerXY.renderBeaker();
    
          bigbeakerXY.renderbigBeaker();
          fontXY.renderfont();
          weightmachineXY.renderweight();    
          pointerXY.renderPointer();
          horizontalrodXY.renderhorizontalrod();
          verticalsupportXY.renderverticalsupport();
          springXY.renderspring();
          springbalanceXY.renderspringbalance();
          waterXY.renderWater();
          waterXY1.renderWater1();
          scrownXY.renderscrown();
          shelfXY.rendershelf();
          gcrownXY.rendergcrown();
           waterXY2.renderWater2();
           waterXY3.renderWater3();
           woodencubeXY.rendercube();
           canvasXY.renderBg();

          //  requestFrame(waterRisesXY1);
     
   }

   function waterflows(){
     MovesXCount++;
     canvasXY.clearCanvas();

     if(MovesXCount<231){
       waterXY2.width+=waterXY2.dw;
       requestFrame(waterflows);
     }
     else{
       MovesYCount=0;
       waterflowsXY3();
     }


     beakerXY.renderBeaker();
    
     bigbeakerXY.renderbigBeaker();
     fontXY.renderfont();
     weightmachineXY.renderweight();    
     pointerXY.renderPointer();
     horizontalrodXY.renderhorizontalrod();
     verticalsupportXY.renderverticalsupport();
     springXY.renderspring();
     springbalanceXY.renderspringbalance();
     waterXY.renderWater();
     waterXY1.renderWater1();
     scrownXY.renderscrown();
     gcrownXY.rendergcrown();
     shelfXY.rendershelf();
      waterXY2.renderWater2();
      waterXY3.renderWater3();
      woodencubeXY.rendercube();
      canvasXY.renderBg();

      // requestFrame(waterflows);
   }

   function waterflowsXY3(){
     MovesYCount++;
     MovesXCount++;
     canvasXY.clearCanvas();

     if(MovesYCount<316.8 ){
       waterXY3.height+=waterXY3.dh;
       if(MovesXCount<50){
         waterRisesXY1.height+=waterRisesXY1.dh;
       }
       requestFrame(waterflowsXY3);
    }
     else{
       MovesXCount=0;
       MovesYCount=0;
       waterRisesXY();
     }
     beakerXY.renderBeaker();
    
     bigbeakerXY.renderbigBeaker();
     fontXY.renderfont();
     weightmachineXY.renderweight();    
     pointerXY.renderPointer();
     horizontalrodXY.renderhorizontalrod();
     verticalsupportXY.renderverticalsupport();
     springXY.renderspring();
     springbalanceXY.renderspringbalance();
     waterXY.renderWater();
     waterXY1.renderWater1();
     scrownXY.renderscrown();
     gcrownXY.rendergcrown();
     shelfXY.rendershelf();
     waterXY2.renderWater2();
      waterXY3.renderWater3();
      woodencubeXY.rendercube();
      canvasXY.renderBg();

      // requestFrame(waterflowsXY3);
   }

   function waterRisesXY(){
    MovesYCount++;
    canvasXY.clearCanvas();
  
    if (MovesYCount<100 && value==80 ){
      waterXY.height-=waterXY.dh;
      requestFrame(waterRisesXY);
      }

      else if (MovesYCount<130 && value==114 ){
        waterXY.height-=waterXY.dh;
        requestFrame(waterRisesXY);
        }
        
        else if (MovesYCount<150 && value==148 ){
          waterXY.height-=waterXY.dh;
          requestFrame(waterRisesXY);
          }   
          else if (MovesYCount<190 && value==185 ){
            waterXY.height-=waterXY.dh;
            requestFrame(waterRisesXY);
            }    
            else if (MovesYCount<210 && value==230 ){
              waterXY.height-=waterXY.dh;
              requestFrame(waterRisesXY);
              }     
  
   
      beakerXY.renderBeaker();
      
      bigbeakerXY.renderbigBeaker();
      fontXY.renderfont();
      weightmachineXY.renderweight();    
      pointerXY.renderPointer();
      horizontalrodXY.renderhorizontalrod();
      springXY.renderspring();
      springbalanceXY.renderspringbalance();
      verticalsupportXY.renderverticalsupport();
      waterXY.renderWater();
      waterXY1.renderWater1();
      scrownXY.renderscrown();
      gcrownXY.rendergcrown();
      shelfXY.rendershelf();
      //  waterXY2.renderWater2();
      //  waterXY3.renderWater3();
       woodencubeXY.rendercube();
       canvasXY.renderBg();
       
    }

//     const StartExperiment = document.getElementById("task3a");

// StartExperiment.addEventListener("click", () => { //btn2 press Animation 2
//  MovesXCount=0;
//  MovesYCount=0;
//  requestFrame(horizontalMovesY);
//  StartExperiment.disabled = true;
// });
function Validateform(){
  if(den_city){
    Moves1=copper_iron[0];
  }
  else{
    Moves1=copper_iron[1];
  }
  var uservalue=document.getElementById("meet");
  if(uservalue.value.trim()==""){
      alert("plz enter the value");
      uservalue.style.border="solid 3px red";
      return false;
  }

  if(Math.round(uservalue.value)!=Math.round(Moves1)){

      alert(`better luck next time the current answer is ${Moves1}`);
      uservalue.style.border="solid 3px red";
      return false;
  }

  if(Math.round(uservalue.value)==Math.round(Moves1)){
      alert("You won Congratulations!!!");
      var mat=prompt("Guess the material of crown");
      if((mat.toLowerCase()=="copper" && Moves1==9) ||(mat.toLowerCase()=="iron" && Moves1==8)){
        alert("Correct");
      }
      else{
        alert("Inorrect");
      }
      uservalue.style.border="solid 3px green";
      return true;
  }

}
// function Validatematerial(){
//   var material=document.getElementById("me");
//   if(material.value.trim()==""){
//     alert("plz enter the value");
//     material.style.border="solid 3px red";
//     return false;
//   }
//   if((Moves1==9 && String(material.value)=="copper")||(Moves1==8 && material.value=="iron")){
//     alert("You won Congratulations!!!");
//     material.style.border="solid 3px green";
//     return true;
//   }
//   else{
//     alert("Please Try Again");
//     return false;
//   }}


    export{horizontalMovesY,waterRisesXY1,waterflows,waterflowsXY3,waterRisesXY,Validateform};