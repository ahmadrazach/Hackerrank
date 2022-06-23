// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */


function printLinkedList(head) {

    if (head){
    console.log(head.data);
    printLinkedList(head.next);
    }
}