// We are given a stack data structure with push and pop operations, the task is to implement a queue using instances of stack data structure and operations on them.
// Remember the interface of a stack & queue: https://www.geeksforgeeks.org/wp-content/uploads/Stack-Queue.png

/**
 * Creates a queue implemented with two stacks.
 * @constructor
 */
class TwoStackQueue {
    constructor(){
        this._inbox =[];
        this._outbox =[];
    }
    /**
     * Add a value to the queue.
     * @param {*} value - The value to enqueue.
     */
    enqueue(value){
        this._inbox.push(value)
    }   
    /**
     * Removes a value from the queue and returns it.
     * @return {*} The removed value.
     */
    dequeue() {
        if(!this._outbox.length){
            if(!this._inbox.length){
                return null;
            }
            while(this._inbox.length){
                this._outbox.push(this._inbox.pop());
            }
        }
        return this._outbox.pop();
    }
    peek(){
        if(!this._outbox.length){
            if(!this._inbox.length){
                return null;
            }
            while(this._inbox.length){
                this._outbox.push(this._inbox.pop());
            }
        }
        return this._outbox[this._outbox.length-1];
    }
}



const myQueue = new TwoStackQueue();
  myQueue.enqueue(0);
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  console.log(myQueue);
   //myQueue.dequeue();
//   myQueue.enqueue('Four');

//   myQueue.dequeue();
//   myQueue.enqueue('Five');
//   myQueue.dequeue();
    console.log(myQueue.peek());
  console.log(myQueue);