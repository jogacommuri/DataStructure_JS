/**
 * Stack class
 * Time: push O(1), pop O(1), peek O(1), min O(1)
 * @constructor
 */
class Stack {
    constructor() {
      this._storage = [];
    }
    /*
    * Adds a new value at the end of the stack
    * @param {*} value - the value to push
    */
    push(value) {
        let min = this.min();
        let max = this.max();
      this._storage.push({
        value: value,
        min: Math.min(min !== undefined ? min : Number.POSITIVE_INFINITY, value),
        max: Math.max(max !== undefined ? max : 0, value)
      });
    }
    /*
    * Removes the value at the end of the stack and returns it
    * @return {*} the last and newest value in the stack
    */
    pop() {
      if (!this.isEmpty()) {
        let item = this._storage.pop();
        return item.value;
      }
    }
    /*
    * Returns the value at the end of the stack without removing it
    * @return {*} the last and newest value in the stack
    */
    peek() {
      if (!this.isEmpty()) {
        let item = this._storage[this._storage.length - 1];
        return item.value;
      }
    }
    /*
    * Returns the min in the stack without removing it
    * @return {*} the minimum value in the stack
    */
    min() {
      if (!this.isEmpty()) {
        let item = this._storage[this._storage.length - 1];
        return item.min;
      }
    }
    max(){
        if(!this.isEmpty()){
            let item = this._storage[this._storage.length -1];
            return item.max;
        }
    }
    /*
    * Returns if the stack is empty or not
    * @return {boolean} - wheter or not the stack is empty
    */
    isEmpty() {
      return this._storage.length === 0;
    }
  }


  const myStack = new Stack();
  myStack.push(8);
  myStack.push(2);
  myStack.push(7);
  myStack.push(9);
  
  console.log(myStack);
  console.log(myStack.min())