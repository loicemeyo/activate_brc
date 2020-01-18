
// const arr = [ 1, 3, 5, 7, 8];
// const int = 8;
// //loop through values inside of array
// //find which sum of them equal int
// const values = [];
// for(let i =0; i<arr.length; i++){
//     for(let j =0; j<arr.length; j++){
//         if(arr[j] !== arr[i]){
//             const sum = arr[i] + arr[j]
//             if(sum === int){
//                 values.push([arr[i], arr[j]])
//             }
//         } 
//     }
// }
// console.log(values)
const arr = [ 1, 3, 5, 7, 8];
const int = 8;
//loop through values inside of array
//find which sum of them equal int
const values = [];
arr.map(x => {
   return arr.filter(val => val !== x).map(val => {
        const sum = x + val
        if(sum === int){
            values.push([val, x])
        }
    });
})

console.log(values)
