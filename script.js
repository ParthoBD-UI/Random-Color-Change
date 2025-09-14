const button = document.querySelector("#colorBtn");

function getColor () {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i=0; i<6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

button.addEventListener("click", () => {
    document.body.style.backgroundColor = getColor();

});