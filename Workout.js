// Singly linkd list
class Node{
    constructor(value){
        this.value = value
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
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }
    addAtPosition(val, position){
        if(!this.head) return null
        let newNode = new Node(val)
        if(position == 0){
            newNode.next = this.head
            this.head = newNode
            return
        }
        let current = this.head
        let index = 0
        while(current && index < position - 1){
            current = current.next
            index++
        }
        if(!current){
            console.log('Position is out of range')
            return
        }
        newNode.next = current.next
        current.next = newNode
    }deleteFirst(){
        if(!this.head) return null
        this.head = this.head.next
    }
    deletelast(){
        if(!this.head) return null
        if(!this.head.next){
            this.head = null
            return
        }
        let current = this.head
        while(current.next.next){
            current = current.next
        }
        current.next = null
    }deleteByValue(value){
        if(value == null){
            console.log('pass a value')
            return
        } 
        if(!this.head) return null
        if(this.head.value == value){
            this.head = this.head.next
            return
        }
        let current = this.head
        while(current.next && current.next.value !== value){
            current = current.next
        }
        if(!current.next){
            console.log('Value is not found')
            return
        }
        current.next = current.next.next
    }
    findValue(value){
        if(!this.head) return null
        if(this.head.value == value){
            console.log('true')
            return
        }
        let current = this.head
        while(current.next){
            if(current.value == value){
                console.log('true')
                return
            }
            current = current.next
        }
        console.log('false')
        return
    }
    lengthOfLL(){
        if(!this.head) return null
        if(!this.head.next){
            console.log('1')
        } 
        let length = 0
        let current = this.head
        while(current){
            current = current.next
            length++
        }
        console.log(length)
    }
    nthNode(n){
        if(!this.head) return null

        let current = this.head
        let index = 0
        while(current && index < n){
            current = current.next
            index++
        }
        if(!current){
            console.log('n is out of range')
            return
        }
        console.log(`${current.value}`)
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
        if(!this.head) return null

        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        console.log('this is the middle node', slow.value)
    }
    deleteMiddle(){
        if(!this.head) return null
        if(!this.head.next){
            this.head = null
            return
        }
        
        let prev = null
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = slow.next
    }
    reversell(){
        if(!this.head) return null

        let prev = null
        let current = this.head
        let next = null

        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
        return prev
    }
}

const sll = new singlell()
sll.addAtFirst(34)
sll.addAtEnd(35)
sll.addAtEnd(36)
sll.addAtEnd(38)
sll.addAtEnd(39)
sll.addAtEnd(40)
sll.addAtEnd(41)
sll.addAtEnd(42)
sll.addAtEnd(43)
sll.addAtPosition(37, 3)
sll.print()
sll.reversell()
sll.print()
sll.findMiddle()
sll.deleteFirst()
sll.print()
sll.deletelast()
sll.print()
sll.deleteByValue(35)
sll.print()
sll.findValue(3)
sll.lengthOfLL()
sll.nthNode(1)
sll.deleteMiddle()
sll.print()