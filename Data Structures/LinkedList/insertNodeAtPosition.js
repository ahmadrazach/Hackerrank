/*
 * Complete the 'insertNodeAtPosition' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER data
 *  3. INTEGER position
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

function insertNodeAtPosition(llist, data, position) {
    // Write your code here
    let node = new SinglyLinkedListNode(data);
    if(position==0){
            node.next = llist.next;
            llist=node;
        }
    else{
          let aux = new SinglyLinkedListNode(0);
            aux.next = llist;
            for(let i=0;i<position;i++)aux=aux.next;
            node.next = aux.next;
            aux.next=node;
    }
return llist;
    

}