
class Queue {
    constructor(){
        // this.items = []
        this.items = {}
        this.rear = 0
        this.front = 0
    }
     enQueue(element){
        // this.items.push(element)
        this.items[this.rear] = element
        this.rear++
     }

     deQueue(){
        // this.items.shift()
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return  item
     }

     isEmpty (){
        // return this.items.length === 0
        return this.rear === this.front
     }

     peek(){
        // if(!this.isEmpty()){
        //     return this.items[0]
        // }
        // else{
        //     return null
        // }
        return this.items[this.front]
     }

     size(){
        // return this.items.length
        return this.rear - this.front
     }
     print(){
        // console.log(this.items.toString())
        console.log(this.items);
        
     }

}

const queue = new Queue
queue.enQueue('10')
queue.enQueue('20')
queue.enQueue('30')
queue.print()
queue.deQueue()
queue.enQueue('77')
queue.print()
console.log(queue.front);
console.log(queue.rear);

console.log(queue.size());

