let color = 100;

document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;

const changeColor = (e) => {
    if (e.keyCode === 38) {
        console.log(color);
        if (color < 255) {
            color++;
            document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
        }
    } else if (e.keyCode === 40) {
        console.log(color);
        if (color > 0) {
            color--;
            document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
        }
    }
}

window.addEventListener("keydown", changeColor)
