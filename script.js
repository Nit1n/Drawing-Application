/*variables*/
const canvas = document.querySelector('canvas') ; 
const ctx = canvas.getContext('2d') ; 
const width = canvas.width = window.innerWidth ; 
const height = canvas.height = window.innerHeight ; 

ctx.fillStyle = 'black' ; 
ctx.fillRect(0, 0 , width , height) ; 

const colorPicker = document.getElementById('color') ;
const sizePicker= document.querySelector("input[type = 'range']") ; 
const output = document.querySelector('.output') ; 
const clearCanvas = document.querySelector('.clear') ;
const canvasColor = document.getElementById('canvasColor') ; 
const erase = document.querySelector('.erase') ; 
const pen = document.querySelector('.pen') ; 

let curX ; 
let curY ; 
let pressed ;
let erased ; 

/*size of Pen*/
sizePicker.oninput = function(){
    output.textContent = sizePicker.value ; 
}
/*clearing Canvas*/
clearCanvas.addEventListener('click' ,()=>{
    ctx.fillStyle = canvasColor.value ;
    ctx.fillRect(0,0,width, height) ;
})
/* Selecting Background Color */
canvasColor.oninput = function(){
    ctx.fillStyle = canvasColor.value ; 
    ctx.fillRect(0 , 0 , width , height) ; 
}
/*Erase Drawing */
erase.addEventListener('click' , ()=>{
    erased = true ; 
})
/*Selecting Pen*/
pen.addEventListener('click' , ()=>{
    erased = false ;
})

document.onmousemove = function(e){
    curX = e.pageX ; 
    curY =  e.pageY ; 
 
}

document.onmousedown = function(){
    pressed = true ; 
}
document.onmouseup = function(){
    pressed = false ; 
}
function draw(){

    if (pressed){
        ctx.fillStyle = (erased ?canvasColor.value: colorPicker.value) ; 
        ctx.beginPath() ;
        ctx.arc(curX , curY-75, sizePicker.value , 0 ,2*Math.PI ) ; 
        ctx.fill() ; 
    }
    requestAnimationFrame(draw) ; 
}
draw() ; 