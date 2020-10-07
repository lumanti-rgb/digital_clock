function showTime(){

    //Date
    var d=new Date();                   //creating object of date class

    var year=d.getFullYear();           //get year

    var month=d.getMonth();             //get month
    var montharray=["January","February","March","April","May","June","July","August","September","October","November","December"];

    var day=d.getDay();                 //get day
    var dayarray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var date=d.getDate();                //get date

    //Date End

    //Time
    var h= d.getHours();                   //get hours
    var m=d.getMinutes();                  //get minutes
    var s=d.getSeconds();                  //get seconds
    var midday="AM";

        if(h==0){
            h=12;
        }else if (h>12){
            h=h-12;                         //assigning hour in 12-hour format
            midday="PM";    
        }

        if(h<10){                           //appending 0 before time elements if less than 10
            h="0"+h;
        }
        if(m<10){
            m="0"+m;
        }

        if(s<10){
            s="0"+s;
            }
        
        //Time end
        document.getElementById("digital_clock_date").innerHTML=dayarray[day]+ ", " + date +" "+montharray[month]+" "+year;
        document.getElementById("digital_clock_time").innerHTML=h+":"+ m +":"+ s +" "+ midday;

        setTimeout(showTime,1000); //setting timer

        }

showTime();