function changeColor() {
    let colors = ["red", "green", "blue", "purple", "orange"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector("button").style.backgroundColor = randomColor;
}