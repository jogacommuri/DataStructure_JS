/** Class representing a Linked List */

module.exports = class LinkedList {

    constructor(value) {
      this._head = {value, next:null};
      this._tail = this._head;
    }
    /*
    * Inserts a new value to the end of the linked list
    * @param {*} value - the value to insert
    */
    insert(value) {
        const node ={value, next: null};

        this._tail.next = node;
        this._tail = node; 
    }
    /*
    * Deletes a node
    * @param {*} node - the node to remove
    * @return {*} value - the deleted node's value
    */
    remove() {
        
    }
    /*
    * Removes the value at the end of the linked list
    * @return {*} - the removed value
    */
    removeTail() {
        let currentNode = this._head;
        while(currentNode.next != this._tail){
            currentNode = currentNode.next;
        }
        currentNode.next = null;
        this._tail = currentNode;
    }
    /*
    * Searches the linked list and returns true if it contains the value passed
    * @param {*} value - the value to search for
    * @return {boolean} - true if value is found, otherwise false
    */
    contains(value) {
        let currentNode = this._head;
        while(currentNode.value != value){
            currentNode = currentNode.next;
        }
        return currentNode.value === value;
    }  
    /*
    * Checks if a node is the head of the linked list 
    * @param {{prev:Object|null, next:Object|null}} node - the node to check
    * @return {boolean} - true if node is the head, otherwise false
    */
    isHead(node) {
        return node === this._head;
    }
    /*
    * Checks if a node is the tail of the linked list 
    * @param {{prev:Object|null, next:Object|null}} node - the node to check
    * @return {boolean} - true if node is the tail, otherwise false
    */
    isTail(node) {
        return node === this._tail;
    }
  }


//   const myLList = new LinkedList(1);
//   myLList.insert(2);
//   //console.log(myLList);
//   myLList.insert(3);
//   console.log(myLList);
//   myLList.removeTail();
//   console.log(myLList);
//   console.log(myLList.contains(2));
//   console.log(myLList.isHead(2));
//   console.log(myLList.isTail(2));