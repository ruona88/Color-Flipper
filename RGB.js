//Select needed elements
const button = document.getElementsByTagName("button")[0];
const colorName = document.getElementsByTagName("span")[0];
const displayField = document.getElementsByTagName("main")[0];

//functio to return rgb colors
const getRGB = function () {
    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);
    return 'rgb' + '(' + num1 + "," + num2 + "," + num3 + ")"
}

//Add event listener to the button
button.addEventListener("click", () => {
    let theColor = getRGB();
    displayField.style.backgroundColor = theColor;
    colorName.innerHTML = theColor;
})