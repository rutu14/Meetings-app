days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
months=["January","February","March","April","May","June","July","August","September","October","November","December"]
username=document.querySelector("#username")
username.innerText=("Hello Rutuja")
date=document.querySelector("#date")
day=document.querySelector("#day")
d=new Date()

currdate=d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear()
currday=days[d.getDay()]
console.log(currdate)
console.log(currday)
date.textContent=currdate
day.textContent=currday
// document.getElementById("username").value = currdate;
// console.log("date")
// console.log(d.toDateString())
// date.innerText=(d.getDate())+" "+(d.getMonth()+1)+" "+(d.getFullYear())
// day.innerText=(days[d.getDay()])
// console.log((d.getDate())+" "+(d.getMonth()+1)+" "+(d.getFullYear()))
// console.log((d.getDay()))
