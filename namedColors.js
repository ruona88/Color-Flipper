//Select all needed items
const button = document.getElementsByTagName("button")[0];
const colorName = document.getElementsByTagName("span")[0];
const displayField = document.getElementsByTagName("main")[0];

//An array o hold named colors
var colorArray = ["Green", "Yellow", "Blue", "Grey", "White", "Red", "Purple", "Cyan", "Violet", "Pink", "DeepPink",
                  "DarkRed", "Salmon", "DarkSalmon", "GoldenRod", "Gold", "Fuschia", "Khaki", "Ivory", "Indigo", "Lavender"
                ,"ForestGreen", "Lime", "LimeGreen", "Linen", "Navy", "Moccasin", "Olive", "Plum", "PowderBlue", 
                 "Snow", "SeaGreen", "SeaShell", "SpringGreen", "Tan", "Teal", "Tomato"];

//A function to return random color
const getColor = function () {
    var randomize = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomize];
}

//Add eventListener to button
button.addEventListener("click", () => {
    let theColor = getColor();
    displayField.style.backgroundColor = theColor;
    colorName.innerHTML = theColor;
})