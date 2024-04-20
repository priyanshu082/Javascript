 function print() {
   for (let i = 0; i <= 5; i++){
     return function closure(val) {
       setTimeout(() => {
         console.log(val)
       }, i * 10000);
     }
    
    }
 }
var z=print()
z(3)
console.log(z)

 
// function printInTermOfVar() {
//     for (let i = 1; i <= 5; i++) {
//       function closure(val) {
//         setTimeout(() => {
//           console.log(val);
//         }, val * 1000);
//       }
//       closure(i);
//     }
//   }
  
//   printInTermOfVar();
