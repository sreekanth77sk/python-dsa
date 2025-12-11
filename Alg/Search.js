// Search Algorithms

// 1- Linear search

// function LinearSearch(arr, target){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] == target){
//             return i
//         }
//     }
//     return -1
// }

// console.log(LinearSearch([-5, 2, 10, 4, 6], 10));
// console.log(LinearSearch([-5, 2, 10, 4, 6], 6));
// console.log(LinearSearch([-5, 2, 10, 4, 6], 20));

// function BinarySearch(arr, target){
//     let leftIndex = 0
//     let rightIndex = arr.length - 1

//     while(leftIndex <= rightIndex){
//         // let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//         let middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

//         if(arr[middleIndex] == target){
//             return middleIndex
//         }
//         if( target < arr[middleIndex]){
//             rightIndex = middleIndex - 1
//         }
//         else{
//             leftIndex = middleIndex + 1
//         }
//     }

//     return -1
// }


// console.log(BinarySearch([-5, 2, 4, 6, 10], -5));
// console.log(BinarySearch([-5, 2, 4, 6, 10], 4));
// console.log(BinarySearch([-5, 2, 4, 6, 10], 20));

// Recursive Binary Search

function RecursiveBinarySearch(arr, target){
    return Search(arr, target, 0, arr.length - 1)
}

function Search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if(target === arr[middleIndex]){
        return middleIndex
    }
    if(target < arr[middleIndex]){
        return Search(arr, target, leftIndex, middleIndex-1)
    }else{
        return Search(arr, target, middleIndex + 1, rightIndex)
    }
}

console.log(RecursiveBinarySearch([-5, 2, 4, 6, 10], -5));
console.log(RecursiveBinarySearch([-5, 2, 4, 6, 10], 4));
console.log(RecursiveBinarySearch([-5, 2, 4, 6, 10], 20));