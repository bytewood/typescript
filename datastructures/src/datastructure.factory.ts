import { Optional } from "./optional.type";

/**
 * Queue - a first-in-first-out data structure.
 */
export const createQueue = <T>() => {
    const queue:T[] = [];
    return {
        enqueue(value: T): void {
            queue.unshift(value);
        },
        dequeue(): T {
            return queue.pop()!;
        },
        peak(): T {
            return queue[queue.length - 1];
        },
        get length(): number {
            return queue.length;
        },
        isEmpty(): boolean {
            return queue.length === 0;
        }
    }
}

// export function createPriorityQueue() {}

/**
 * Stack - a first-in-last-out data structure.
 */
export const createStack = <T>() => {
    const queue:T[] = [];
    return {
        push(value: T): void {
            queue.push(value);
        },
        pop(): T {
            return queue.pop()!;
        },
        peak(): T {
            return queue[queue.length-1];
        },
        get length(): number {
            return queue.length;
        },
        isEmpty(): boolean {
            return queue.length === 0;
        }
    }
}

