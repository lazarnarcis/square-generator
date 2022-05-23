function showBalls () {
    let balls = document.querySelector("#balls");
    let principalDiv = document.querySelector("#principal");
    let numberBalls = balls.value;

    if (numberBalls != "") {
        principalDiv.innerHTML = "";
        for (let i = 0; i < numberBalls; i++) {
            let styleCss = {
                height: "40px",
                width: "40px",
                backgroundColor: "red",
                margin: "10px"
            };
            let div = document.createElement("div");
            div.style.height = styleCss.height;
            div.style.width = styleCss.width;
            div.style.backgroundColor = styleCss.backgroundColor;
            div.style.margin = styleCss.margin;
            principalDiv.appendChild(div);
        }
    } else {
        alert("Please enter number of balls");
    }
}