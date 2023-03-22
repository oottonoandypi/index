let addStrong = function(ele){
    ele.innerHTML = "<strong>"+ele.innerHTML+"</strong>";
}

let removeStrong = function(ele, str){
    setTimeout(function(){
        ele.innerHTML=str;
    }, 100);
}