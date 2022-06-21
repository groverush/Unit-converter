




let metric = document.getElementById('metric');
let nums = document.getElementsByClassName('num');
let numConvert = 0;

let feet = document.getElementById('feet');
let meters = document.getElementById('meters');
let gallons = document.getElementById('gallons');
let liters = document.getElementById('liters');
let pounds = document.getElementById('pounds');
let kilos = document.getElementById('kilos');


metric.addEventListener('input', () => {
    convert();
})




function convert() {
    numConvert = metric.value;
    for (let i = 0; i < nums.length; i++) {
        nums[i].textContent = numConvert;
    }
    length();
    volume();
    mass()
}



function length() {
    let feets = numConvert * 3.2808;
    feets = feets.toFixed(3);
    feet.textContent = feets;
    let meter = numConvert * 0.3048;
    meter = meter.toFixed(3);
    meters.textContent = meter;
}


function volume() {
    let gallon = numConvert / 3.785;
    gallon = gallon.toFixed(3);
    gallons.textContent = gallon;
    let liter = numConvert * 3.785412;
    liter = liter.toFixed(3);
    liters.textContent = liter;
}

function mass() {
    let pound = numConvert * 2.204623;
    pound = pound.toFixed(3);
    pounds.textContent = pound;
    let kilo = numConvert / 2.204623;
    kilo = kilo.toFixed(3);
    kilos.textContent = kilo;
}