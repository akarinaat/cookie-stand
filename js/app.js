'use strict';

var storeHours = [6 + 'am', 7 + 'am', 8 + 'am', 9 + 'am', 10 + 'am', 11 + 'am', 12 + 'pm', 1 + 'pm', 2 + 'pm', 3 + 'pm', 4 + 'pm', 5 + 'pm', 6 + 'pm', 7 + 'pm', 8 + 'pm'];


var firstandPike = {
  minClientPerHour: 23,
  maxClientPerHour: 65,
  averageCookiesPerCustomer: 6.3,
  dailySales:0,
  cookiesPerHour:[],
  customerPerHour: [],

  randomNumberOfClient: function ()//calculates
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
  }

};


firstandPike();
console.log(firstandPike.dailySales);


