/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let m = nums.length;
    let n = nums[0].length
    if(m*n !== r * c) return nums;

    const res =[];
    /* O(n^2)
    for(let i =0, row =0; row < nums.length; row++){
        for(let col =0; col < nums[0].length; col++, i++){
            let rr = Math.floor(i / c);
            if (!res[rr]) res.push([]);
            res[rr].push(nums[row][col]);      
        }
    }*/
    //O(n)

    for(let i = 0;i< m * n;i++){
        let row =  Math.floor(i / c);
        if(!res[row])  res.push([ ]);
        res[row].push(nums[Math.floor(i / n)][i % n]);
    }

    return res;
};

var inputArr1 = [[1,2],[3,4]];
var inputRow1 = 1;
var inputCol1 = 4;
console.log(matrixReshape(inputArr1,inputRow1,inputCol1));
