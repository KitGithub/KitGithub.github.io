     document.addEventListener("DOMContentLoaded", init, false);
		

		
		var color = "red";
		var clicked = false;
		var mouseDown = false;
		var size = 5;
		var picture = 1;
		colorfoo(color);


      function init()
      {
        var canvas = document.getElementById("canvas");
        canvas.addEventListener("mousedown", getPosition, false);
		canvas.addEventListener('mousemove', alwaysDraw, false);
		canvas.addEventListener("mousedown", changeClicked, false);
		canvas.addEventListener("mouseup", changeClicked, false);
		
		var biggerbtn = document.getElementById("bigger");
		var turnPagebtn = document.getElementById("turnPage");
		var blankPagebtn = document.getElementById("blankPage");
		
		
		
		biggerbtn.onclick = function() {size = document.getElementById("brushsize").value; colorfoo("black");}

		turnPagebtn.onclick = function(){drawPicture(picture);}
		blankPagebtn.onclick = function(){drawPicture("blank");}
		
		redVal = document.getElementById("RED").value;
		greenVal = document.getElementById("GREEN").value;
		blueVal = document.getElementById("BLUE").value;
	}
		
      function getPosition(event)
      {
        var x = new Number();
        var y = new Number();
        var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
			ctx.fillStyle = color;

        if (event.x != undefined && event.y != undefined)
        {
          x = event.x;
          y = event.y;
        }
        else // Firefox method to get the position
        {
          x = event.clientX + document.body.scrollLeft +
              document.documentElement.scrollLeft;
          y = event.clientY + document.body.scrollTop +
              document.documentElement.scrollTop;
        }

        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;
     }
	 
	 function changeClicked(){
		clicked = !clicked;
	}
	 
	 
	function alwaysDraw(event){
		if(clicked){
			if (event.x != undefined && event.y != undefined)
			{
			  x = event.x;
			  y = event.y;
			}
			var canvas = document.getElementById("canvas");
			var ctx = canvas.getContext("2d");
			ctx.fillStyle = color;
			
      var radius = size;

      ctx.beginPath();
      ctx.arc((x-135), (y-180), radius, 0, 2 * Math.PI, false);
      
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = color;
      ctx.stroke();
			
			
			
			
			//ctx.fillRect( (x-135), (y-180), size, size);		
		}
	}

	function colorfoo(newColor){
			updateColor();
			color = colorString;
			var canvas = document.getElementById("canvas2");
			var ctx = canvas.getContext("2d");
			ctx.fillStyle = colorString;
			
			ctx.fillRect(0,0,50,50);
	}
	
	
	function drawPicture(val){
		
		var imageObj = new Image();
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
        imageObj.onload = function() {
			ctx.drawImage(imageObj, 0, 0, 640,360);
		};
		switch(val){
			case 1:
				imageObj.src = 'http://101coloringpages.com/wp-content/uploads/2012/04/turtle-coloring-pages-01-468x341.gif';
				picture++;
				break;
			case 2:
				imageObj.src = 'http://koloringpages.com/wp-content/uploads/2015/09/Minion-Coloring-Pages-13.jpg';
				picture++;
				break;
			case 3:
				imageObj.src = 'http://coloringville.com/images/mandala-coloring-pages/mandala-coloring-pages-3.png';
				picture++;
				break;
			case 4:
				imageObj.src = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSXuaRKR7_OoxHx0OYWO1OBrEg_Pzu8ii_tqzVTeXDew8gSH800';
				picture = 1;
				break;
			default:
				imageObj.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC4CAMAAAD32/gTAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCnAcZgAAG7E7IiAAAAAElFTkSuQmCC';
				picture = 1;
				break;
			
		}
	}
	
		function updateColor()
	{
		redVal = document.getElementById("RED").value;
		greenVal = document.getElementById("GREEN").value;
		blueVal = document.getElementById("BLUE").value;
		colorString = "rgb(" + redVal + "," + greenVal + "," + blueVal + ")";
	}
		