export default class BubbleSort {
  execute(numbers: number[]): number[] {
    let swapped: boolean = true;
    while (swapped) {
      swapped = false;
      for (let index: number = 0; index < numbers.length - 1; index++) {
        if (numbers[index] > numbers[index + 1]) {
          let swapping: number = numbers[index];
          numbers[index] = numbers[index + 1];
          numbers[index + 1] = swapping;
          swapped = true;
        }
      }
    }
    return numbers;
  }
}
