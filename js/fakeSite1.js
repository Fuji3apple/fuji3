document.onselectstart = function(){ return false; };
document.onmousedown = function(){ return false; };
document.body.onselectstart = "return false;"
document.body.onmousedown = "return false;"
document.oncontextmenu = function(){ return false; };
document.body.oncontextmenu = "return false;"

window.onload = (function(){
    history.pushState(null,null,null);
    $(window).on('popstate',function(e){})
})