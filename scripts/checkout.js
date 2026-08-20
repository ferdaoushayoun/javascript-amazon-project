import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js'
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage() {
  try {
    // throw 'error1';
    await loadProductsFetch();

  const value = await new Promise((resolve, reject) => {
    // throw 'error2';
    loadCart(() => {
      // reject('error3');
      resolve('value3');
    });
  });
  } catch (error){
    console.log('Unexpected error. Please try again later.')
  }
  
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

// Promise.all([ // better Promise feature  
// // similar to Jasmine done function
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   })
// ]).then((values) => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });

//helps keep the code more flat
// new Promise((resolve) => { // similar to Jasmine done function
//   loadProducts(() => {
//     resolve('value1');
//   });

// }).then((value) => {
//   console.log(value);
//   return new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   });

// }).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// with the callback there are lot of nested code
// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
