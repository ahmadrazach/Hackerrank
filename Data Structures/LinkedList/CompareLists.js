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

// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {

    
    if (llist1==null && llist2==null) //checking if both are null
    {
        return 1;
    }
    else if(llist1==null || llist2==null) // checking if one of them are null
    {
        return 0;
    }

    if(llist1.data==llist2.data) //if not null but both have same data
    {
        return CompareLists(llist1.next,llist2.next) //function to execute again and again till the end or different ans
    }
    else{
        return 0; //if both data are not the same
    }



}