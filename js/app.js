'use strict';
//This tableElem variable will be called in my render part.
var tableElem = document.getElementById('thetable');
var storeHours = ['6am', '7am','8am','9am','10am','11am','12pm', '1pm','2pm','3pm', '4pm','5pm','6pm','7pm','8pm'];

// var firstandPike = {
//   minClientPerHour: 23,
//   maxClientPerHour: 65,
//   averageCookiesPerCustomer: 6.3,
//   dailySales:[],
//   cookiesPerHour:[],
//   customerPerHour: []
// };

//var customerPerHour = [];

function CookieStore (storeLocation, minClient, maxClient,averageCookies){

  this.store = storeLocation;
  this.minClient = minClient;
  this.maxClient = maxClient;
  this.averageCookies = averageCookies;
  this.cookiesSoldPerHour = [];
  this.dailySales = 0;

}
//generation my random Number Of clients
CookieStore.prototype.randomNumberOfClient = function(){
  return Math.floor(Math.random() * (this.maxClient - this.minClient)) + this.minClient;
};

// Cookies Sales per Hour
CookieStore.prototype.cookieSales = function () {

  for(var i = 0; i < storeHours.length; i++ ){
    var salesPerHour = Math.round(this.randomNumberOfClient() * this.averageCookies);

    this.cookiesSoldPerHour.push(salesPerHour);
  }

};

//Total sales
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
    console.log('hi');
    //for( var i in storeHours); Esto es lo mismo que la foor lop que escribí arriba: var index en storeHour)
    //1.I have to create the variable that creates my element 'th' (in this case)
    var cellEl = document.createElement('th');
    //2.Now I will give it content:
    cellEl.textContent = storeHours[i];
    //3.Now I have to Append.
    headRowElement.appendChild(cellEl);

  }
  //I just appended the data
  tableElem.appendChild(headRowElement);

}
//FIRST AND PIKE CELL
CookieStore.prototype.salesRender = function() {

  console.log('test');
  var newRow = document.createElement('tr');
  var dataRow = document.createElement('td');
  dataRow.textContent = this.store;

  newRow.appendChild(dataRow);
  //tableElem.appendChild(newRow);
console.log(dataRow);

  for(var i = 0; i < storeHours.length; i++) {

    var dataCell = document.createElement('td');

    dataCell.textContent = this.cookiesSoldPerHour[i];
console.log(this.cookiesSoldPerHour);
    //Append

    newRow.appendChild(dataCell);
    
  }
  tableElem.appendChild(newRow);

};

renderTable();















//Instances are OBJECT created by constructor functions.

//These are the INSTANCES
var firstandPike = new CookieStore ('First and Pike', 23, 65, 6.3);
console.log(firstandPike);
var seaTacAirport = new CookieStore ('SeaTac Airport', 3, 24, 1.2);
console.log(seaTacAirport);
var seattleCenter = new CookieStore ('Seattle Center', 11,38,3.7);
console.log(seattleCenter);
var alki = new CookieStore ('Alki',2,16,4.6);
console.log(alki);
var capitolHill = new CookieStore ('Capitol Hill', 20,38,2.3);
console.log(capitolHill);



firstandPike.cookieSales();
seaTacAirport.cookieSales();
seattleCenter.cookieSales();
alki.cookieSales();
capitolHill.cookieSales();

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