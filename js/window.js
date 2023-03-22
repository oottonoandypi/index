const windowCanvas = document.getElementById("window_content_canvas");
const nav_portfolio=document.getElementById("window_content_header_nav_portfolio");
const nav_me=document.getElementById("window_content_header_nav_me");
const nav_top=document.getElementById("window_content_header_nav_top");
let currDisabled = null;

let addStrong = function(ele){
    ele.innerHTML = "<strong>"+ele.innerHTML+"</strong>";
};

let removeStrong = function(ele, str){
    setTimeout(function(){
        ele.innerHTML=str;
    }, 0);
};

let disableEle = function(ele){
    // document.getElementById("window_content_header_nav_top").disabled=false;
     if(ele==nav_me) {
        nav_top.disabled=false;
        removeStrong(nav_top, "TOP");
        nav_portfolio.disabled=false;
        removeStrong(nav_portfolio, "PORTFOLIO");
    }else if(ele==nav_portfolio){
        nav_top.disabled=false;
        removeStrong(nav_top, "TOP");
        nav_me.disabled=false;
        removeStrong(nav_me, "BEHIND OOTTONOANDYPI");
    }else{
        nav_portfolio.disabled=false;
        removeStrong(nav_portfolio, "PORTFOLIO");
        nav_me.disabled=false;
        removeStrong(nav_me, "BEHIND OOTTONOANDYPI");
    }

    if(ele!=null) {
        ele.disabled=true;
        addStrong(ele);
    }
}

disableEle(nav_top);
windowCanvas.addEventListener("scroll", function() {
    var portfolioEle = document.getElementById("window_content_body_portfolio");
    var meEle = document.getElementById("window_content_body_me");
    // var topEle = document.getElementById("window_content_body");

    if(windowCanvas.scrollTop > (meEle.offsetTop-100)) {
        if(currDisabled!=nav_me) disableEle(nav_me);
    }else if (windowCanvas.scrollTop > (portfolioEle.offsetTop-200)) {
        if(currDisabled!=nav_portfolio) disableEle(nav_portfolio);
    }else{
        if(currDisabled!=nav_top) disableEle(nav_top);
    }
});