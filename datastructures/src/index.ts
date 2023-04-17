console.clear();
import {createQueue, createStack} from "./datastructure.factory";
import {LinkedList} from "./linkedlist.class";

console.log("===== Queue")
const queue = createQueue<number>();

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.isEmpty());
console.log(queue.peak());
console.log(queue.length);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());

// const priorityQueue = createPriorityQueue();

console.log("===== Stack")
const stack = createStack();

console.log(stack.isEmpty());
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.isEmpty());
console.log(stack.length);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());

console.log("===== LinkedList")
const linkedList = new LinkedList<number>();
console.log(linkedList.isEmpty());
linkedList.push(10);
linkedList.push(20);
linkedList.push(30);
console.log(linkedList.isEmpty());
console.log(linkedList.length);
console.log(linkedList.get(0));
console.log(linkedList.get(1));
console.log(linkedList.get(2));
console.log(linkedList.get(3));
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList.pop());
console.log(linkedList.length);


