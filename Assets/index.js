// dropdown functionatility code Started
let visibility = false;

function productList() {
    var productDropdown = document.getElementById("product-dropdown");
    if(!visibility){
        productDropdown.style.display = "block";
        visibility = true;
    }else if(visibility = true){
        productDropdown.style.display = "none";
        visibility = false;
    }
    return
}


function solutionList() {
    var solutionDropdown = document.getElementById("solution-dropdown");
    if(!visibility){
        // console.log("hi")
        solutionDropdown.style.display = "block";
        visibility = true;
    }else if(visibility = true){
        solutionDropdown.style.display = "none";
        visibility = false;
    }
    return
}

// dropdown functionatility code end

// auto-Slider code started

let count = 1;
const removebg = ()=>{
    let radioBtn = document.getElementById('radio-btn'+(count))
    radioBtn.style.backgroundColor = "#eef4fa"
}

setInterval(function(){
    let radioBtn = document.getElementById('radio-btn'+(count))
    radioBtn.style.backgroundColor = "#1566d6";
    document.getElementById('btn'+count).checked = true;
    count++
    if(count > 2){
        count = 1;
    }
    removebg()
}, 5000)
// auto-Slider code end