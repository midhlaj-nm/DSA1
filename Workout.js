// Singly linkd list
class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class singlell{
    constructor(){
        this.head = null
        this.next = null
    }
    addAtFirst(value){
        let newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
    }
    addAtEnd(value){
        
    }
}