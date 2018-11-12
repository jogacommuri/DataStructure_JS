/** Class representing a Hash Table */

class HashTable {
    constructor(val) {
      this._storage = [];
      this._tablesize = val;
      this._inputSize = 0;// if 50% or more tableSize then double the size and re run the hash function for every input
    }
    /*
    * Inserts a new key-value pair
    * @param {string} key - the key associated with the value
    * @param {*} value - the value to insert
    */
    insert(key,value) {
        const index = this._hash(key, this._tablesize);
        if(!this._storage[index]){this._storage[index]=[];} 
        //TODO: loop through the array and fing if the key was already inserted
        this._storage[index].push([key, value]);
    }
    /*
    * Deletes a key-value pair
    * @param {string} key - the key associated with the value
    * @return {*} value - the deleted value
    */
    remove() {
        
    }
    /*
    * Returns the value associated with a key
    * @param {string} key - the key to search for
    * @return {*} - the value associated with the key
    */
    retrieve(key) {
        const index = this._hash(key, this._tablesize);
        const arrayAtIndex = this._storage[index];
        if(arrayAtIndex){
            for(let i =0;i<arrayAtIndex.length;i++){
                const keyValueArray = arrayAtIndex[i];
                if(keyValueArray[0]=== key){
                    return keyValueArray[1];
                }
            }
        }
    }  
    /*
    * Hashes string value into an integer that can be mapped to an array index
    * @param {string} str - the string to be hashed
    * @param {number} n - the size of the storage array
    * @return {number} - an integer between 0 and n
    */
    _hash(str, n) {
      let sum = 0;
      for (let i = 0; i < str.length; i++)
          sum += str.charCodeAt(i) * 3
  
      return sum % n;
    }
  }

  const myHT = new HashTable(25);
  myHT.insert('a',1);
  myHT.insert('b',1);
  console.log(myHT);

  