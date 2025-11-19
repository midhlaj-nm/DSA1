class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
    addAtFirst(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
    }
    addAtLast(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return 
        }
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }
    findMiddle(){
        if(!this.head) return null
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        console.log(`Middle is ${slow.value}`)
    }
    removeMiddle(){
        if(!this.head) return null
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        if(slow.next) slow.next.prev = slow.prev
        if(slow.prev) slow.prev.next = slow.next
    }
    printF(){
        let current = this.head
        let res = ''
        while(current){
            res += current.value + '<->'
            current = current.next
        }
        res += 'null'
        console.log(res)
    }
    printR(){
        let current = this.tail
        let res = ''
        while(current){
            res += current.value + '<->'
            current = current.prev
        }
        res += 'null'
        console.log(res)
    }
}

const dll = new DoublyLinkedList()
dll.addAtFirst(2)
dll.addAtFirst(1)
dll.addAtLast(3)
dll.addAtLast(4)
dll.addAtLast(5)
dll.addAtLast(6)
dll.printF()
dll.printR()
dll.findMiddle()
dll.removeMiddle()
dll.printF()