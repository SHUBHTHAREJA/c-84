canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    var rover_width=100;
    var rover_height=90;


    var back_image="mars.jpg";

    var rover_image="rover.png";

    var x=10;
    var y=10;

    function add(){
       
         newImage=new Image();
       newImage.onload = uploadBackgrounImage;
        newImage.src=back_image;

         newImageRover=new Image();
       newImageRover.onload = uploadRoverImage;
        newImageRover.src=rover_image;
        }
        function uploadBackgrounImage(){
            ctx.drawImage(newImage,0,0,canvas.width,canvas.height)
        }
        function uploadRoverImage(){
            ctx.drawImage(newImageRover,x,y,rover_width,rover_height)
        }
        window.addEventListener("keydown",myKeyDown)

function myKeyDown(e){
var keypresed=e.keyCode;

console.log(keypresed);

if (keypresed=='40') {
//down()
console.log('down');    

}
if (keypresed=='39') {
    //right()
    console.log('right');    
    
    }
if (keypresed=='38') {
    //up()
    console.log('up');    
        
    }
if (keypresed=='37') {
    //left()
    console.log('left');    
            
    }
        }