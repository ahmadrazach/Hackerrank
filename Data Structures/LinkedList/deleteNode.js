/*
 * Complete the 'deleteNode' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER position
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

function deleteNode(llist, position) {
    // Write your code here

    if(position===0) //chekin gf the position is 
    {
        return llist.next; //giving ref of head of the next in ans
    }

    //
    llist.next=deleteNode(llist.next,position-1);
    return llist;

}