
var canvas = document.getElementById("DemoCanvas");
var ctx = canvas.getContext("2d");

var c = 0;
var x = 0;
var y = 0;
var interval;
var speed=4;

var lastValueX
var lastValueY

const drawLine = (e)=>{

			

	//	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

		ctx.beginPath();
		//ctx.moveTo(canvas.width/,canvas.height/2);
		ctx.moveTo(lastValueX,lastValueY);
		ctx.lineTo(e.offsetX,e.offsetY)
		ctx.stroke();
		
		lastValueX = e.offsetX
		lastValueY = e.offsetY
}


function onMove(e){
	lastValueX=e.offsetX
	lastValueY=e.offsetY
	canvas.addEventListener('mousemove',drawLine); 
	console.log('on')
}

function offMove(){
	canvas.removeEventListener('mousemove',drawLine); 
	console.log('off')
}

canvas.addEventListener('mousedown',onMove)

canvas.addEventListener('mouseup',offMove)


canvas.addEventListener('mouseup',drawLine)



const clear = document.getElementById('clear')

clear.addEventListener('click',erase)

function erase(){

	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

}

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
	


function rty(){
	
//

}
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
