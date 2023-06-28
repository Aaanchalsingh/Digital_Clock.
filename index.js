const time = new Date();
const date = time.toLocaleDateString();
const curtime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
const curdate = date;
document.querySelector("h1").innerHTML = curtime;
document.querySelector("h3").innerHTML = curdate;

const btn = document.querySelector("#start");
const btne = document.querySelector("#stop");

btn.addEventListener("click", start);
btne.addEventListener("click", stop);

let repeat;

function start() {
    clearInterval(repeat);
    const time = new Date();
    const curtime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
    document.querySelector("h1").innerHTML = curtime;
    repeat = setInterval(start, 1000);
}


function stop() {
    clearInterval(repeat);
}