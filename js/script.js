const clock_date = document.getElementById("digital_clock_date");
const clock_time = document.getElementById("digital_clock_time");


function showTime() {

    //Date
    var d = new Date(); //creating object of date class

    var year = d.getFullYear(); //get year

    var month = d.getMonth(); //get month
    var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var day = d.getDay(); //get day
    var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var date = d.getDate(); //get date

    //Date End

    //Time
    var h = d.getHours(); //get hours
    var m = d.getMinutes(); //get minutes
    var s = d.getSeconds(); //get seconds
    var midday = "AM";

    if (h == 0) {
        h = 12;
    } else if (h > 12) {
        h = h - 12; //assigning hour in 12-hour format
        midday = "PM";
    }

    if (h < 10) { //appending 0 before time elements if less than 10
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    //Time end
    clock_date.innerHTML = dayArray[day] + ", " + date + " " + monthArray[month] + " " + year;
    clock_time.innerHTML = h + ":" + m + ":" + s + " " + midday;

    setInterval(showTime, 1000); //for every 1000 milliseconds(ie, 1 second) interval, activate the showTime() function.

}

showTime();