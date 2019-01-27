// Write your solution in this file!

var customerName = "bob";

// function upperCaseCustomerName(name){
//   return name.toUpperCase();
// }
// customerName = upperCaseCustomerName(customerName);

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

var bestCustomer;
function setBestCustomer(){
  bestCustomer = "not bob";
}

function overwriteBestCustomer(){
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Tara";
function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "Simon";
}
