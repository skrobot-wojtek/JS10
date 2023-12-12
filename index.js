let color = 100;

document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;

const changeColor = (e) =>{
    if(e.keyCode  === 38){
    color++;
        console.log(color);
        if(color>255){
            color = 255;
        }
    document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
}else if(e.keyCode === 40){
        color--;
    console.log(color);
    if(color<0){
        color = 0;
    }
 document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
    
}}

window.addEventListener("keydown", changeColor)