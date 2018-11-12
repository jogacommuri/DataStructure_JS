/** Class representing a Queue. 
 * @constructor
*/

class Queue {

    constructor() {
      this._storage = {};
      this._length = 0;
      this._headIndex =0;
    }
    /*
    * Enqueues a new value at the end of the queue
    * @param {*} value the value to enqueue
    */
    enqueue(value) {
        //TODO: typechecking , input validation
        const lastIndex = this._length + this._headIndex;
        this._storage[lastIndex] = value;
        this._length++;
    }
  
    /*
    * Dequeues the value from the beginning of the queue and returns it
    * @return {*} the first and oldest value in the queue
    */
    dequeue() {
        if(this._length){
            const frstVal = this._storage[this._headIndex];
            delete this._storage[this._headIndex];
            this._headIndex++;
            this._length--;
            return frstVal;
        }   
    }
    /*
    * Returns the value at the beginning of the queue without removing it from the queue
    * @return {*} the first and oldest value in the queue
    */
    peek() {
        if(this._length){
            return this._storage[this._headIndex];
        }
    }
  }

  const myQueue = new Queue();
  myQueue.enqueue('Zero');
  myQueue.enqueue('One');
  myQueue.enqueue('Two');
  myQueue.enqueue('Three');

  myQueue.dequeue();
  myQueue.enqueue('Four');

  myQueue.dequeue();
  myQueue.enqueue('Five');
  myQueue.dequeue();
  myQueue.peek();
  console.log(myQueue);