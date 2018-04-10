'use strict';

var storeHours = [6 + 'am', 7 + 'am', 8 + 'am', 9 + 'am', 10 + 'am', 11 + 'am', 12 + 'pm', 1 + 'pm', 2 + 'pm', 3 + 'pm', 4 + 'pm', 5 + 'pm', 6 + 'pm', 7 + 'pm', 8 + 'pm'];

function LocationSales (){
   
}

//PIKE LOCATION
var firstandPike = {
  minClientPerHour: 23,
  maxClientPerHour: 65,
  averageCookiesPerCustomer: 6.3,
  dailySales:0,
  cookiesPerHour:[],
  customerPerHour: [],

  randomNumberOfClient: function ()//calculates the random clients
  {
    for (var i = 0; i < storeHours.length; i++){

      this.customerPerHour[i] = Math.floor(Math.random() * (this.maxClientPerHour - this.minClientPerHour)) + this.minClientPerHour;
    }
  },
  cookieSalesPerHour: function () //calculates sales per hour and total sales
  {
    for(var i = 0; i <storeHours.length; i++ ){
      var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
      this.cookiesPerHour[i] = numberSold;
      this.dailySales += numberSold;
    }
  },

  renderSales: function (){
    var ulElem = document.getElementById('salesinpike');
    for (var i = 0; i < storeHours.length; i++){
      //create an element
      var listItemElem = document.createElement( 'li' );
      //Give it a content
      listItemElem.textContent = storeHours[i] + ': ' + Math.round(this.cookiesPerHour[i]) + ' cookies.';
      //Append to the DOM
      ulElem.appendChild(listItemElem);

    }
    listItemElem.textContent = 'Total of cookies: ' + Math.round(this.dailySales);
  }

};

firstandPike.randomNumberOfClient();
firstandPike.cookieSalesPerHour();
firstandPike.renderSales();
console.log(firstandPike.dailySales);


//SeaTac Airport LOCATION
var seaTac = {
  minClientPerHour: 3,
  maxClientPerHour: 24,
  averageCookiesPerCustomer: 1.2,
  dailySales:0,
  cookiesPerHour:[],
  customerPerHour: [],

  randomNumberOfClient: function ()//calculates the random clients
  {
    for (var i = 0; i < storeHours.length; i++){

      this.customerPerHour[i] = Math.floor(Math.random() * (this.maxClientPerHour - this.minClientPerHour)) + this.minClientPerHour;
    }
  },
  cookieSalesPerHour: function () //calculates sales per hour and total sales
  {
    for(var i = 0; i <storeHours.length; i++ ){
      var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
      this.cookiesPerHour[i] = numberSold;
      this.dailySales += numberSold;
    }
  },
  renderSales: function (){
    var ulElem = document.getElementById('seaTacAir');
    for (var i = 0; i < storeHours.length; i++){
      //create an element
      var listItemElem = document.createElement( 'li' );
      //Give it a content
      listItemElem.textContent = storeHours[i] + ': ' + Math.round(this.cookiesPerHour[i]) + ' cookies';
      //Append to the DOM
      ulElem.appendChild(listItemElem);

    }
    listItemElem.textContent = 'Total of cookies: ' + Math.round(this.dailySales) + ' cookies.';
  }

};

seaTac.randomNumberOfClient();
seaTac.cookieSalesPerHour();
seaTac.renderSales();
console.log(seaTac.dailySales);

//Seattle Center LOCATION

var seattleCenter = {
  minClientPerHour: 11,
  maxClientPerHour: 38,
  averageCookiesPerCustomer: 3.7,
  dailySales:0,
  cookiesPerHour:[],
  customerPerHour:[],

  randomNumberOfClient: function ()//calculates the random clients
  {
    for (var i = 0; i < storeHours.length; i++){

      this.customerPerHour[i] = Math.floor(Math.random() * (this.maxClientPerHour - this.minClientPerHour)) + this.minClientPerHour;
    }
  },
  cookieSalesPerHour: function () //calculates sales per hour and total sales
  {
    for(var i = 0; i <storeHours.length; i++ ){
      var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
      this.cookiesPerHour[i] = numberSold;
      this.dailySales += numberSold;
    }
  },
  renderSales: function (){
    var ulElem = document.getElementById('seattleCen');
    for (var i = 0; i < storeHours.length; i++){
      //create an element
      var listItemElem = document.createElement( 'li' );
      //Give it a content
      listItemElem.textContent = storeHours[i] + ': ' + Math.round(this.cookiesPerHour[i]) + ' cookies.';
      //Append to the DOM
      ulElem.appendChild(listItemElem);

    }
    listItemElem.textContent = 'Total of cookies: ' + Math.round(this.dailySales) + ' cookies.';
  }

};

seattleCenter.randomNumberOfClient();
seattleCenter.cookieSalesPerHour();
seattleCenter.renderSales();
console.log(seattleCenter.dailySales);

//Capitol Holl LOCATION

var capitolHill = {

  minClientPerHour: 20,
  maxClientPerHour: 38,
  averageCookiesPerCustomer: 2.3,
  dailySales: 0,
  cookiesPerHour: [],
  customerPerHour: [],

  randomNumberOfClient: function() {
    for(var i = 0; i < storeHours.length; i++){
      this.customerPerHour[i] = Math.floor(Math.random() * (this.maxClientPerHour - this.minClientPerHour)) + this.minClientPerHour;
    }

  },

  cookieSalesPerHour: function (){
    for(var i = 0; i <storeHours.length; i++ ){
      var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
      this.cookiesPerHour[i] = numberSold;
      this.dailySales += numberSold;
    }

  },

  renderSales: function (){
    var ulElem = document.getElementById('capHill');
    for (var i = 0; i < storeHours.length; i++){
      //create an element
      var listItemElem = document.createElement( 'li' );
      //Give it a content
      listItemElem.textContent = storeHours[i] + ': ' + Math.round(this.cookiesPerHour[i]) + ' cookies.';
      //Append to the DOM
      ulElem.appendChild(listItemElem);

    }
    listItemElem.textContent = 'Total of cookies: ' + Math.round(this.dailySales) + ' cookies.';
  }

};

capitolHill.randomNumberOfClient();
capitolHill.cookieSalesPerHour();
capitolHill.renderSales();
console.log(capitolHill.dailySales);


var alki = {

  minClientPerHour: 2,
  maxClientPerHour: 16,
  averageCookiesPerCustomer: 4.6,
  dailySales: 0,
  cookiesPerHour: [],
  customerPerHour: [],

  randomNumberOfClient: function() {
    for(var i = 0; i < storeHours.length; i++){
      this.customerPerHour[i] = Math.floor(Math.random() * (this.maxClientPerHour - this.minClientPerHour)) + this.minClientPerHour;
    }

  },

  cookieSalesPerHour: function (){
    for(var i = 0; i <storeHours.length; i++ ){
      var numberSold = this.customerPerHour[i] * this.averageCookiesPerCustomer;
      this.cookiesPerHour[i] = numberSold;
      this.dailySales += numberSold;
    }

  },

  renderSales: function (){
    var ulElem = document.getElementById('alki');
    for (var i = 0; i < storeHours.length; i++){
      //create an element
      var listItemElem = document.createElement( 'li' );
      //Give it a content
      listItemElem.textContent = storeHours[i] + ': ' + Math.round(this.cookiesPerHour[i]) + ' cookies.';
      //Append to the DOM
      ulElem.appendChild(listItemElem);

    }
    listItemElem.textContent = 'Total of cookies: ' + Math.round(this.dailySales) + ' cookies.';
  }

};

alki.randomNumberOfClient();
alki.cookieSalesPerHour();
alki.renderSales();
console.log(alki.dailySales);


