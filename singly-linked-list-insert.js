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

    // Delete node from specific index
    // delete(position){
        
    //     let currentNode,pre,count=0,deleteToNode,beforeNodeToDelete;
    //     if(position > this.size && position > 0){
    //         return `Enter value less or equal ${this.size} or enter positive value`
    //     }
    //     else
    //     {
    //          currentNode= this.head;

    //         // case 1: delete first node
    //          if(position===1){
    //              this.head=currentNode.next;
    //              var deleteNode = currentNode
    //              currentNode = null
    //              this.size--
    //              return deleteNode
    //          }

    //          // second case : delet from specific index

    //         //  while(count < position){
    //         //      count++
    //         //      beforeNodeToDelete=currentNode
    //         //      deleteToNode=currentNode.next
                 
    //         //  }

    //         //  beforeNodeToDelete.next=deleteToNode.next
    //         //  var NodeDelete =deleteToNode
    //         //  NodeDelete=null
    //         //  this.

    //         //  deleteToNode=currentNode.next
    //         //  deleteToNode=null
    //         //  this.size--
    //         //  return deleteToNode;
             
            
    //     }
    // }
    
    

}

let linkedListObj = new linkedList()
linkedListObj.insert(30);
linkedListObj.insert(60);
linkedListObj.insert(90);
linkedListObj.insert(190);
console.log(linkedListObj);
linkedListObj.delete(2);
console.log(linkedListObj);

