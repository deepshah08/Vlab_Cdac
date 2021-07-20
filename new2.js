import {requestFrame,canvasXY,beakerXY,shelfXY,weightmachineXY,gcrownXY,verticalsupportXY,horizontalrodXY,springbalanceXY,woodencubeXY,scrownXY,pointerXY,springXY,fontXY,fontXY1,bigbeakerXY,waterXY,waterXY1,waterXY2,waterXY3} from "./datafilesObjects.js";

let MovesYCount=0;
let MovesXCount=0;

function sbeakerMovesXY(){

    MovesYCount++;
    MovesXCount++;
    canvasXY.clearCanvas();
  
    if(MovesXCount<645){
      
      beakerXY.x += beakerXY.dx;
      waterXY.x += waterXY.dx
      fontXY.renderfont();
      if (MovesYCount<120  ){
        beakerXY.y -= beakerXY.dy;
        waterXY.y -= waterXY.dy
        // beakerXY.renderBeaker();
        // waterXY.renderWater();
        fontXY.renderfont();
        
      }
      requestFrame(sbeakerMovesXY);
      }
      else{
        canvasXY.clearCanvas();
    fontXY1.renderfont1();
    requestFrame(sbeakerMovesXY);
      }
      
      beakerXY.renderBeaker();
      
      bigbeakerXY.renderbigBeaker();
      //  fontXY1.renderfont1();
      waterXY.renderWater();
      weightmachineXY.renderweight();    
      pointerXY.renderPointer();
      horizontalrodXY.renderhorizontalrod();
      verticalsupportXY.renderverticalsupport();
      springXY.renderspring();
      springbalanceXY.renderspringbalance();
      waterXY1.renderWater1();
      scrownXY.renderscrown();
      gcrownXY.rendergcrown();
      shelfXY.rendershelf();
      
      woodencubeXY.rendercube();
      canvasXY.renderBg();
      
          
  
  }

  // function font(){
  //   canvasXY.clearCanvas();
  //   fontXY1.renderfont1();
  //   requestFrame(font);
  // }

  export {sbeakerMovesXY};