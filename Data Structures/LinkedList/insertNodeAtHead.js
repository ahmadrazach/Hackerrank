/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function insertNodeAtHead(head, data) {

    //1- making a new Node with SingleLinkedListNode
    let newNode=new SinglyLinkedListNode(data,head)
    
    //2- if their's no head , make the newNode head and return it
    if(!head){
        head=newNode;
        return head
    }
    else{ //3- setting the nest of new Node as head 
        newNode.next=head;
        head=newNode; //4- move head to newNode
    }
    return head
}
