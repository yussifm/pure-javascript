const hour = document.getElementById('hur');
const minute = document.getElementById('min');
const second = document.getElementById('sec');

function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    h = updateTime(h);
    m = updateTime(m);
    s = updateTime(s);

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;


    var t = setTimeout(function() { currentTime(); }, 1000); /* setting timer */
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}

currentTime(); /* calling currentTime() function to initiate the process */