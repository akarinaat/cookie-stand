'use strict';

var storeHours = [6 + 'am', 7 + 'am', 8 + 'am', 9 + 'am', 10 + 'am', 11 + 'am', 12 + 'pm', 1 + 'pm', 2 + 'pm', 3 + 'pm', 4 + 'pm', 5 + 'pm', 6 + 'pm', 7 + 'pm', 8 + 'pm'];

var shopArr = [];
// var firstandPike = {
//   minClientPerHour: 23,
//   maxClientPerHour: 65,
//   averageCookiesPerCustomer: 6.3,
//   dailySales:0,
//   cookiesPerHour:[],
//   customerPerHour: []
// };


function CookieStore (storeLocation, minClientPerHour, maxClientPerHour,averageCookiesPerCustomer){

  this.minClient = minClientPerHour;
  this.maxClient = maxClientPerHour;
  this.averageCookies = averageCookiesPerCustomer;
  // this.TotalcookieSales = ;
  // this.cookiesPerHour = ;
  this.store = storeLocation;
  this.cookieSales = 0;
  shopArr.push(this);
}
CookieStore.prototype.randomNumberOfClient = function(){
  for (var i = 0; i < storeHours.length; i++){
    this.customerPerHour[i] = Math.floor(Math.random() * (this.maxClientPerHour - this.minClientPerHour)) + this.minClientPerHour;       
  }

  CookieStore.prototype.cookieSales = function () {
    for(var i = 0; i <storeHours.length; i++ ){
      var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
      this.cookiesPerHour[i] = numberSold;
      this.dailySales += numberSold;


      CookieStore.prototype.sales = function () {
        return 'Hi Pat, today\'s sales at' + this.store + ' were: ' + this.cookieSales + '.';
      };


    };


  }
};

var firstandPike = new CookieStore ('First and Pike', 23, 65,6.3);
console.log(firstandPike);
var seaTacAirport = new CookieStore ('SeaTac Airport', 3, 24, 1.2);
console.log(seaTacAirport);
var seattleCenter = new CookieStore ('Seattle Center', 11,38,3.7);
console.log(seattleCenter);
var alki = new CookieStore ('Alki',2,16,4.6);
console.log(alki);
var capitolHill = new CookieStore ('Capitol Hill', 20,38,2.3);
console.log(capitolHill);


//console.log(firstandPike.sales());
firstandPike.sales();
seaTacAirport.sales();
seattleCenter.sales();
alki.sales();
capitolHill.sales();








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