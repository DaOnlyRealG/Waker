// Clock Setup

// Put the city of your choice between the apostrophes  
let city = 'Wattignies'

let showSwitch = false
// The Switch is only usefull if you are on a touchscreen and you don't have a night time so I recommend you to hide it

let showIcon = false
// Icons don't look good in my opinion so I recommend you to hide them 

































// ==== Code below, don't touch 
let nightmode = false;

console.log('Website succesfully loaded ! made by %cGaspardLB', 'color: black;background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);font-family: Helvetica; padding: 10px; font-size: 15px; font-weight: 600; border-radius: 10px ');
console.log('Checkout my website : https://gaspard-lb.web.app/')

// Darkmode Function

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        darkmode()
        console.log("Enter pressed")
    }
    else {
      console.log('Not Detected')
    }
});

let darkmode = () => {
    let main = document.getElementById('main');
    let checkbox = document.getElementById('switch');
    if (nightmode == false) {
        nightmode = true ;
        main.classList.add('shutdown');
        checkbox.checked = true
    } else {
        nightmode = false ;
        main.classList.remove('shutdown');
        checkbox.checked = false
    }
    console.log('Nightmode is set to ' + nightmode + ' ');
}

// Clock Function

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =  h + ":" + m;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// Fullscreen Function



// Weather Function 

function setFunc() {
  getData();
  setTimeout(setFunc, 60000);
}

function getData(value) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=7d80c26b1809f3e46ec69871ca7a8da2')
  .then(function (response) {
    return response.json();
  })
  .then(function (weather) {
    document.getElementById('city').innerHTML = weather.name;
    document.getElementById('temp').innerHTML = Math.round(weather.main.temp - 273.15) + '°C';
    document.getElementById('icon').innerHTML = "<img class=\"icon\" src=\"assets/fonts/WeatherIcons/"+weather.weather[0].icon+".svg\">";
  })
  .catch(function (err) {
    console.log(err);
  });
}

// Switch Function 

function showSwitchFunc() {
  if (showSwitch === false) {
    let darkmodeSwitch = document.getElementById('switch');
    darkmodeSwitch.classList.add('hide');
  }
}

// Icon Function 

function showIconFunc() {
  if (showIcon === false) {
    let icon = document.getElementById('icon');
    icon.classList.add('hide');
  };
}