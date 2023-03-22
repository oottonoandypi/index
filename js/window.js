let addStrong = function(ele){
    ele.innerHTML = "<strong>"+ele.innerHTML+"</strong>";
};

let removeStrong = function(ele, str){
    setTimeout(function(){
        ele.innerHTML=str;
    }, 100);
};

let disableEle = function(ele){
    document.getElementById("window_content_header_nav_top").disabled=false;
    document.getElementById("window_content_header_nav_portfolio").disabled=false;
    document.getElementById("window_content_header_nav_about").disabled=false;
    ele.disabled=true;
}