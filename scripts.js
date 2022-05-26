function functionName(e) {
  e.innerHTML="Changed from Event handler!!";
}
function checkTime(el) {
  el.innerHTML=Date();
}

function displayTimeHeader() {
  document.getElementById("time").innerHTML=Date();
}