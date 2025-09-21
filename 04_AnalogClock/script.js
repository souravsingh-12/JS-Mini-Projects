const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function displayTime() {
    let date = new Date();

    //get the hour, minute and second
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    //rotate
    let hRotate = 30 * hh + mm / 2;
    let mRotate = 6 * mm;
    let sRotate = 6 * ss;

    hour.style.transform = `rotate(${hRotate}deg)`;
    minute.style.transform = `rotate(${mRotate}deg)`;
    second.style.transform = `rotate(${sRotate}deg)`;
}
setInterval(displayTime, 1000);
