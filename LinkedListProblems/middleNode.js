const LList = require("../LinkedList.js");


const myLList = new LList(1);

    myLList.insert(2);
    myLList.insert(3);
    myLList.insert(4);
    console.log(myLList);
    //myLList.deleteMiddleNode(1)
    //myLList.removeTail();
    myLList.middleNode = function(head){
        if(!head || head.next){
            return null;
        }
        let fastPtr = head;
        let slowPtr = head;
        while(fastPtr.next !=null && fastPtr !=null){
            fastPtr= fastPtr.next.next;
            slowPtr = slowPtr.next
        }
        return slowPtr;
    }
    console.log(myLList.middleNode(1));

    //console.log(myLList);
    // console.log(myLList.contains(3));
    // console.log(myLList.isHead(2));
    // console.log(myLList.isTail(2));