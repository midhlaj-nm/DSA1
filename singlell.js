class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
    valueAtStart(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
    }
    ValueAtEnd(val){
        let newNode = new Node(val)
        if(this.head == null){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }
    ArrayToList(arr){
        for(let i=0; i<arr.length; i++){
            this.ValueAtEnd(arr[i])
        }
    }
    print(){
        let current = this.head
        let result = ''
        while(current){
            result += current.value + '->'
            current = current.next
        }
        result += 'null'
        console.log(result)
    }
    findMiddle(){
        if(!this.head){
            return
        }
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        console.log(`Middle value is ${slow.value}`)
    }
    removeMiddle(){
        if(!this.head) return null

        let slow = this.head
        let fast = this.head
        let prev = null

        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }

        prev.next = slow.next
    }
    removeFirst(){
        if(!this.head) return null
        if(this.head){
            this.head = this.head.next
        }
    }
    removeLast(){
        if(!this.head) return null
        if(!this.head.next){
            this.head = null
            return
        }
        let current = this.head
        let prev = null
        while(current.next){
            prev = current
            current = current.next
        }
        prev.next = null
    }
    removeTarget(tar){
        if(!this.head) return null
        if(this.head.value == tar){
            this.head = this.head.next
            return
        }
        let current = this.head
        let prev = null
        while(current && current.value !== tar){
            prev = current
            current = current.next
        }
        if(!current){
            console.log('targt not found')
        }
        prev.next = current.next
    }
    removeDup(){
        let current = this.head
        while(current && current.next){
            if(current.value == current.next.value){
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
    }
    reversell(){
        let current = this.head
        let prev = null
        let next = null

        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }
}

const list = new LinkedList()
list.valueAtStart(0)
list.ArrayToList([1,2,3,4,5,6])
list.print()
list.removeMiddle()
list.print()
list.ValueAtEnd(6)
list.print()
list.removeDup()
list.print()
list.reversell()
list.print()