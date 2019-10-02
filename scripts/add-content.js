var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18){
    greeting = 'Dobry wieczor!';
} else if (hourNow > 12) {
    greeting = 'Dzien dobry!';
} else if (hourNow > 0) {
    greeting = 'Dzien dobry!';
} else {
    greeting = 'Witamy!';
}

//document.write('<h3>' + greeting + '</h3>');

var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById('cost');
el.textContent = total + ' zł';
