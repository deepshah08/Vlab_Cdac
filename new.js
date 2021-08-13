import {requestFrame,canvasXY,beakerXY,shelfXY,weightmachineXY,gcrownXY,verticalsupportXY,horizontalrodXY,springbalanceXY,woodencubeXY,scrownXY,pointerXY,springXY,fontXY,fontXY1,bigbeakerXY,waterXY,waterXY1,waterXY2,waterXY3} from "./datafilesObjects.js";
let den_city=true;
let Moves=0;
let MovesYCount=0;
let MovesXCount=0;
let arr=[80,114,148,185,230];
let copper_iron=[9,8];
let weight_diff_copper =[7.77778,
  11.6667,
  15.5556,
  19.4444,
  23.3333];
let weight_diff_iron =[8.75,
  13.125,
  17.5,
  21.875,
  26.25];

let value = arr[Math.floor(Math.random()*arr.length)];
function density(){
  if (den_city){  
    Moves=weight_diff_copper[arr.indexOf(value)];
  }
  else{
    Moves=weight_diff_iron[arr.indexOf(value)];
  }
}
function gcrownMovesXY(){ 
    den_city=true;
    density();
    MovesYCount++;
    MovesXCount++;
    canvasXY.clearCanvas();

   
    if(MovesXCount<770 ){
     
     gcrownXY.x -= gcrownXY.dx;
     if (MovesYCount<550 ){
     gcrownXY.y += gcrownXY.dy;
    }
    console.log(gcrownXY.x,gcrownXY.y);
    requestFrame(gcrownMovesXY);
  }
  else{
    MovesXCount=0;
    MovesYCount=0;
    pointerMovesY();
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
  
  
}

function scrownMovesXY(){ 
  den_city=false;
  density();
  MovesYCount++;
  MovesXCount++;
  canvasXY.clearCanvas();
  
  if(MovesXCount<2*531){
    
    scrownXY.x -= scrownXY.dx;
    if (MovesYCount<2*278  ){
      scrownXY.y += scrownXY.dy;
    }
    console.log(scrownXY.x,scrownXY.y);
    requestFrame(scrownMovesXY);
  }
  else{
    MovesXCount=0;
    MovesYCount=0;
    pointerMovesY();
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
}

function pointerMovesY() {
  MovesYCount++;
  canvasXY.clearCanvas();

  if (MovesYCount<value){
    pointerXY.y+=pointerXY.dy;
    springXY.height+=springXY.dh;
    pointerXY.renderPointer();
    springXY.renderspring();
    requestFrame(pointerMovesY);
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

export {gcrownMovesXY,scrownMovesXY,density,den_city,arr,value,weight_diff_iron,weight_diff_copper,Moves,copper_iron};