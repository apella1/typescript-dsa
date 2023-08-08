function selectionSort(array: number[]) {
  const arrayLength = array.length;
  for (
    let lastUnsortedIndex = arrayLength - 1;
    lastUnsortedIndex > 0;
    lastUnsortedIndex--
  ) {
    let largestNumberIndex = 0;
    for (let j = 1; j <= lastUnsortedIndex; j++) {
      if (array[j] > array[largestNumberIndex]) {
        largestNumberIndex = j;
      }
    }
    swap(array, largestNumberIndex, lastUnsortedIndex);
  }
  return array;
}

export function swap(array: number[], a: number, b: number) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

const unsortedNumbers = [3, 53, -2, 1, 343, 89, 10];

const unsortedArrayCopy = Array.from(unsortedNumbers);

const sortedNumbers = selectionSort([...unsortedNumbers]);

console.log(unsortedNumbers);
console.log(sortedNumbers);
