function bubbleSort(array: number[]) {
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength - 1; i++) {
    for (let j = 0; j < arrayLength - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function swap(array: number[], a: number, b: number) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

const numbers = [8, -44, 232, 77, 1, 324];

const hello = bubbleSort([...numbers]);

console.log(hello);
