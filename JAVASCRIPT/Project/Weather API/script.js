

async function weatherapi(city) {
    let response = await fetch(`https://wttr.in/${city}?format=j1`);
    let res = await response.json();
    showweather(res);
    aircondition(res);

}

let search = document.getElementById("search");
search.addEventListener("submit", (data) => {
    data.preventDefault();
    let cityinput = document.getElementById("city");
    weatherapi(cityinput.value);
})
function showweather(data) {
    console.log(data);
    let arr = ["e555eccb-fbe4-4a3c-8917-933a41798140.png", "2c926953-f968-411a-af55-893c6c0d8901.png", "d12bc406-1c84-42b5-9f37-4d52460d0521.png", "e555eccb-fbe4-4a3c-8917-933a41798140.png"]
    let selectedImg = arr[Math.floor(Math.random() * arr.length)];
    let weather = document.getElementById("weather");
    weather.innerHTML = `
     <div class="sec-2">
            <div class="city" id="city">
                <h1>${data.nearest_area[0].areaName[0].value}</h1>
                <h2>${data.current_condition[0].FeelsLikeC} ℃</h2>
            </div>
             <div class="img">
            <img src="./${selectedImg}" alt="Weather Icon">
        </div>`
}
function aircondition(data) {
    let sec4 = document.getElementById("sec-4");
    sec4.innerHTML = `
    
            <div class="sec-4" id="sec-4">
                <h5>AIR CONDITIONS</h5>

                <div class="first">
                    <div class="feel">
                        <h4>Real Feel</h4>
                        <h2>${data.current_condition[0].FeelsLikeC} ℃</h2>
                    </div>
                    <div class="wind">
                        <h4>Wind</h4>
                        <h2>${data.current_condition[0].windspeedKmph} km/h</h2>
                    </div>
                </div>
                <div class="second">
                    <div class="rain">
                        <h4>Chance of rain</h4>
                        <h2>${data.weather[0].hourly[0].chanceofrain}%</h2>
                    </div>
                    <div class="index">
                        <h4>UV Index</h4>
                        <h2>${data.current_condition[0].uvIndex}</h2>
                    </div>


                </div>

            </div>

        `
}