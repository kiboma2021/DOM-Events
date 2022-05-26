function functionName(e) {
  e.innerHTML="Changed from Event handler!!";
}
function checkTime(el) {
  el.innerHTML=Date();
}

function displayTimeHeader() {
  document.getElementById("time").innerHTML=Date();
}

document.getElementById("dateBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("time-now").innerHTML = Date();
}

document.getElementById("username").onchange=upperCase;

function upperCase() {
  const x = document.getElementById("username");
  x.value = x.value.toUpperCase();
}