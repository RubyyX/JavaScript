javascript:(function(){var start = document.getElementsByClassName("hours time-start");var end = document.getElementsByClassName("hours time-finish");var breaks = document.getElementsByClassName("time-breaks break-free-text");var btns = document.getElementsByClassName("primary timesheet-details-btn timeblock-save");var inputStart = prompt("Enter start time (ex. 8:00am): ");var startTime = new Date("01/01/2000 " + inputStart);var endTime = new Date(startTime.getTime() + 8*60*60*1000);var hours = endTime.getHours(); var minutes = endTime.getMinutes(); var inputEnd = (hours<10?"0"+hours:hours) + ":" + (minutes<10?"0"+minutes:minutes);for(let i=0; i<5; i++){btns[2*i].click();start[i].value = inputStart;end[i].value = inputEnd;breaks[i].value = 30;}})();
