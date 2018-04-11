'use strict';

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

function createTable () {
  var rowElement = document.getElementById('thetable');

};
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