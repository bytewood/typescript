import { split } from './splitter'
export function wordWrap(rowLength: number, input: string): string[] {
  if (rowLength >= input.length) {
    return [input];
  } else {
    return split(rowLength, input);
  }
}
