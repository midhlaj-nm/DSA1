// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class SinglyLinkedList{
//     constructor(){
//         this.head = null
//     }
//     addAtFirst(val){
//         let newNode = new Node(val)
//         if(!this.head){
//             this.head = newNode
//             return
//         }
//         newNode.next = this.head
//         this.head = newNode
//     }
//     // reversell(){
//     //     if(!this.head) return null
//     //     let prev = null
//     //     let current = this.head
//     //     while(current.next){
//     //         prev = current
//     //         current = current.next
//     //     }
//     //     // console.log(current.value)
//     //     this.head = current
//     //     this.head.next = prev
//     //     // console.log(this.head)

//     // }
//     removeTar(ind){
//         if(ind < 0) return null
//         if(!this.head) return null
//         // if(this.head.value == tar){
//         //     this.head = this.head.next
//         //     return
//         // }
//         let current = this.head
//         let prev = null
//         let index = 0
//         while(current && current.value !== ind){
//             index++
//             prev = current
//             current = current.next
//         }
//         if(!current){
//             console.log('no target found')
//             return
//         }
//         prev.next = current.next
//     }
//     print(){
//         let current = this.head
//         let res = ''
//         while(current){
//             res += current.value + '->'
//             current = current.next
//         }
//         res += 'null'
//         console.log(res)
//     }
// }

// const list = new SinglyLinkedList()
// list.addAtFirst(4)
// list.addAtFirst(3)
// list.addAtFirst(2)
// list.addAtFirst(1)
// list.addAtFirst(0)
// list.print()
// list.removeTar(4)
// list.print()


















// Reverse an array with complexety O(n)
// let arr = [1,2,3,4,5]
// for(i=arr.length -1; i>=0; i--){
//     arr[i] = arr[i]
// }
// console.log(arr)

//Sum of an arr (recursion)
// function sumArr(arr, i=0){
//     if(arr.length <= 0) return []    
//     let sum =  arr[i] + sumArr(arr, i)
//     return sum
// }
// console.log(sumArr([1,2,3,4]))


//Binary search
// function binary(arr, target){
//     let left = 0
//     let right = arr.length - 1
//     while(left <= right){
//         let mid = Math.floor((left + right) / 2)
//         if(arr[mid] == target){
//             return mid
//         } else if(arr[mid] < target){
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }
//     }
//     return -1
// }
// console.log(binary([1,2,3,4,5],2))

//Binary search(recursive)
// function binary(arr, target, left = 0, right = arr.length - 1){
//     while(left <= right){
//         let mid = Math.floor((left + right) / 2)
//         if(arr[mid] == target) return mid
//         else if(arr[mid] < target) return binary(arr, target, mid+1, right)
//         else return binary(arr, target, left, mid - 1)
//     }
//     return - 1
// }

// console.log(binary([1,2,3,4,5],4))


// remove vowels from string
// let str = 'Are you okay'
// let res = ''
// for(i=0; i<str.length; i++){
//     if(str[i] !== 'A' && str[i] !== 'a' &&
//          str[i] !== 'E' && str[i] !== 'e' &&
//           str[i] !== 'I' && str[i] !== 'i' &&
//            str[i] !== 'O' && str[i] !== 'o' &&
//             str[i] !== 'U' && str[i] !== 'u') {
//         res += str[i]
//     }
// }
// console.log(res)
