
/* Create a data structure KStacks that represents a set of k stacks. It should only use one array. The following methods must be supported by KStacks.

push(val, stackNumber) –> pushes x to stack number ‘sn’ where sn is from 0 to k-1
pop(stackNumber) –> pops an element from stack number ‘sn’ where sn is from 0 to k-1
*/

class Kstacks{
    constructor(k){
        this._storage ={};
        this._lengths = new Array(k).fill(0);
    }


    _getLength(stackId){
       return this._lengths[stackId-1];
    }

    push(val, stackId){
        let len = this._getLength(stackId);
        
        let idx = (len)*3 + stackId -1;//find idx of element
        this._storage[idx] = val; // add element to stack
        ++this._lengths[stackId-1];// increment stack length

    }

    pop(stackId){
        let len = this._getLength(stackId), val;
        if(len>0){
            let idx = (len -1)*3 + stackId -1; //find idx of element
            val = this._storage[idx];
            delete this._storage[idx]; // remove element from stack
            --this._lengths[stackId -1]; // decrement stack length
        }
        return val;
    }

    peek(stackId){
        let len = this._getLength(stackId), val;
        if(len>0){
            let idx = (len -1)*3 + stackId -1;
            val = this._storage[idx];
        }
        return val;
    }

    isEmpty(stackId){
        return this._getLength(stackId) === 0;
    }
}

const myKstacks = new Kstacks(5);
myKstacks.push(3,1);
myKstacks.push(4,1);
myKstacks.push(1,2);
myKstacks.push(6,3);
myKstacks.peek(1);

console.log(myKstacks);
console.log(myKstacks.peek(1));
console.log(myKstacks.isEmpty(1));
//console.log(myKstacks._getLength(3));