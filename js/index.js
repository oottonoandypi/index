let repeatedStringGenerator_withStyle=function(str, styleSelections){
    
}

const strStyleSelections = {
    "font-family": ["'Caveat', cursive;", 
                  "'Gloria Hallelujah', cursive;",
                  "'Indie Flower', cursive;",
                  "'Nanum Pen Script', cursive;",
                  "'Pacifico', cursive;",
                  "'Rubik Iso', cursive;",
                  "'Shadows Into Light'"
                  ]
};
const backgroundStr = "Under Construction..";

document.querySelector("#background_canvas h1").innerHTML=repeatedStringGenerator_withStyle(backgroundStr, strStyleSelections);
console.log(document.querySelector("#background_canvas").innerHTML);

