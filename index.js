function digitalclock(){
let d= new Date();
 htime = d.getHours();
 mtime = d.getMinutes();
 stime = d.getSeconds();
let period = htime >=12 ? "pm" : "am";
// --------------------------
 document.getElementById("hours").textContent = htime;
 document.getElementById("minutes").textContent= mtime;
 document.getElementById("seconds").textContent= stime;
 document.getElementById("ampm").innerHTML= period;
};
// ---------------------------
setInterval(digitalclock,1000);