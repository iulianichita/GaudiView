function semiluna(){
const PI2 = Math.PI * 2;
const ctx = canvas.getContext("2d");
canvas.height = canvas.width = 400;

const mouse  = {x : 0, y : 0, button : false}

function mouseEvents(e){
const m = mouse;
   const bounds = canvas.getBoundingClientRect(); //obtine dimensiunea si poz mouse ului in fereastra vizuala
   m.x = e.pageX - bounds.left - scrollX;
   m.y = e.pageY - bounds.top - scrollY;	
   m.button = e.type === "mousedown" ? true : e.type === "mouseup" ? false : m.button;
   
}
["down","up","move"].forEach(name => document.addEventListener("mouse" + name, mouseEvents));


function circleCircleIntercept(x1,y1,r1,x2,y2,r2){
   var x = x2 - x1;
   var y = y2 - y1;
   var dist = Math.sqrt(x * x + y * y);
   if(dist > r1 + r2 || dist < Math.abs(r1-r2)){
      return;  
   }
   var a = (dist * dist - r1 * r1 + r2 *r2) / ( 2 * dist);
   var b = Math.sqrt(r2 * r2 - a * a);
   a /= dist;
   x *= a;
   y *= a;
   var mx = x2 - x;
   var my = y2 - y;
   dist = b / Math.sqrt(x * x + y * y);
   x *= dist;
   y *= dist;
   return {
      x1 : mx-y,
      y1 : my+x,
      x2 : mx+y,
      y2 : my-x,
   };
}

function drawCrescent(x1,y1,r1,x2,y2,r2){
   
   var dist = Math.hypot(x2-x1,y2-y1);
   var ang = Math.atan2(y2-y1,x2-x1);
   var intercepts = circleCircleIntercept(x1,y1,r1,x1 + dist,y1,r2);    
   if(intercepts === undefined){
      ctx.beginPath();
      ctx.arc(x1, y1, r1, 0, PI2);
      if(dist < r1){
            ctx.moveTo(x2 + r2, y2);
            ctx.arc(x2, y2, r2, 0, PI2, true);
      }
      
      ctx.fill();
      ctx.stroke();
      return;
   }
   // get the start end angles for outer then inner circles
   const p = intercepts;
   var startA1 = Math.atan2(p.y1 - y1, p.x1 - x1) + ang; 
   var endA1 = Math.atan2(p.y2 - y1, p.x2 - x1) + ang; 
   var startA2 = Math.atan2(p.y1 - y1, p.x1 - (x1 + dist)) + ang; 
   var endA2 = Math.atan2(p.y2 - y1, p.x2 - (x1 + dist)) + ang; 

   ctx.beginPath();
   if(endA1 < startA1){
      ctx.arc(x1, y1, r1, startA1, endA1);
      ctx.arc(x2, y2, r2, endA2, startA2, true);
   }else{
      ctx.arc(x2, y2, r2, endA2, startA2);    
      ctx.arc(x1, y1, r1, startA1, endA1,true);
   }
   ctx.closePath();
   ctx.fill();
   ctx.stroke();
}


const outerRadius = 100;
const innerRadius = 80;

var w = canvas.width;
var h = canvas.height;
var cw = w / 2;  // center 
var ch = h / 2;
var globalTime;
ctx.font = "32px arial";
ctx.textAlign = "center";
ctx.lineJoin = "round";
ctx.lineWidth = 8;
ctx.strokeStyle = "#999";


function mainLoop(timer){
   globalTime = timer;
   ctx.setTransform(1,0,0,1,0,0); 
   ctx.globalAlpha = 1;           
   ctx.fillStyle = "black";
    ctx.fillRect(0,0,w,h);
   ctx.fillStyle = "white";
      
   ctx.fillText("Mouse over me!", cw, 70);    
   ctx.font = "22px Arial";
   drawCrescent(cw, ch-0, outerRadius, mouse.x, mouse.y, innerRadius);

   requestAnimationFrame(mainLoop);
}
requestAnimationFrame(mainLoop);

canvas.onclick = function(){
    let stil = window.getComputedStyle(document.getElementById("canvas"));
    const afis="heigth: "+stil.getPropertyValue("height")+"\nwidth: "+stil.getPropertyValue("width")+"\nborder: "+stil.getPropertyValue("border");
    alert(afis);
}
}
function drawStar(context, x, y, radius, points, innerRadius) {
   context.beginPath();
   let angle = Math.PI / points;
   
   for (let i = 0; i < 2 * points; i++) {
       let r = (i % 2 === 0) ? radius : innerRadius;
       let currX = x + Math.cos(i * angle) * r;
       let currY = y - Math.sin(i * angle) * r;
       if (i === 0) {
           context.moveTo(currX, currY);
       } else {
           context.lineTo(currX, currY);
       }
   }
   
   context.closePath();
   context.fill();
}

window.onload = function() {
   const canvas = document.getElementById("star");
   const context = canvas.getContext('2d');

   context.fillStyle = 'gold'; // culoarea stelei
   drawStar(context, 250, 250, 100, 5, 50); // (context, x, y, raza exterioară, numărul de puncte, raza interioară)

   semiluna();
}