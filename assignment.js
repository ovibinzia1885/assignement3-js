// function kilometerToMeter(kilometer){
//     meter=kilometer/1000;
//     return meter;
// }

// var result= kilometerToMeter(7);
// console.log(result);

// function budgetCalculator(x,y,z){
//   var clock=50;
//   var phone=100;
//   var laptop=500;
//   var total=clock*x+phone*y+laptop*z;
//   return total;

// }

var result =budgetCalculator(4,5,6);
console.log(result);

function megaFriend(array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element> max) {
      max = element;
    }
  }
}

// var array = megaFriend(["ovi", "kobi", "cobixyz"]);

// console.log(max);


// function hotelCost(day) {
//     var totalcost = 0;
//     if (day <= 10) {
//         totalcost = day * 100;
//     }
//     else if (day <= 20) {
//         var fisrtpart = 10 * 100;
//         var remaining = day - 10;
//         var secondpart = remaining * 80;
//         totalcost = fisrtpart + secondpart;


//     }
//     else {
//         var firstpart = 10 * 100;
//         var secondpart = 10 * 80;
//         var remaining = day - 20;
//         var thirdpart = remaining * 50;
//         totalcost = firstpart + secondpart + thirdpart;

//     }
//     return totalcost;
// }

// var count = hotelCost(23);
// console.log(count);