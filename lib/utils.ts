import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateScssSelector(domObject: HTMLElement): string {
  let selector = `${domObject.tagName.toLowerCase()} {\n`;

  function traverse(node: HTMLElement, currentSelector: string, level: number): string {
    const childNodes = Array.from(node.childNodes);

    childNodes.forEach((child, index) => {
      if (child.nodeType === 1) { // Node.ELEMENT_NODE
        const childSelector = `  ${'>' + child.tagName.toLowerCase() + ' {\n'}`;
        selector += `${'  '.repeat(level)}${childSelector}`;
        traverse(child as HTMLElement, childSelector, level + 1);
        selector += `${'  '.repeat(level)}}\n`;
      }
    });

    return selector;
  }

  traverse(domObject, selector, 1);

  return selector.trim() + '\n}';
}








