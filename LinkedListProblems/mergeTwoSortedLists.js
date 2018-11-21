function Node(data) {
    this.data = data;
    this.next = null;
  } 
  
  function merge(l1, l2) {
    
    // create new linked list pointer
    var l3 = new Node(null);
    var prev = l3;
    
    // while both linked lists are not empty
    while (l1 !== null && l2 !== null) {
      if (l1.data <= l2.data) { 
        prev.next = l1;
        l1 = l1.next;
      } else {
        prev.next = l2;
        l2 = l2.next;
      }
      prev = prev.next;
    }
    
    // once we reach end of a linked list, append the other 
    // list because we know it is already sorted
    if (l1 === null) { prev.next = l2; }
    if (l2 === null) { prev.next = l1; }
    
    // return the sorted linked list
    return l3.next;
    
  }
  
  // create first linked list: 1 -> 3 -> 10
  var n3 = new Node(10, null);
  var n2 = new Node(3, n3);
  var n1 = new Node(1, n2);
  var l1 = n1; 

  
  // create second linked list: 5 -> 6 -> 9
  var n6 = new Node(9, null);
  var n5 = new Node(6, n6);
  var n4 = new Node(5, n5);
  var l2 = n4; 
  
  console.log(merge(l1, l2)); 