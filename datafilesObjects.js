import {Moves} from "./new.js";
let ctx = document.getElementById('canvas').getContext('2d');
ctx.globalCompositeOperation = 'destination-over';

let bgImg=new Image();
let beakerImg = new Image();
let bigbeakerImg = new Image();
// let dropImg = new Image();
let weightmachineImg = new Image();
let gcrownImg = new Image();
let scrownImg = new Image();
let horizontalrodImg = new Image();
let verticalsupportImg = new Image();
let shelfImg = new Image();
let springbalanceImg = new Image();
let springImg = new Image();
let woodencubeImg = new Image();
let waterImg = new Image();

bgImg.src = 'Objects/table1.jpg';
// dropImg.src = 'Objects/drop.png';
beakerImg.src = 'Objects/beaker.png';
bigbeakerImg.src = 'Objects/bbeaker.png';
weightmachineImg.src = 'Objects/weight.png';
gcrownImg.src = 'Objects/gcrown4.png';
scrownImg.src = 'Objects/scrown.png';
horizontalrodImg.src = 'Objects/horizontal2.png';
verticalsupportImg.src = 'Objects/vertical2.png';
shelfImg.src = 'Objects/shelf.png';
springbalanceImg.src = 'Objects/springbalance4.png';
springImg.src = 'Objects/spring.png';
woodencubeImg.src = 'Objects/woodencube.png';
waterImg.src = 'Objects/water.png';
// window.requestAnimationFrame(gcrownMovesXY);


const requestFrame = frame => {
  window.requestAnimationFrame(frame);
}

let canvasXY = {
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height,
  ox: 0,
  oy: 0,
  xRatio: canvas.width / 1000,
  yRatio: canvas.height / 700,
  clearCanvas: () => {
    ctx.clearRect(canvasXY.x, canvasXY.y, canvasXY.width, canvasXY.height);
  },
  renderBg: () => {
    ctx.drawImage(bgImg, canvasXY.x, canvasXY.y, canvasXY.width, canvasXY.height);
  }
}


let beakerXY = {
  x: canvasXY.xRatio * 460,
  y: canvasXY.yRatio * 430+80,
  width: canvasXY.xRatio * 100,
  height: canvasXY.yRatio * 100,
  dx: canvasXY.xRatio * 0.5,
  dy: canvasXY.yRatio * 0.5,
  renderBeaker: () => {
    ctx.drawImage(beakerImg, beakerXY.x, beakerXY.y, beakerXY.width, beakerXY.height);
  }
}

let bigbeakerXY = {
  x: canvasXY.xRatio * 260,
  y: canvasXY.yRatio * 400,
  width: canvasXY.xRatio * 230,
  height: canvasXY.yRatio * 180,
  dx: canvasXY.xRatio * 0.5,
  dy: canvasXY.yRatio * 0.5,
  renderbigBeaker: () => {
    
    ctx.drawImage(bigbeakerImg, bigbeakerXY.x, bigbeakerXY.y, bigbeakerXY.width, bigbeakerXY.height);
  }
} 
let woodencubeXY = {
  x: canvasXY.xRatio * 260,
  y: canvasXY.yRatio * 530,
  width: canvasXY.xRatio * 200,
  height: canvasXY.yRatio * 120,
  dx: canvasXY.xRatio * 0,
  dy: canvasXY.yRatio * 0,
  rendercube: () => {
    ctx.drawImage(woodencubeImg, woodencubeXY.x, woodencubeXY.y, woodencubeXY.width, woodencubeXY.height);
  }
}



let waterXY1 = { //OG cordinates 180, 280
  x: canvasXY.xRatio * 280,
  y: canvasXY.yRatio * 477,
  width: canvasXY.xRatio * 140,
  height: canvasXY.yRatio * 103,
  dx: canvasXY.xRatio * 0.5,
  dy: canvasXY.yRatio * 0.05,
  dw: 0,
  dh: 0.05,
  renderWater1: () => {
    // ctx.fillStyle = 'rgba(72, 185, 189, 0.6)';
    // ctx.fillRect(x, y, w, h);
    ctx.drawImage(waterImg,waterXY1.x,waterXY1.y,waterXY1.width,waterXY1.height);
  }
}

let waterXY = { //OG cordinates 180, 280
  x: canvasXY.xRatio * 479,
  y: canvasXY.yRatio * 605,
  width: canvasXY.xRatio * 70,
  height: canvasXY.yRatio * 0,
  dx: canvasXY.xRatio * 0.5,
  dy: canvasXY.yRatio * 0.5,
  dw: 0,
  dh: 0.2,
  renderWater: () => {
    // ctx.fillStyle = 'rgba(72, 185, 189, 0.6)';
    // ctx.fillRect(x, y, w, h);
    ctx.drawImage(waterImg,waterXY.x,waterXY.y,waterXY.width,waterXY.height);
  }
}

let waterXY2 = { //OG cordinates 180, 280
  x: canvasXY.xRatio * 567,
  y: canvasXY.yRatio * 282,
  width: canvasXY.xRatio * 1,
  height: canvasXY.yRatio * 2,
  dx: canvasXY.xRatio * 0.5,
  dy: canvasXY.yRatio * 0.5,
  dw: 0.3,
  dh: 0.05,
  renderWater2: (x = waterXY2.x, y = waterXY2.y, w = waterXY2.width, h = waterXY2.height) => {
    ctx.fillStyle = 'rgba(72, 185, 189, 0.9)';
    // ctx.fillStyle = 'red';
    ctx.rotate(22*Math.PI/180);
    ctx.fillRect(x, y, w, h);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
}


let waterXY3 = { //OG cordinates 180, 280
  x: canvasXY.xRatio * 487,
  y: canvasXY.yRatio * 432+70,
  width: canvasXY.xRatio * 2,
  height: canvasXY.yRatio * 2,
  dx: canvasXY.xRatio * 0.5,
  dy: canvasXY.yRatio * 0.5,
  dw: 0.2,
  dh: 0.3,
  renderWater3: (x = waterXY3.x, y = waterXY3.y, w = waterXY3.width, h = waterXY3.height) => {
    ctx.fillStyle = 'rgba(72, 185, 189, 0.9)';
    // ctx.fillStyle = 'red';
    ctx.fillRect(x, y, w, h);
    
    
  }
}



let verticalsupportXY = {
    x: canvasXY.xRatio * 2,
    y: canvasXY.yRatio * 10,
    width: canvasXY.xRatio * 250,
    height: canvasXY.yRatio * 570,
    dx: canvasXY.xRatio * 0,
    dy: canvasXY.yRatio * 0,
    renderverticalsupport: () => {
      ctx.drawImage(verticalsupportImg, verticalsupportXY.x, verticalsupportXY.y, verticalsupportXY.width, verticalsupportXY.height);
    }
  }
  
  
  let horizontalrodXY = {
    x: canvasXY.xRatio * 15.2,
    y: canvasXY.yRatio * 15,
    width: canvasXY.xRatio * 410,
    height: canvasXY.yRatio * 60,
    dx: canvasXY.xRatio * 0,
    dy: canvasXY.yRatio * 0.2,
    renderhorizontalrod: () => {
      ctx.drawImage(horizontalrodImg, horizontalrodXY.x, horizontalrodXY.y, horizontalrodXY.width, horizontalrodXY.height);
    }
    
  }
  
  let springbalanceXY = {
    x: canvasXY.xRatio * 300,
    y: canvasXY.yRatio * 13,
    width: canvasXY.xRatio * 90,
    height: canvasXY.yRatio * 290,
    dx: canvasXY.xRatio * 0,
    dy: canvasXY.yRatio * 0.2,
    renderspringbalance: () => {
      ctx.drawImage(springbalanceImg, springbalanceXY.x, springbalanceXY.y, springbalanceXY.width, springbalanceXY.height);
    }
    
  }

  let springXY = {
    x: canvasXY.xRatio * 341,
    y: canvasXY.yRatio * 140,
    width: canvasXY.xRatio * 10,
    height: canvasXY.yRatio * 10,
    dx: canvasXY.xRatio * 0,
    dy: canvasXY.yRatio * 0.2,
    dw:0,
    dh:0.2,
    renderspring: () => {
      ctx.drawImage(springImg, springXY.x, springXY.y, springXY.width, springXY.height);
    }
    
  }
  let pointerXY = {
    x: canvasXY.xRatio * 339,
    y: canvasXY.yRatio * 147,
    width: canvasXY.xRatio * 15,
    height: canvasXY.yRatio * 3,
    dx: canvasXY.xRatio * 0.4,
    dy: canvasXY.yRatio * 0.2,
    renderPointer: (x = pointerXY.x, y = pointerXY.y, w = pointerXY.width, h = pointerXY.height) => {
      ctx.fillStyle = 'red';
      ctx.fillRect(x, y, w, h);
    }
    
  }

  let shelfXY = {
    x: canvasXY.xRatio * 640,
    y: canvasXY.yRatio * 70,
    width: canvasXY.xRatio * 350,
    height: canvasXY.yRatio * 50,
    dx: canvasXY.xRatio * 0,
    dy: canvasXY.yRatio * 0,
    rendershelf: () => {
      ctx.drawImage(shelfImg, shelfXY.x, shelfXY.y, shelfXY.width, shelfXY.height);
    }
  }
  //   ctx.drawImage(weightmachine, 750, 380,150,150);
    
    
  //   ctx.drawImage(gcrown, 660, 0, 130, 100);
  //   ctx.drawImage(shelf,640,70,350,50);
  let weightmachineXY = {
    x: canvasXY.xRatio * 750,
    y: canvasXY.yRatio * 380+80,
    width: canvasXY.xRatio * 180,
    height: canvasXY.yRatio * 180,
    dx: canvasXY.xRatio * 0,
    dy: canvasXY.yRatio * 0,
    renderweight: () => {
      ctx.drawImage(weightmachineImg, weightmachineXY.x, weightmachineXY.y, weightmachineXY.width, weightmachineXY.height);
    }
  }
  let gcrownXY = {
    x: canvasXY.xRatio * 680,
    y: canvasXY.yRatio * 0,
    width: canvasXY.xRatio * 120,
    height: canvasXY.yRatio * 125,
    dx: canvasXY.xRatio * 0.5,
    dy: canvasXY.yRatio * 0.5,
    rendergcrown: () => {
      ctx.drawImage(gcrownImg, gcrownXY.x, gcrownXY.y, gcrownXY.width, gcrownXY.height);
    }
    
  }
  let scrownXY = {
    x: canvasXY.xRatio * 820,
    y: canvasXY.yRatio * 0,
    width: canvasXY.xRatio * 120,
    height: canvasXY.yRatio * 130,
    dx: canvasXY.xRatio * 0.5,
    dy: canvasXY.yRatio * 0.5,
    renderscrown: () => {
      ctx.drawImage(scrownImg, scrownXY.x, scrownXY.y, scrownXY.width, scrownXY.height);
    }
    
  }

  let fontXY = {
    x: canvasXY.xRatio * 860,
    y: canvasXY.yRatio * 513+80,
    width: canvasXY.xRatio * 350,
    height: canvasXY.yRatio * 50,
    dx: canvasXY.xRatio * 0,
    dy: canvasXY.yRatio * 0,
    renderfont: () => {
      ctx.font = '30px dig';
      ctx.fillStyle='red';
      ctx.fillText('0.00',fontXY.x,fontXY.y,fontXY.width,fontXY.height);
    }
  }

  let fontXY1 = {
    x: canvasXY.xRatio * 845,
    y: canvasXY.yRatio * 593,
    width: canvasXY.xRatio * 350,
    height: canvasXY.yRatio * 50,
    dx: canvasXY.xRatio * 0,
    dy: canvasXY.yRatio * 0,
    renderfont1: () => {
      ctx.font = '30px dig';
      ctx.fillStyle='red';
      ctx.fillText((Moves*50/35).toFixed(2),fontXY1.x,fontXY1.y,fontXY1.width,fontXY1.height); "FONT"
    }
  }

  let MovesYCount=0;
  let MovesXCount=0;




// function scrownMovesXY(){ 
  
//   MovesYCount++;
//   MovesXCount++;
//   canvasXY.clearCanvas();

//   if(MovesXCount<531){
    
//     scrownXY.x -= scrownXY.dx;
//     scrownXY.renderscrown();
//   }
//   if (MovesYCount<275  ){
//     scrownXY.y += scrownXY.dy;
//     }
//   scrownXY.renderscrown();
//        springbalanceXY.renderspringbalance();
//         horizontalrodXY.renderhorizontalrod();
//         verticalsupportXY.renderverticalsupport();
//         waterXY.renderWater();
//         woodencubeXY.rendercube();
//         canvasXY.renderBg();
        
//   requestFrame(scrownMovesXY);
// }

// function sbeakerMovesXY(){

//   MovesYCount++;
//   MovesXCount++;
//   canvasXY.clearCanvas();

//   if (MovesYCount<120  ){
//     beakerXY.y -= beakerXY.dy;
//     waterXY.y -= waterXY.dy
//     beakerXY.renderBeaker();
//     waterXY.renderWater();

//     }
//   if(MovesXCount<645){
    
//     beakerXY.x += beakerXY.dx;
//     waterXY.x += waterXY.dx
    
//   }
 
  
//        beakerXY.renderBeaker();
      
//        bigbeakerXY.renderbigBeaker();
//        fontXY.renderfont();
//        weightmachineXY.renderweight();    
//        scrownXY.renderscrown();
//        gcrownXY.rendergcrown();
//        shelfXY.rendershelf();
//        pointerXY.renderPointer();
//        springbalanceXY.renderspringbalance();
//         horizontalrodXY.renderhorizontalrod();
//         verticalsupportXY.renderverticalsupport();
//         waterXY.renderWater();
//         waterXY1.renderWater1();
        
//         woodencubeXY.rendercube();
//         canvasXY.renderBg();
        
//   requestFrame(sbeakerMovesXY);

// }

// function pointerMovesY{
//   MovesYCount++;
//   canvasXY.clearCanvas();

//   if (MovesYCount<40){
//     pointerXY.y+=pointerXY.dy;
//     springXY.height+=springXY.dh;
//     requestFrame(pointerMovesY);
//     }
//     else{
//       MovesXCount=0;
//       MovesYCount=0;
//       requestFrame(waterRisesXY1);
//     }
//     beakerXY.renderBeaker();
    
//           bigbeakerXY.renderbigBeaker();
//           fontXY.renderfont();
//           weightmachineXY.renderweight();    
//           scrownXY.renderscrown();
//           gcrownXY.rendergcrown();
//           shelfXY.rendershelf();
//           pointerXY.renderPointer();
//           horizontalrodXY.renderhorizontalrod();
//           verticalsupportXY.renderverticalsupport();
//           springXY.renderspring();
//           springbalanceXY.renderspringbalance();
//            waterXY.renderWater();
//            waterXY1.renderWater1();
//            waterXY2.renderWater2();
//            waterXY3.renderWater3();
//            woodencubeXY.rendercube();
//            canvasXY.renderBg();


// }

// function waterRisesXY(){
//   MovesYCount++;
//   canvasXY.clearCanvas();

//   if (MovesYCount<190){
//     waterXY.height-=waterXY.dh;
//     // requestFrame(waterRisesXY);
//     }
//     // else{
//     //   MovesXCount=0;
//     //   MovesYCount=0;
//     //   sbeakerMovesXY();
//     // }
 
//     beakerXY.renderBeaker();
    
//     bigbeakerXY.renderbigBeaker();
//     fontXY.renderfont();
//     weightmachineXY.renderweight();    
//     scrownXY.renderscrown();
//     gcrownXY.rendergcrown();
//     shelfXY.rendershelf();
//     pointerXY.renderPointer();
//     horizontalrodXY.renderhorizontalrod();
//     springXY.renderspring();
//     springbalanceXY.renderspringbalance();
//      verticalsupportXY.renderverticalsupport();
//      waterXY.renderWater();
//      waterXY1.renderWater1();
//      waterXY2.renderWater2();
//     //  waterXY3.renderWater3();
//      woodencubeXY.rendercube();
//      canvasXY.renderBg();
//      requestFrame(waterRisesXY);
        
  

// }


  
//    function waterRisesXY1(){
//     MovesYCount++;
//     canvasXY.clearCanvas();

//     if (MovesYCount<50){
//       waterXY1.height -=waterXY1.dh;
//       requestFrame(waterRisesXY1);
//       }
//       else{
//         MovesXCount=0;
//         waterflows();
//       }
      
       
//          beakerXY.renderBeaker();
    
//           bigbeakerXY.renderbigBeaker();
//           fontXY.renderfont();
//           weightmachineXY.renderweight();    
//           scrownXY.renderscrown();
//           gcrownXY.rendergcrown();
//           shelfXY.rendershelf();
//           pointerXY.renderPointer();
//           horizontalrodXY.renderhorizontalrod();
//           verticalsupportXY.renderverticalsupport();
//           springXY.renderspring();
//           springbalanceXY.renderspringbalance();
//            waterXY.renderWater();
//            waterXY1.renderWater1();
//            waterXY2.renderWater2();
//            waterXY3.renderWater3();
//            woodencubeXY.rendercube();
//            canvasXY.renderBg();

//           //  requestFrame(waterRisesXY1);
     
//    }

//    function waterflows(){
//      MovesXCount++;
//      canvasXY.clearCanvas();

//      if(MovesXCount<350){
//        waterXY2.width+=waterXY2.dw;
//        requestFrame(waterflows);
//      }
//      else{
//        MovesYCount=0;
//        waterflowsXY3();
//      }


//      beakerXY.renderBeaker();
    
//      bigbeakerXY.renderbigBeaker();
//      fontXY.renderfont();
//      weightmachineXY.renderweight();    
//      scrownXY.renderscrown();
//      gcrownXY.rendergcrown();
//      shelfXY.rendershelf();
//      pointerXY.renderPointer();
//      horizontalrodXY.renderhorizontalrod();
//      verticalsupportXY.renderverticalsupport();
//      springXY.renderspring();
//      springbalanceXY.renderspringbalance();
//       waterXY.renderWater();
//       waterXY1.renderWater1();
//       waterXY2.renderWater2();
//       waterXY3.renderWater3();
//       woodencubeXY.rendercube();
//       canvasXY.renderBg();

//       // requestFrame(waterflows);
//    }

//    function waterflowsXY3(){
//      MovesYCount++;
//      canvasXY.clearCanvas();

//      if(MovesYCount<480){
//        waterXY3.height+=waterXY3.dh;
//        requestFrame(waterflowsXY3);
//      }
//      else{
//        MovesXCount=0;
//        MovesYCount=0;
//        waterRisesXY();
//      }
//      beakerXY.renderBeaker();
    
//      bigbeakerXY.renderbigBeaker();
//      fontXY.renderfont();
//      weightmachineXY.renderweight();    
//      scrownXY.renderscrown();
//      gcrownXY.rendergcrown();
//      shelfXY.rendershelf();
//      pointerXY.renderPointer();
//      horizontalrodXY.renderhorizontalrod();
//      verticalsupportXY.renderverticalsupport();
//      springXY.renderspring();
//      springbalanceXY.renderspringbalance();
//       waterXY.renderWater();
//       waterXY1.renderWater1();
//       waterXY2.renderWater2();
//       waterXY3.renderWater3();
//       woodencubeXY.rendercube();
//       canvasXY.renderBg();

//       // requestFrame(waterflowsXY3);
//    }

  



   export{requestFrame,canvasXY,beakerXY,shelfXY,weightmachineXY,gcrownXY,verticalsupportXY,horizontalrodXY,springbalanceXY,woodencubeXY,scrownXY,pointerXY,springXY,fontXY,fontXY1,bigbeakerXY,waterXY,waterXY1,waterXY2,waterXY3};
 
  



  
 
  
  
  
  
  
  
  
  
  