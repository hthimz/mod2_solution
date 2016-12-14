(function(){

'use strict';


angular.module('Assignment2', [])
.controller('Tobuy',Tobuy)
 .controller('Bought',Bought)
 .service('CustomService',CustomService)
;




 Tobuy.$inject=['CustomService'];
function Tobuy( CustomService){
var tb = this;
tb.items= CustomService.items1();
tb.bought = function (itemIndex) {
  CustomService.bought(itemIndex);
}

}


Bought.$inject=['CustomService'];
function Bought(CustomService) {
var bt = this;
bt.items= CustomService.boughtitems();

}

function CustomService(){

var service = this ;

  var List2 = [];

  var List1 = [
    {
      name: "Dosa", quantity: "2"
    },
    {
      name: "Laddoo", quantity: "200"
    },
    {
      name: "Samosa", quantity: "300"
    },
    {
      name: "Jalebi",quantity: "5"
    },
    {
      name: "Vada",quantity: "13"
    }

  ];

service.items1 = function() {
  return List1;
};

// service.items2= function() {
//   return List2 ;
// };
service.boughtitems= function(){
  return List2;
}
service.bought = function(itemIndex){

var temp = List1[itemIndex];
List2.push(temp);

  List1.splice(itemIndex, 1);
};

 }

})();
