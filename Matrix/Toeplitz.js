// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

// Now given an M x N matrix, return True if and only if the matrix is Toeplitz.

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for(let i = 0;i<matrix.length-1;i++){
        for(let j =0; j<matrix[i].length-1;j++){
            if(matrix[i][j] != matrix[i+1][j+1]){
                return false;
            }
        }
    }
    return true;
};

//O(n)
var isToeplitzMatrix1 = function(matrix) {
    for (var i = matrix.length - 1; i>0; i--) {
        console.log("1--> "+matrix[i].slice(1, matrix[i].length));
        console.log("2-->"+matrix[i-1].slice(0, matrix[i].length - 1));
        if(matrix[i].slice(1, matrix[i].length).join('') !== matrix[i-1].slice(0, matrix[i].length - 1).join('')) {
            return false;
        }
    }
    return true;
};  

var inputMatrix1 = [
    [1,2,3,4],
    [5,1,2,3],
    [9,5,1,2]
  ];
  var inputMatrix2 = [
    [1,2],
    [2,2]
  ];
  var inputMatrix3 = [[8,4]]
  console.log(isToeplitzMatrix(inputMatrix1));
  console.log(isToeplitzMatrix(inputMatrix2));
  console.log(isToeplitzMatrix(inputMatrix3));
  console.log(isToeplitzMatrix1(inputMatrix1));
  console.log(isToeplitzMatrix1(inputMatrix2));
  console.log(isToeplitzMatrix1(inputMatrix3));