var key = 'a917c807a02e195bf1ac710b64e977ab';
function getWeather(lat, lon) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + key)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            console.log(data);
        })
        .catch(function () {
            // catch any errors
        });
}

window.onload = function () {
    getWeather("43.700111", "-79.416298");
}

document.getElementById("button").addEventListener("click", search);

function search() {
    var search = document.getElementById("search").value;
    try {
        getCoords(search);
    } catch {
        log("invalid!!");
    }
}

function log(text) {
    console.log(text);
}

function getCoords(name) {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + name + '&limit=&appid=' + key)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            console.log(data);
            log("here");
            log(resp[0]);

        })
        .catch(function () {
            // catch any errors
        });
}