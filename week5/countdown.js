// Tuesday, November 6, 2012
/*

var date1 = new Date("7/11/2010");
var date2 = new Date("12/12/2010");
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
alert(diffDays)​;

13 days + 13h : 48m : 31s remaining until Election Day!
*/
var currentDay;
var electionDay;

window.onload = function() {
	window.setTimeout("Tick()", 1000);
}

function Tick() {
	countdown = document.getElementById('countdown');
	electionDay = new Date(2012, 11, 6, 0,0,0,0);
	currentDay = new Date();
	var day = Math.abs(currentDay.getDate() - electionDay.getDate());
	var hours = Math.abs(currentDay.getHours() - electionDay.getHours());
	var minutes = Math.abs(currentDay.getMinutes() - electionDay.getMinutes());
	var seconds = Math.abs(currentDay.getSeconds() - electionDay.getSeconds());
	countdown.innerHTML = day + " + " + hours + "h : " + minutes + "m : " + seconds +"s"; 
	//countdown.innerHTML = countdown;
	window.setTimeout("Tick()", 1000);
}

