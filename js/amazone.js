document.onselectstart = function(){ return false; };
document.onmousedown = function(){ return false; };
document.body.onselectstart = "return false;"
document.body.onmousedown = "return false;"
document.oncontextmenu = function(){ return false; };
document.body.oncontextmenu = "return false;"

function msgAlert(){
    alert("偽サイトですよ！！！！");
    window.location.href='index.html';
}

function msgAlert_2(){
    alert("偽サイトですよ！");
}
