document.onselectstart = function(){ return false; };
document.onmousedown = function(){ return false; };
document.body.onselectstart = "return false;"
document.body.onmousedown = "return false;"
document.oncontextmenu = function(){ return false; };
document.body.oncontextmenu = "return false;"

const app = new Vue({
    el: "#app",
    data: {
        message:"写真を撮影しました",
        seen: false
    },
    methods:{
        move(){
            const se = new Audio("shutter.wav")
            se.play()
            this.seen = true
            setTimeout(() =>{
                this.message = "写真を送信中..."
            },800)
            setTimeout(() =>{
                this.message = "IPアドレス取得中..."
            },1600)
            setTimeout(() =>{
                this.message = "IPアドレスから住所特定中..."
            },2400)
            setTimeout(() =>{
                this.message = "情報送信中..."
            },3200)
            setTimeout(() =>{
                location.href = "invoice.html"
            },4000)
        }
    }
})