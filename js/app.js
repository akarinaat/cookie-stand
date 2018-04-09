'use strict';

var storeHours = [6 + 'am', 7 + 'am', 8 + 'am', 9 + 'am', 10 + 'am', 11 + 'am', 12 + 'pm', 1 + 'pm', 2 + 'pm', 3 + 'pm', 4 + 'pm', 5 + 'pm', 6 + 'pm', 7 + 'pm', 8 + 'pm'];



var firstandPike = {
  minClientPerHour: 23,
  maxClientPerHour: 65,
  averageCookiesPerCustomer: 6.3,
  dailySales:0,
  cookiesPerHour:[],
  customerPerHour: [],

  randomNumberOfClient: function (){
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

firstandPike.cookieSalesPerHour();
console.log(firstandPike.dailySales);

var months = ['May', 'June', 'July', 'August', 'September'];

var twoThousandSeventeen = {
  miles: [16, 43, 653, 19, 2],
  renderMiles: function() {
    // access the parent element from the DOM
    var ulElement = document.getElementById('seventeen');
  
    for(var i = 0; i < months.length; i++) {
      // 1. create element
      var listItemElement = document.createElement('li');
  
      // 2. give it content
      listItemElement.textContent = months[i] + ': ' + this.miles[i];
  
      // 3. append it to the DOM
      // parentElement.appendChild(childElement);
      ulElement.appendChild(listItemElement);
    }
  }
};

