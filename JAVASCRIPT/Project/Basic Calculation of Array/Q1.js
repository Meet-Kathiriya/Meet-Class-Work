
const colors = ["Green", "Red", "Pink", "Yellow", "Brown", "Orange", "Blue", "Purple", "Magenta", "Cyan"];

    function getRandomColor() 
        {
            return colors[Math.floor(Math.random() * colors.length)];
        }

    function changeColor() 
        {
            const colorBox = document.getElementById("colorBox");
            const newColor = getRandomColor();
            colorBox.style.backgroundColor = newColor.toLowerCase();
        }

    document.getElementById("changeColorBtn").addEventListener("click", changeColor);
    changeColor();