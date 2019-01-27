// Write your solution in this file!

var customerName = 'bob';

// upperCaseCustomerName function is able to reference the variable and
// manipulate its value since both are in the same scope
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// #declare global variable in global scope

var bestCustomer;
function setBestCustomer() {
  bestCustomer = 'not bob';
}
bestCustomer;

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Simon";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "literally any other person";
}
