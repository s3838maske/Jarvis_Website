let visibility = false;

function productList() {
    var productDropdown = document.getElementById("product-dropdown");
    if(!visibility){
        // console.log("hi")
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