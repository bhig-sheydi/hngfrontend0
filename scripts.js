function updateUTCTime() {
    document.getElementById("utc-time").innerText = new Date().toUTCString();
}
updateUTCTime();
setInterval(updateUTCTime, 1000);