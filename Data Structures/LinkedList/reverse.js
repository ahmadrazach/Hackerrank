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

/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function reverse(llist) {
    // Write your code here

    /* We have two conditions in this if statement.
    This first condition immediately returns null
    when the list is null. The second condition returns
    the final node in the list. That final node is sent
    into the "remaining" Node below.
    -----------------------------------------------------*/

    if(!llist|| !llist.next)
    {
        return llist;
    }

    /* When the recursion creates the stack for A -> B -> C
    (RevA(RevB(RevC()))) it will stop at the last node and
    the recursion will end, beginning the unraveling of the
    nested functions from the inside, out. 
    -----------------------------------------------------*/ 
    let remaining=reverse(llist.next);
    
    /* Now we have the "remaining" node returned and accessible
    to the node prior. This remaining node will be returned
    by each function as the recursive stack unravels.

    Assigning head to head.next.next where A is the head
    and B is after A, (A -> B), would set B's pointer to A,
    reversing their direction to be A <- B.
    -----------------------------------------------------*/

    llist.next.next=llist;

    /* Now that those two elements are reversed, we need to set
    the pointer of the new tail-node to null.
    -----------------------------------------------------*/
    llist.next=null;
    
    /* Now we return remaining so that remaining is always
    reassigned to itself and is eventually returned by the
    first function call.
    -----------------------------------------------------*/
    return remaining;
}