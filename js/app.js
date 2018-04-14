'use strict';
//This tableElem variable will be called in my render part.
var tableElem = document.getElementById('thetable');
var storeHours = ['6am', '7am','8am','9am','10am','11am','12pm', '1pm','2pm','3pm', '4pm','5pm','6pm','7pm','8pm'];

var allStores =[];
var hourlyTotal = [];

function CookieStore (storeLocation, minClient, maxClient,averageCookies){

  this.store = storeLocation;
  this.minClient = minClient;
  this.maxClient = maxClient;
  this.averageCookies = averageCookies;
  this.cookiesSoldPerHour = [];
  this.dailySales = 0;
  allStores.push(this);

}
//THESE ARE METHODS
//generation my random Number Of clients AND I don't need to call it because I'm including it in cookieSales
CookieStore.prototype.randomNumberOfClient = function(){
  return Math.floor(Math.random() * (this.maxClient - this.minClient +1)) + this.minClient;
};
// Cookies Sales per Hour
CookieStore.prototype.cookieSales = function () {
  for(var i = 0; i < storeHours.length; i++ ){
    var salesPerHour = Math.round(this.randomNumberOfClient() * this.averageCookies);
    this.cookiesSoldPerHour.push(salesPerHour);
  }
};
//Total Sales
CookieStore.prototype.storeSales = function (){
  for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
    this.dailySales += this.cookiesSoldPerHour[i];
  }
};
//FIRST ROW : HEADER
function renderTable() {
  var headRowElement = document.createElement('tr');
  //I will create a blank cell. Esto porque en el top izquierdo, no hay data.
  var cellElement = document.createElement('th');
  //I didn't give it a content because its a blank cell.
  headRowElement.appendChild(cellElement);
  //This will hours in my header, and have to make a for loop to print each of the storeHours in the 'tr' created before.
  for(var i = 0; i < storeHours.length; i++){
    //for( var i in storeHours); Esto es lo mismo que la foor lop que escribí arriba: var index en storeHour)
    //1.I have to create the variable that creates my element 'th' (in this case)
    var cellEl = document.createElement('th');
    //2.Now I will give it content:
    cellEl.textContent = storeHours[i];
    //3.Now I have to Append.
    headRowElement.appendChild(cellEl);
  }
  cellEl = document.createElement('th');
  cellEl.textContent = 'Total Cookies Sold';
  headRowElement.appendChild(cellEl);
  //I just appended the data
  tableElem.appendChild(headRowElement);
}
//FIRST AND PIKE CELL
CookieStore.prototype.salesRender = function() {
  var newRow = document.createElement('tr');
  var dataRow = document.createElement('td');
  dataRow.textContent = this.store;
  newRow.appendChild(dataRow);
  tableElem.appendChild(newRow);
  console.log(dataRow);
  for(var i = 0; i < storeHours.length; i++) {
    var dataCell = document.createElement('td');
    dataCell.textContent = this.cookiesSoldPerHour[i];
    console.log(this.cookiesSoldPerHour);
    //Append to the row, por eso lo quiero dentro del loop porque lo va a hacer varias veces hasta [i].length.
    newRow.appendChild(dataCell);
  }
  dataCell = document.createElement('td');
  dataCell.textContent = this.dailySales;
  newRow.appendChild(dataCell);
  //Lo pongo afuera porque sólo lo voy a pegar una vez. Porque esto es mi row completa pegándola to the TABLE.
};


//This will render my HEADER ROW.
renderTable();


//Instances are OBJECT created by constructor functions.

//These are the INSTANCES
var firstandPike = new CookieStore ('First and Pike', 23, 65, 6.3);
var seaTacAirport =new CookieStore ('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStore ('Seattle Center', 11, 38, 3.7);
var alki = new CookieStore ('Alki', 2, 16, 4.6);
var capitolHill = new CookieStore ('Capitol Hill', 20, 38, 2.3);


//I am calling all THE SALES PER HOUR, ALL THE TABLE
firstandPike.cookieSales();
seaTacAirport.cookieSales();
seattleCenter.cookieSales();
alki.cookieSales();
capitolHill.cookieSales();
//I'm calling the TOTAL COOKIES SOLD
firstandPike.storeSales();
seaTacAirport.storeSales();
seattleCenter.storeSales();
alki.storeSales();
capitolHill.storeSales();
//Calling the ROWS
firstandPike.salesRender();
seaTacAirport.salesRender();
seattleCenter.salesRender();
alki.salesRender();
capitolHill.salesRender();
//I'm CALLING THE TOTAL
// firstandPike.totalSales();
// seaTacAirport.totalSales();
// seattleCenter.totalSales();
// alki.totalSales();
// capitolHill.totalSales();


//EVENTS


function clickEvent(event){
  event.preventDefault();
  console.log('the form was submitted');

  var firstElement = event.target;
  var newInput = new CookieStore(firstElement.location.value, Number(firstElement.min.value),Number(firstElement.max.value),Number(firstElement.average.value));
  console.log(newInput);
  newInput.cookieSales();
  newInput.storeSales();
  newInput.salesRender();

  //console.log('footer here');
  //renderFooter();
}

var locationFormElement = document.getElementById('formElement');
locationFormElement.addEventListener('submit', clickEvent);



function cookiesSoldPerStorePerHour() {
  //I'm going hour per hour
  //THIS IS THE SPIRAL PUNCH, THE HORIZONTAL LOOP, I'm making it walk.
  for(var hour = 0; hour < storeHours.length; hour++){
    //I'm going to...
    //we're putting the var here because it has to be considered by both loops. If it was living in the inner loop, it would only be running in it. THAT IS WHY IT HAS TO BE OUTSIDE.
    var sumOfCookies = 0;

    //This is the vertical LOOP
    for(var i = 0; i < allStores.length; i++){
      //hour will give me the different hours not just the first column.
      sumOfCookies += allStores[i].cookiesSoldPerHour[hour];

    }
    hourlyTotal.push(sumOfCookies);
    console.log(sumOfCookies);
  }

}
cookiesSoldPerStorePerHour();

function renderFooter() {
  var footRowElement= document.createElement('tr');
  //I could have use datafooter en vez de total and then borrar var from loop.
  var total = document.createElement('td');
  total.textContent = 'Total sales per hour';
  footRowElement.appendChild(total);

  for(var i = 0; i < hourlyTotal.length; i++){
    var dataFooter = document.createElement('td');
    dataFooter.textContent = hourlyTotal[i];
    footRowElement.appendChild(dataFooter);

  }
  tableElem.appendChild(footRowElement);

  var totalOfTotals = 0;
  for(var j = 0; j < hourlyTotal.length; j++) {
    totalOfTotals += hourlyTotal[j];
  }
  var sumOfSum = document.createElement('td');
  sumOfSum.textContent = totalOfTotals;
  footRowElement.appendChild(sumOfSum);
}

renderFooter();

// var headerElement = document.getElementById('header');

// headerElement.addEventListener('click', function() {
//   alert('you clicked it!');
// });

// function handleDogFormSubmitted(event) {
//   // stop the page from refreshing
//   event.preventDefault();
//   console.log('the form was submitted!');
//   var formElement = event.target;
//   var newDog = new Dog(formElement.name.value, formElement.color.value, formElement.breed.value, formElement.nickname.value);
//   console.log(newDog);
//   newDog.renderRow();
//var newDog = new Dog(formElement.name, color, breed, nickname);






//RANDOM NUMBER OF CUSTOMERS!!
// function randomClients (){
//     this.customerPerHour = Math.floor(Math.random() * (this.maxClientPerHour - this.minClientPerHour)) + this.minClientPerHour;
//   };



//function randomClients (){
// for(var i = 0; i <storeHours.length; i++ ){
//   var numberSold = (this.customerPerHour[i] * this.averageCookiesPerCustomer);

//   this.cookiesPerHour[i] = numberSold;
//   this.dailySales += numberSold;




// cookieSalesPerHour: function ()
// {
//   for(var i = 0; i <storeHours.length; i++ ){
//     var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
//     this.cookiesPerHour[i] = numberSold;
//     this.dailySales += numberSold;

// },


//PIKE LOCATION
// var firstandPike = {
//   minClientPerHour: 23,
//   maxClientPerHour: 65,
//   averageCookiesPerCustomer: 6.3,
//   dailySales:0,
//   cookiesPerHour:[],
//   customerPerHour: [],

//   randomNumberOfClient: function ()//calculates the random clients
//   {
//     for (var i = 0; i < storeHours.length; i++){

//       this.customerPerHour[i] = Math.floor(Math.random() * (this.maxClientPerHour - this.minClientPerHour)) + this.minClientPerHour;
//     }
//   },
//   cookieSalesPerHour: function () //calculates sales per hour and total sales
//   {
//     for(var i = 0; i <storeHours.length; i++ ){
//       var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
//       this.cookiesPerHour[i] = numberSold;
//       this.dailySales += numberSold;
//     }
//   },

//   renderSales: function (){
//     var ulElem = document.getElementById('salesinpike');
//     for (var i = 0; i < storeHours.length; i++){
//       //create an element
//       var listItemElem = document.createElement( 'li' );
//       //Give it a content
//       listItemElem.textContent = storeHours[i] + ': ' + Math.round(this.cookiesPerHour[i]) + ' cookies.';
//       //Append to the DOM
//       ulElem.appendChild(listItemElem);

//     }
//     listItemElem.textContent = 'Total of cookies: ' + Math.round(this.dailySales);
//   }

// };

// firstandPike.randomNumberOfClient();
// firstandPike.cookieSalesPerHour();
// firstandPike.renderSales();
// console.log(firstandPike.dailySales);


// //SeaTac Airport LOCATION
// var seaTac = {
//   minClientPerHour: 3,
//   maxClientPerHour: 24,
//   averageCookiesPerCustomer: 1.2,
//   dailySales:0,
//   cookiesPerHour:[],
//   customerPerHour: [],

//   randomNumberOfClient: function ()//calculates the random clients
//   {
//     for (var i = 0; i < storeHours.length; i++){

//       this.customerPerHour[i] = Math.floor(Math.random() * (this.maxClientPerHour - this.minClientPerHour)) + this.minClientPerHour;
//     }
//   },
//   cookieSalesPerHour: function () //calculates sales per hour and total sales
//   {
//     for(var i = 0; i <storeHours.length; i++ ){
//       var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
//       this.cookiesPerHour[i] = numberSold;
//       this.dailySales += numberSold;
//     }
//   },
//   renderSales: function (){
//     var ulElem = document.getElementById('seaTacAir');
//     for (var i = 0; i < storeHours.length; i++){
//       //create an element
//       var listItemElem = document.createElement( 'li' );
//       //Give it a content
//       listItemElem.textContent = storeHours[i] + ': ' + Math.round(this.cookiesPerHour[i]) + ' cookies';
//       //Append to the DOM
//       ulElem.appendChild(listItemElem);