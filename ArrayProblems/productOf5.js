function findTheMaxProduct(arr,k){
    let maxProduct = 1;
    var newArr = arr.sort((a,b) => b-a);
    
    console.log(newArr);
    for (let i=0; i < k; i++){
        maxProduct *= arr[i]; 
    }
   // console.log(maxProduct);

    let prev_product = maxProduct;

    for(let i =1; i<=arr.length - k;i++){
        let curr_product = (prev_product / arr[i]) * arr[i+k -1];
        maxProduct = Math.max(maxProduct, curr_product);
        prev_product = curr_product; 
    }
    return maxProduct;
}


var arr =  [5, 9, 8, 4, -3,-1,-6,-7,]; 
// var xarr = [];
// xarr.push(arr.splice(0,5)[0])
// console.log(xarr);

console.log(findTheMaxProduct(arr,5));