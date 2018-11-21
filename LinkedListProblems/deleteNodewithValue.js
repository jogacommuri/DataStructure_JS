// Delete a node from the middle of a linked list

class LinkedList{
    constructor(value){
        this._head={value, next:null};
        this._tail=this._head;
        this._middleNode={};
        this._deleteNode={};
    }
    /*
    * Inserts a new value to the end of the linked list
    * @param {*} value - the value to insert
    */
    insert(value) {
       const node = {value, next:null};
       this._tail.next = node;
       this._tail = node;
    }
    /*
    * Deletes a node from the middle of the linked list
    * @param {Node} head - the head node of a linkedlist
    * @return {Node} - the deleted node
    */
    deleteMiddleNode(){
        // Initialize slow and fast pointers to reach 
        // middle of linked list 
        if(this._head == null){
            return null
        }
        if(this._head.next ==null){
            delete this._head;
            return null;
        }

        let slowPtr = this._head;
        let fastPtr = this._head;
        // Find the middle and previous of middle. 
        let prev;// To store previous of slow_ptr 

        while(fastPtr != null && fastPtr.next !=null){
            let fastPtrnxt = fastPtr.next;
            fastPtr = fastPtrnxt.next;
            prev = slowPtr;
            slowPtr = slowPtr.next;
        }
        this._middleNode = prev.next;
        prev.next = slowPtr.next;

       
        return this._middleNode;
    }
    // Delete a node from a linked list with only a variable pointing to that node.

    /*
    * Deletes a node from a linked list
    * @param {Node} node - the node to be deleted
    */
    deleteNodeNoPointer(node){
        let temp = this._head;
        while(temp.value != node){
            temp = temp.next;
        }
        this._deleteNode = temp;
        temp = temp.next;

        return this._deleteNode;
    }
    /*
    * Removes the value at the end of the linked list
    * @return {*} - the removed value
    */
    removeTail() {
        let currentNode = this._head;
        while(currentNode.next !== this._tail){
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
        let currentNode =  this._head;

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


    const myLList = new LinkedList(1);
    myLList.insert(2);
    //console.log(myLList);
    myLList.insert(3);
    myLList.insert(4);
    console.log(myLList);
    myLList.deleteMiddleNode(1)
    myLList.deleteNodeNoPointer(1)
    //myLList.removeTail();


    console.log(myLList);
    //console.log(myLList.contains(3));
    //  console.log(myLList.isHead(2));
    //  console.log(myLList.isTail(2));