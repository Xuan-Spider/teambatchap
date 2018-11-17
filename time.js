
document.addEventListener('DOMContentLoaded', function(){

    var countDownDate = new Date("Jun 28, 2016 00:00:00").getTime();


    // Update the count down every 1 second
    var x = setInterval(function() {
    
        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date
        var distance =now - countDownDate;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with id="demo"
        document.querySelector(".date span").innerHTML = days + " days / " + hours + "hours  /"
        + minutes + "m  " + seconds + "s ";
        
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".date span").innerHTML = "EXPIRED";
        }
    }, 1000);


    var myVar = setInterval(myTimer, 1000);

    function myTimer() {
        var d = new Date();
        document.getElementById("timenow").innerHTML = d.toLocaleTimeString();
    }

}, false);