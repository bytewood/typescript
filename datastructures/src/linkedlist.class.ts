import {Optional} from "./optional.type";

type Node<T> = { value: T; next?: Node<T> } | undefined;

export class LinkedList<T> {
    private head: Node<T>;
    private tail: Node<T>;
    private size: number = 0;

    push(value: T): void {
        const node: Node<T> = { value };

        if (this.head === undefined) {
            this.head = node;
            this.tail = node;
            this.size++
        } else {
            this.tail!.next = node;
            this.tail = node;
            this.size++;
        }
    }

    pop(): Optional<T> {
        if (this.isEmpty()) {
            return undefined;
        }

        const node = this.tail;

        if (this.head === this.tail) {
            this.head = undefined;
            this.tail = undefined;
            this.size = 0;

            return node!.value;
        } else {
            let current = this.head;
            let penultimate: Node<T>;
            while (current) {
                if (current.next === this.tail) {
                    penultimate = current;
                    break;
                }
                current = current.next;
            }
            penultimate!.next = undefined;
            this.tail = penultimate;
            this.size--;

            return node!.value;
        }
    }

    get(index: number): Optional<T> {
        if (this.isEmpty() || index > (this.size-1)) {
            return undefined;
        }

        let count = 0;
        let current = this.head;

        while (current && index != count) {
            current = current.next;
            count++
        }

        return current!.value;
    }

    insert(value: T, index: number): void {

    }

    delete(index: number): void {
    }

    get length(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.head === undefined;
    }
}