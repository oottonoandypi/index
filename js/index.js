let repeatedStringGenerator_withFonts=function(str, fontSelections, parent_canvas, ele, fake_canvas){
    let parent_ele=parent_canvas.querySelector(ele);
    let selection = Math.floor(Math.random() * fontSelections.length);
    if(parent_ele.innerHTML=="" || parent_ele.offsetHeight<=parent_canvas.offsetHeight){
        let textMeasurement = fake_canvas.getContext('2d').measureText(parent_ele.innerText);
        while(parent_ele.offsetHeight<=parent_canvas.offsetHeight){
            /* console.log(textMeasurement.width*parent_ele.offsetHeight);
            console.log(window.innerWidth *window.innerHeight);
            console.log("window innerwidth: "+window.innerWidth);
            console.log("window innerheight: "+window.innerHeight);
            console.log("text width: "+textMeasurement.width);
            console.log("h1 offsetheight: "+parent_ele.offsetHeight); */
            parent_ele.innerHTML+="<em>"+ str+"</em>";
            parent_ele.querySelectorAll("em")[parent_ele.querySelectorAll("em").length-1].style.fontFamily=fontSelections[selection];
            length--;
            selection = Math.floor(Math.random() * fontSelections.length);
            console.log(selection);
            textMeasurement = fake_canvas.getContext('2d').measureText(parent_ele.innerText);
            // console.log(parent_ele.innerText);
        }
    }else{
        let ems = parent_ele.querySelectorAll("em");
        for(let i=0; i<ems.length; i++){
            ems[i].style.fontFamily=fontSelections[selection];
            selection = Math.floor(Math.random() * fontSelections.length);
        }
    }
    
    // console.log(parent_ele.innerHTML);
    // return output;
}

const fontSelections = ["Caveat, cursive", 
    "Gloria Hallelujah, cursive",
    "Indie Flower, cursive",
    "Nanum Pen Script, cursive",
    "Pacifico, cursive",
    "Rubik Iso, cursive",
    "Shadows Into Light"
];
const backgroundStr = " Under Construction.. Stay Toned!!";
const background_canvas = document.querySelector("#background_canvas");
const fake_canvas = document.querySelector("canvas");
repeatedStringGenerator_withFonts(backgroundStr, fontSelections, background_canvas, "h1", fake_canvas);
setInterval(function() {
    repeatedStringGenerator_withFonts(backgroundStr, fontSelections, background_canvas, "h1", fake_canvas);
  }, 1000);
// console.log(document.querySelector("#background_canvas").innerHTML);

