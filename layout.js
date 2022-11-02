window.onload = function(){

    var timer = null;
    var n = 0;
    var allImg = document.getElementById("oImg");
    var imgName = "";
   
    function startTimer(){
        if(timer == null){
            timer = setInterval(changeView,2000);
        }
        console.log(n);
    }
    function stopTimer(){}

    function changeView(){
        n++;
        if(n>3){
            n=0;
        }
        allImg.src ="img/loop0"+(n+1)+".jpg";
        allImg.className = "imgMove";
        imgName = allImg;
    }
 startTimer();

    // countdown 


setInterval(function () {
        var oTime = document.getElementsByTagName("i");
        var nowTime = new Date();
        var endTime = new Date("2022/11/30,12:00:00");
        var countdown = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);

        var d = parseInt(countdown / 3600 / 24);
        var h = parseInt(countdown / 60 / 60);
        var m = parseInt(countdown / 60 % 60);
        var s = parseInt(countdown % 60);

        for (var i = 0; i < oTime.length; i++) {
            oTime[0].innerHTML = d;
            oTime[1].innerHTML = h;
            oTime[2].innerHTML = m;
            oTime[3].innerHTML = s;
        }


    }, 1000);
 
}

