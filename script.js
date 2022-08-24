//canvas capture
const canvas = document.getElementById('trigonometric');
const ctx = canvas.getContext('2d');

const canvasCircle = document.getElementById('circumference')
const circle = canvasCircle.getContext('2d')

const sin= document.getElementById('sin');
const sinCtx = sin.getContext('2d');

const cos= document.getElementById('cos');
const cosCtx = cos.getContext('2d');


//circumference continues draw
let lastValueX, lastValueY;

//interval declaration and direction declaration
let rotateLine, direction;

//start angle, speed of update render, and frecuency of degrees move
let angle = 0;
let speed = 50;
let frequency = 2;

//axis coordinates
let x,y

//circumference trigonometrical ecuation
function circumferenceCoordinates(){
	x = parseInt(Math.cos((angle+180)*Math.PI/180)*(0.95*canvas.width/2)+canvas.width/2)
	y = parseInt(Math.sin((angle+180)*Math.PI/180)*(0.95*canvas.height/2)+canvas.height/2)
}

//circumference trigonometrical ecuation fisrt state definition
circumferenceCoordinates()	


// trigonometrical first state definition
let sinGraphic = [[0,y]];
let cosGraphic = [[x,0]];


function move(direction){
	
		//direcion of draw selector
		if(direction == 'R'){
			angle+=frequency}
		else if (direction == 'L'){
			angle-=frequency
		}else{}

		//setup the position X and Y of the circumference
		circumferenceCoordinates()	
		
		//erase point element	
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

		//draw the point of position
		ctx.beginPath();
		ctx.strokeStyle='red';
		ctx.lineWidth='10';
		ctx.moveTo(x-6,y);
		ctx.lineTo(x+6,y)
		ctx.stroke();

		//draw the origin to position
		ctx.beginPath();
		ctx.strokeStyle='black'
		ctx.lineWidth='5';
		ctx.moveTo(canvas.width/2,canvas.height/2);
		ctx.lineTo(x,y)
		ctx.stroke();

		// draw the origin triangle relation 
		ctx.beginPath();
		ctx.lineWidth='5';
		ctx.strokeStyle='green'
		ctx.moveTo(x,y)
		ctx.lineTo(x,canvas.height/2)
		ctx.lineTo(canvas.width/2,canvas.height/2);
		ctx.stroke();
		ctx.stroke();

		//draw the indivudual X and Y cordinates representation.
		
		//x
		ctx.beginPath();
		ctx.strokeStyle='grey';
		ctx.lineWidth='2';
		ctx.moveTo(x,y);
		ctx.lineTo(canvas.width,y);
		ctx.stroke();
		
		//y
		ctx.beginPath();
		ctx.strokeStyle='grey';
		ctx.lineWidth='2';
		ctx.moveTo(x,y);
		ctx.lineTo(x,canvas.height);
		ctx.stroke();

		
		// draw the circumference in another canvas
		circle.beginPath();
		circle.strokeStyle='purple';
		circle.lineWidth='3';
		circle.moveTo(lastValueX,lastValueY);
		circle.lineTo(x,y)
		circle.stroke();
		lastValueX = x
		lastValueY = y
			
			
		//draw sin
		
		sinCtx.clearRect(0, 0, sinCtx.canvas.width, sinCtx.canvas.height)

		for(i=sinGraphic.length; i>=3; i--){
		/*
		//draw middle line
			sinCtx.beginPath();
			sinCtx.strokeStyle='gray';
			sinCtx.lineWidth='2';
			sinCtx.moveTo(0,sin.height/2);
			sinCtx.lineTo(sin.width, sin.height/2);
			sinCtx.stroke()
		*/	
		//draw sin value
			sinCtx.beginPath();
			sinCtx.strokeStyle='red';
			sinCtx.lineWidth='2';
			sinCtx.moveTo(sinGraphic[i-1][0],sinGraphic[i-1][1]);
			sinCtx.lineTo(sinGraphic[i-2][0],sinGraphic[i-2][1]);
			sinCtx.stroke();

			}
		
			
		let sinAxis = parseInt(Math.sin((angle+180)*Math.PI/180)*(0.95*sin.height/2)+sin.height/2)
		sinGraphic.push([0,sinAxis])
			
		if(sinGraphic.length==sin.width){
			sinGraphic.shift()
		}	

		for(l=sinGraphic.length; l>0; l--){
			sinGraphic[l-1][0]++
		}
			
		//draw cos
	
		cosCtx.clearRect(0, 0, cosCtx.canvas.width, cosCtx.canvas.height)
		
		for(i=cosGraphic.length; i>=3; i--){

			
			cosCtx.beginPath();
			cosCtx.strokeStyle='blue';
			cosCtx.lineWidth='3';
			cosCtx.moveTo(cosGraphic[i-1][0],cosGraphic[i-1][1]);
			cosCtx.lineTo(cosGraphic[i-2][0],cosGraphic[i-2][1]);
			cosCtx.stroke();
		}
		
			
		let cosAxis = parseInt(Math.cos((angle+180)*Math.PI/180)*(0.95*cos.width/2)+cos.width/2)
		cosGraphic.push([cosAxis,0])
			
		if(cosGraphic.length==cos.height){
			cosGraphic.shift()
		}	

		for(l=cosGraphic.length; l>0; l--){
			cosGraphic[l-1][1]++
		}
}


//buttons
const clear = document.getElementById('clear')
const drawLeft = document.getElementById('drawLeft')
const drawRight = document.getElementById('drawRight')
const stop = document.getElementById('stop')

const speedNumber = document.getElementById('speedNumber')
speedNumber.value=speed/10;

const frequencyNumber = document.getElementById('frequencyNumber')
frequencyNumber.value=frequency;


//buttons events
clear.addEventListener('click',reset)
drawLeft.addEventListener('click',()=>{direction='L'; drawLine(direction)})
drawRight.addEventListener('click',()=>{direction='R'; drawLine(direction)})
stop.addEventListener('click',stopDraw )

speedNumber.addEventListener('input',changeSpeed)
frequencyNumber.addEventListener('input',changeFrequency)

//button functions

function reset(){
	clearInterval(rotateLine)
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

	sinCtx.clearRect(0, 0, sinCtx.canvas.width, sinCtx.canvas.height)
	cosCtx.clearRect(0, 0, cosCtx.canvas.width, cosCtx.canvas.height)
		
	circle.clearRect(0, 0, circle.canvas.width, circle.canvas.height)

	
	angle=0;
	circumferenceCoordinates();
	
	lastValueX = x;
	lastValueY = y;
	
	sinGraphic = [[0,y]];
	cosGraphic = [[x,0]];
}

function drawLine(direction){
		clearInterval(rotateLine);
		rotateLine = setInterval(()=>{move(direction)},speed);
}

function stopDraw(){
	clearInterval(rotateLine)

}

function changeSpeed(e){
	
	if(parseInt(e.target.value)<1){
		e.target.value=1;
	} else if(parseInt(e.target.value)>10){
		e.target.value=10;
	}else{
		speed = 100-parseInt(e.target.value)*10
		if(direction!=undefined){
		drawLine(direction)
		}
	}
}

function changeFrequency(e){
		if(parseInt(e.target.value)<1){
			e.target.value=1;
		} else if(parseInt(e.target.value)>20){
			e.target.value=20;
		}else{
			frequency =parseInt(e.target.value)
		}
}


//old mouse drawer
/*

	//	if(angle == 360){clearInterval(rotateLine)
	
	//	ctx.moveTo(lastValueX,lastValueY);
	//
		
}


canvas.addEventListener('mousedown',onMove)

canvas.addEventListener('mouseup',offMove)


function onMove(){
	//lastValueX=e.offsetX
	//lastValueY=e.offsetY
	canvas.addEventListener('mousemove',drawLine); 
	console.log('on')
}

function offMove(){
	canvas.removeEventListener('mousemove',drawLine); 
	console.log('off')
	//ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
}
*/



//test angle equivalences
/*

	0 = 0, c/2;  90 = c/2, 0;   180 = c,c/2;    270 = c/2,c; 
	45=c/4,c/4;  135=3c/4,c/4;  225=3c/4,3c/4;  315=c/4,3c/4
	
	0=0,0; 90=c,0; 180=c,c; 270= 0,c

	360=	

*/
/*
function testAngle(angle){
	console.log('x = '+(parseInt(Math.cos(angle*Math.PI/180)*150+150)))
	console.log('y = '+(parseInt(Math.sin(angle*Math.PI/180)*150+150)))
	
	
}
*/


//test draw and erase
//function rty(){	

/* class Drop{
        constructor(){
          this.x = canvas.width / 2;
          this.y = canvas.height;
          this.yspeed = 5;
        }
        fall(){
          this.y = this.y - this.yspeed;
        }
      
        show(){
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
          ctx.beginPath()
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x, this.y+20);
          ctx.stroke();
        }

	llaf(){
          this.y = this.y + this.yspeed;
        }

	wohs(){
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
          ctx.beginPath()
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x, this.y-20);
          ctx.stroke();
	}

      }

let d = new Drop();  
     function qwe() {
        myInterval = setInterval(out,200);
     }
function out(){
          d.wohs();
          d.fall();
        }


let f = new Drop();  
     function rty() {
        myInterval = setInterval(ind,200);
     }
function ind(){
          d.show();
          d.llaf();
        }*/

