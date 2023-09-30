const time = document.getElementById("time");
const localdate =document.getElementsByTagName("h5")[0];
let hour;
let minute;
let second;
let Time;
let date;
let notation;
const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
let  formattedDate;
setInterval(()=>
{   
    date = new Date();
    formattedDate = date.toLocaleDateString('en-GB', options);
    localdate.innerText=formattedDate;
    hour=date.getHours()%12 || 12 ;
    
    if(hour >12)
    {
     notation=" AM";
    }
    else
    {
        notation=" PM";
    }


    if(hour.toLocaleString().length ==1)
    {
        hour = "0"+hour;
    }

    minute = date.getMinutes();
    if(minute.toLocaleString().length ==1)
    {
        minute = "0"+minute;
    }


    second = date.getSeconds();
    if(second.toLocaleString().length ==1)
    {
        second = "0"+second;
    }

Time = hour+" : "+minute+" : "+second+notation;
time.innerText=Time;
},1000);
