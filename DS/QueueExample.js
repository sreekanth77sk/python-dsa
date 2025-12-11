// Queue Example - FIFO (First In First Out) Data Structure

class Queue {
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    // Add element to the rear of the queue
    enQueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    // Remove element from the front of the queue
    deQueue(){
        if(this.isEmpty()){
            return null
        }
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    // Check if queue is empty
    isEmpty(){
        return this.rear === this.front
    }

    // View the first element without removing
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }

    // Get the size of the queue
    size(){
        return this.rear - this.front
    }

    // Print all elements in the queue
    print(){
        console.log("Queue elements:", this.items)
    }
}

// ============= EXAMPLE USAGE =============

console.log("=== Queue Example ===\n")

// Create a new queue
const queue = new Queue()

// 1. Add elements using enQueue (FIFO - First In First Out)
console.log("Adding elements: 10, 20, 30, 40, 50")
queue.enQueue(10)
queue.enQueue(20)
queue.enQueue(30)
queue.enQueue(40)
queue.enQueue(50)
queue.print()
console.log()

// 2. Check queue size
console.log("Queue size:", queue.size())
console.log()

// 3. Peek at the front element
console.log("Peek (first element):", queue.peek())
console.log()

// 4. Remove elements using deQueue
console.log("Removing elements:")
console.log("Removed:", queue.deQueue())  // 10
console.log("Removed:", queue.deQueue())  // 20
console.log("Removed:", queue.deQueue())  // 30
queue.print()
console.log()

// 5. Check queue size again
console.log("Queue size after deQueue:", queue.size())
console.log()

// 6. Add more elements
console.log("Adding 60 and 70")
queue.enQueue(60)
queue.enQueue(70)
queue.print()
console.log()

// 7. Check if queue is empty
console.log("Is queue empty?", queue.isEmpty())
console.log()

// 8. Remove all remaining elements
console.log("Removing all elements:")
while(!queue.isEmpty()){
    console.log("Removed:", queue.deQueue())
}
console.log()

// 9. Check if queue is empty now
console.log("Is queue empty?", queue.isEmpty())
console.log("Peek on empty queue:", queue.peek())
