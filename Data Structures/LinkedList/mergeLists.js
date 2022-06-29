const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {

    /* a dummy first node to
       hang the result on */
       let dummyNode = new Node(0);
       
       /* tail points to the
       last result node */
       let tail = dummyNode;
       while(true)
       {
              
           /* if either list runs out,
           use the other list */
           if(headA == null)
           {
               tail.next = headB;
               break;
           }
           if(headB == null)
           {
               tail.next = headA;
               break;
           }
              
           /* Compare the data of the two
           lists whichever lists' data is
           smaller, append it into tail and
           advance the head to the next Node
           */
           if(headA.data <= headB.data)
           {
               tail.next = headA;
               headA = headA.next;
           }
           else
           {
               tail.next = headB;
               headB = headB.next;
           }
              
           /* Advance the tail */
           tail = tail.next;
       }
       return dummyNode.next;
}
