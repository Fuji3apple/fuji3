document.onselectstart = function(){ return false; };
document.onmousedown = function(){ return false; };
document.body.onselectstart = "return false;"
document.body.onmousedown = "return false;"
document.oncontextmenu = function(){ return false; };
document.body.oncontextmenu = "return false;"

const app = new Vue({
    el: "#app",
    data: {
        count: 3 * 24 * 60 * 60 , 
        color: "black"
    },
    created() {
        setInterval(() => {
            this.count = this.count - 1
            if(this.color === "black") {
                this.color = "red"
            } else {
                this.color = "black"
            }
        }, 1000)
    }
})