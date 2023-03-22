const windowCanvas = document.getElementById("window_content_canvas");

let addStrong = function(ele){
    ele.innerHTML = "<strong>"+ele.innerHTML+"</strong>";
};

let removeStrong = function(ele, str){
    ele.innerHTML=str;
};

let disableEle = function(ele){
    document.getElementById("window_content_header_nav_top").disabled=false;
    document.getElementById("window_content_header_nav_portfolio").disabled=false;
    document.getElementById("window_content_header_nav_about").disabled=false;
    ele.disabled=true;
}

windowCanvas.addEventListener("scroll", function() {
    var portfolioEle = document.getElementById("window_content_body_portfolio");
    var aboutEle = document.getElementById("window_content_body_about");

    var nav_top=document.getElementById("window_content_header_nav_top");
    var nav_portfolio=document.getElementById("window_content_header_nav_portfolio");
    var nav_about=document.getElementById("window_content_header_nav_about");

    if(windowCanvas.scrollTop > (aboutEle.offsetHeight+aboutEle.offsetTop-1000)) {
        disableEle(nav_about);
    }else if (windowCanvas.scrollTop > (portfolioEle.offsetHeight+portfolioEle.offsetTop-200)) {
        disableEle(nav_portfolio);
    }else{
        disableEle(nav_top);
    }
});