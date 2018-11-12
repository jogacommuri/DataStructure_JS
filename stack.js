/** Class representing a Stack. */

class Stack {

    constructor() {
      this._storage = {};
      this._length = 0;
    }
    /*
    * Adds a new value at the end of the stack
    * @param {*} value the value to push
    */
    push(value) {
        //TODO : check the arguments and typechecking
        this._storage[this._length] = value;
        this._length++;
    }
  
    /*
    * Removes the value at the end of the stack and returns it
    * @return {*} the last and newest value in the stack
    */
    pop() {
        if(this._length > 0){
            const lastVal = this._storage[this._length-1];
            delete this._storage[this._length -1]; //OR this._storage[this._length -1] = undefined
            this._length--;
            return lastVal;
        }
    }
    /*
    * Returns the value at the end of the stack without removing it
    * @return {*} the last and newest value in the stack
    */
    peek() {
        if(this._length){
            return this._storage[this._length-1];
        }
    }
  }
  
  const myStack = new Stack();
  myStack.push('Zero');
  myStack.push('One');
  myStack.push('Two');
  myStack.push('Three');
  myStack.pop();
  myStack.peek();
  console.log(myStack)

  //{_storage:{0:'Zero', 1:'One'}};

  