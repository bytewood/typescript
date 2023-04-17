import {LinkedList} from "./linkedlist.class";

describe("LinkedList", () => {
    it("#isEmpty", () => {
        const l = new LinkedList<number>();
        expect(l.isEmpty()).toBe(true);
    })
    it("#length", () => {
        const l = new LinkedList<number>();
        expect(l.length).toBe(0);
    });
    it("#push", () => {
        const l = new LinkedList<number>();
        l.push(1);
        expect(l.length).toBe(1);
    });
    it("#get", () => {
        const l = new LinkedList<number | string>();
        expect(l.get(0)).toBeUndefined();
        l.push(10);
        expect(l.get(0)).toBe(10);
        expect(l.get(1)).toBeUndefined();
        l.push("Hello");
        l.push("World");
        expect(l.get(0)).toEqual(10);
        expect(l.get(1)).toEqual("Hello");
        expect(l.get(2)).toEqual("World");
    });
    it("#pop", () => {
         const l = new LinkedList<number | string>();
         expect(l.pop()).toBeUndefined()
         l.push("samba");
         expect(l.pop()).toBe("samba");
    });
    it("#delete", () => {
        const l: LinkedList<string|number> = new LinkedList<string | number>();
        expect(l.delete(1)).toBeUndefined();
        l.push("deleteme");
        expect(l.delete(1)).toBeUndefined();
        expect(l.delete(0)).toBe("deleteme");
    });
});

