const temperature = 25;
const windSpeed = 10;


function calculateWindChill(temp, speed) {

    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);

}


let windChill = "N/A";


if (temperature <= 10 && windSpeed > 4.8) {

    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";

}


document.querySelector("#windchill").textContent = windChill;



const today = new Date();


document.querySelector("#year").textContent = today.getFullYear();


document.querySelector("#modified").textContent = document.lastModified;