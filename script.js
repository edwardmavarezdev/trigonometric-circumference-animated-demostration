
//var canvas2 = document.getElementByid('canvas2')
var canvas = document.getElementById("DemoCanvas");
var ctx = canvas.getContext("2d");
//var ctx2 = canvas2.getContext('2d');

var c = 0;
var x = 0;
var y = 0;
var interval;
var speed=4;

var direction;
var lastValueX
var lastValueY
var rotateLine
var angle = 0
var speed = 40
var range = 1
var guideLines=true;



function drawLineLeft(){

//		lastValueX = parseInt(Math.cos(angle*Math.PI/180)*150+150)
//		lastValueY = parseInt(Math.sin(angle*Math.PI/180)*150+150)
	

		clearInterval(rotateLine)
		direction = 'L'
		rotateLine = setInterval(Move,speed)
	console.log('')
}

function drawLineRight(){	
	
//		lastValueX = parseInt(Math.cos(angle*Math.PI/180)*150+150)
//		lastValueY = parseInt(Math.sin(angle*Math.PI/180)*150+150)
	

		clearInterval(rotateLine)
		direction = 'R'
		rotateLine = setInterval(Move,speed)
	
}

function Move(){
		
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

		x = parseInt(Math.cos(angle*Math.PI/180)*canvas.width/2+canvas.width/2)
		y = parseInt(Math.sin(angle*Math.PI/180)*canvas.height/2+canvas.height/2)
	
		
		ctx.beginPath();
		ctx.strokeStyle='black'
		ctx.lineWidth='5';
		ctx.moveTo(canvas.width/2,canvas.height/2);
		ctx.lineTo(x,y)
		ctx.lineTo(x,canvas.height/2)
		ctx.lineTo(canvas.width/2,canvas.height/2);
		ctx.stroke();

	/*		
		ctx.beginPath();
		ctx.strokeStyle='orange';
		ctx.lineWidth='10';
		ctx.moveTo(0,0);
		ctx.lineTo(canvas.width,0)
		ctx.lineTo(canvas.width,canvas.height)
		ctx.lineTo(0,canvas.height)
		ctx.lineTo(0,0)
		ctx.stroke();
	*/	

		ctx.beginPath();
		ctx.strokeStyle='red';
		ctx.lineWidth='10';
		ctx.moveTo(x-6,y);
		ctx.lineTo(x+6,y)
		ctx.stroke();


			
			
		
		
		/*
		ctx.beginPath();
		ctx.moveTo(lastValueX,lastValueY);
		ctx.lineTo(x,y)
		ctx.stroke();

		lastValueX = x
		lastValueY = y
	
	*/	
		if(direction == 'R'){
			angle+=range}
		else if (direction == 'L'){
			angle-=range
		}else{}
}	
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

const clear = document.getElementById('clear')
const drawLeft = document.getElementById('drawLeft')
const drawRight = document.getElementById('drawRight')
const stop = document.getElementById('stop')


clear.addEventListener('click',erase)

drawLeft.addEventListener('click',drawLineLeft)
drawRight.addEventListener('click',drawLineRight)

stop.addEventListener('click',stopDraw )

function erase(){

	clearInterval(rotateLine)
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

}

function stopDraw(){

	clearInterval(rotateLine)

}

class line{
	
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
	


}

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


/*function qwe(){	

		interval = setInterval(()=>{

		if(x<=canvas.width && y<=0){
			x+=speed
			console.log(x)
		}else if(x>=canvas.width && y<=canvas.height){
			console.log(y)
			y+=speed
		}else if(x>=0 && y>=canvas.height){
			x-=speed
			console.log(x)
		}else if(x<=0 && y>=0){
			y-=speed
			console.log(y)
		}else{alert('x '+'y')}
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
	
		ctx.beginPath();
		ctx.moveTo(centerX,centerY);
		ctx.lineTo(x,y)
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(centerX,centerY);
		ctx.lineTo(x,y)
		ctx.stroke();
	 	
		//console.log(c)
		c+=1
		if(c>canvas.width*4){clearInterval(interval)}
		},20)
		
		
	}
*/
	


//function rty(){
	
//


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

