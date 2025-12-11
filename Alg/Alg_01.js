// const n = 3

// function fib(n){
//     let res = [0,1]
//     for(let i = 2; i < n; i++){
//         res = [...res, res[i-2] + res[i-1]]
//     }
//     console.log(res);
// }


// fib(2)
// fib(7)

// function fact(n){
//     console.log(n);
    
//     if(n < 2){
//         return 1
//     }
//     return fact(n-1) * n
// }

// console.log(fact(0));


// function prime(n){
//     let res = false
//     if(n <=2){
//         return false
//     }
//     for(let i = 2; i < Math.sqrt(n); i++ ){
//         if(n%i == 0){
//            res = true
//         }
//     }
//     return res
// }

// console.log(prime(99));
// console.log(prime(1));
// console.log(prime(2));


// Power of two

// function Power(n){
//     if(n < 1){
//         return false
//     }
//     while(n > 1){
//         if(n % 2 !== 0){
//             return false
//         }
//         n = n/2
//     }
//     return true
// }

// console.log(Power(2));
// console.log(Power(4));
// console.log(Power(8));
// console.log(Power(16));

