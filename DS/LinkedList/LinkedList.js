
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }

    prepend(value) { // O(1)
        const node = new Node(value)
        if (!this.isEmpty()) {
            node.next = this.head
        }
        this.head = node
        this.size++
    }

    append(value) {
        const node = new Node(value)

        if(this.isEmpty()){
            this.head = node
        } else{
             let prev = this.head

             while(prev.next){ // O(n)
                prev = prev.next
             }
             prev.next = node
        }
        this.size++
    }

    insert(value, index){
        if(index < 0 || index > this.size){
            return
        }
        if(index === 0){
            this.prepend(value)
        } else{
            const node = new Node(value)
            let prev = this.head

            for(let i = 0; i < index - 1; i++){ // O(n)
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node

            this.size++
        }

    }

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removeNode
        if(index === 0){
             removeNode = this.head
            this.head = this.head.next
        } else{
            let prev = this.head
            for(let i = 0; i<index-1; i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        } else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                let removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            } else{
                return null
            }

        }
    }

    search(value){
        if(this.isEmpty()){
            return -1
        } else{
            let index = 0
            let curr = this.head
            while(curr){
                if(curr.value === value){
                    return index
                }
                curr = curr.next
                index++
            }
            return -1
             
        }
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print(){
        if(this.isEmpty()){
            console.log('The List Is Empty!');
        } else{
            let curr = this.head
            let str = ''

            while(curr){ // O(n)
                str += `${curr.value} `
                curr = curr.next
            }
            console.log(str);
            
        }
    }

}


const list = new LinkedList


list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.insert(25,2)

// console.log('Is empty: ', list.isEmpty());
console.log('Size: ', list.getSize());
list.print()

// // console.log('Removed value: ',list.removeFrom(3));
// console.log('Removed value: ',list.removeValue(10));
// console.log('Size: ', list.getSize());
// list.print()

// console.log(list.search(10));
list.reverse()
list.print()

