/*The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.*/
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    var list = new Array(A[0].length);
 
    for(let i = 0; i< list.length;i++){
        list[i] = new Array(A.length);
        for(let j in A){
            list[i][j] = A[j][i];
        }
    }
    
    return list;
};
//another way
var transpose1 = function(A) {
    var list = [];
 
    for(let i = 0; i< A[0].length;i++){
        var temp = []
        for(let j in A){
            temp.push(A[j][i]);
        }
        list.push(temp)
    }
    
    return list;
};
//using map
var transpose2 = function(A) {
    return A[0].map(
            (val,idx) => A.map(
                            row=>row[idx])
            );
};


var arrInput = [[1,2,3],[4,5,6],[7,8,9]];
//var arrInput = [[1,2,3],[4,5,6]]
console.log(transpose(arrInput));
console.log(transpose1(arrInput));
console.log(transpose2(arrInput));