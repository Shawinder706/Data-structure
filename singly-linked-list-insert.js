/*

    singly linked list insert operation

                         Node                   
    * ******* *         * ******* *           * ******* *         * ********* *    
    * 11 * 75 *         * 12 * 45 *           * 14 * 25 *         * 19 * null *  
    * ******* *         * ******* *           * ******* *         * ********* *
    Head                                                                    Tail

    *  Each node is composed of a data and a reference (link) to the next node in the sequence

    */


class Node{
    constructor(value){
        this.value = value;
        this.next  = null;
    }
    
}
class linkedList
{
    
    constructor() {
        this.head=null;
        this.size=0;
    }

     //Insert new node at start    
     insert(value){
        let currentNode;
        let nodeObj = new Node(value);
        
        // first case : Node is empty
        if(this.head==null){
            this.head = nodeObj;
        }
        else{
                currentNode = this.head  // assign the node to the current node
                // second case : cuurent node next prop is empty 
                while(currentNode.next)
                {
                    currentNode = currentNode.next;  
                }
                currentNode.next = nodeObj;
        }
                     this.size++;   
                
    }

}

