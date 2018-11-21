var M = [[1, 2, 3], 
         [4, 5, 6], 
         [7, 8, 9]];

function spiralMatrix(matrix){
    var list = [];

    while(matrix.length>1){

        //Right
        list= list.concat(matrix.splice(0,1)[0]);
        console.log(list);
    
        //Down
        for(var idx in matrix){
          list.push(matrix[idx].splice(-1)[0]);
        }
        console.log(list);
    
        //Left
        list= list.concat(matrix.splice(-1,1)[0].reverse());
        console.log(list);
        //Up
        for(var idx=matrix.length-1;idx>=0;idx--){
          list.push(matrix[idx].splice(0,1)[0]);
        }
        console.log(list);
      }
    if(matrix.length > 0){
        list.push(matrix.pop()[0]);
    }
    return list;
}
console.log(spiralMatrix(M));