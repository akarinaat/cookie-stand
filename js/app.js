'use strict';

var storeHours = [6 + 'am', 7 + 'am', 8 + 'am', 9 + 'am', 10 + 'am', 11 + 'am', 12 + 'pm', 1 + 'pm', 2 + 'pm', 3 + 'pm', 4 + 'pm', 5 + 'pm', 6 + 'pm', 7 + 'pm', 8 + 'pm'];


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
    var ulElem = document.getElementById('sales');
    for (var i = 0; i < storeHours.length; i++){
      //create an element
      var listItemElem = document.createElement( 'li' );
      //Give it a content
      listItemElem.textContent = storeHours[i] + ': ' + Math.round(this.cookiesPerHour[i]);
      //Append to the DOM
      ulElem.appendChild(listItemElem);

    }
  }

};

firstandPike.randomNumberOfClient();
firstandPike.cookieSalesPerHour();
firstandPike.renderSales();
console.log(firstandPike.dailySales);


