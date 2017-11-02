   var smallv = true;
$(document).ready(function () {
 
    var countDownDate = new Date("Jan 14, 2018 11:00:00").getTime();
    var x = setInterval(function () {

        var now = new Date().getTime();


        var distance = countDownDate - now;


        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (days < 10) {
            days = "0" + days;
        }
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        $(".countdown-text").html(days + " dni " + hours + " godzin " +
            minutes + " minut " + seconds + " sekund ");
        if (smallv == true) {


            $(".countdown-text").animate({
                fontSize: "+=1"
            }, 400, function () {
                smallv = false;
            });
        } else {
            $(".countdown-text").animate({
                fontSize: "-=1"
            },400,  function () {
                smallv = true;
            });
        }
        if (distance < 0) {
            clearInterval(x);
            $(".countdown-text").html("Odliczanie zakończone");
        }
    }, 1000);

});
