function chunk(length: number, word: string): string[] {
    const chunks: string[] = [];
    let str = word;
    while (str.length > 0) {
        chunks.push(str.substring(0, length));
        str = str.substring(length);
    }

    if (str.length > 0) chunks.push(str);

    return chunks;
}

function extractWords(rawWords: string[], lineLength: number): string[] {
    const words: string[] = [];
    rawWords.forEach((word: string) => {
        if (word.length > lineLength) {
            words.push(...chunk(lineLength, word));
        } else {
            words.push(word);
        }
    });
    return words
}

export function split(lineLength: number, paragraph: string): string[] {
    const words: string[] = extractWords(paragraph.split(" "), lineLength);

    const lines: string[] = [];
    let line = "";
    let index = 0;

    while (index < words.length) {
        if ((line.length + 1 + words[index].length) <= lineLength) {
            line = line + ((line.length === 0) ? "" : " ") + words[index];
        } else {
            if (line.length > 0) lines.push(line);
            line = words[index];
        }
        index++;
    }
    if (line.length > 0) lines.push(line);

    return lines;
}

console.log(split(3, "abc defghi jk l m nopqrstuvw x"));
console.log(split(4, "abc defghi jk l m nopqrstuvw x"));
console.log(split(5, "abc defghi jk l m nopqrstuvw x"));
console.log(split(6, "abc defghi jk l m nopqrstuvw x"));