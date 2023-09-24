import BubbleSort from "../../src/ordination/BubbleSort";

const bubbleSort = new BubbleSort();

test("Should return the ordered numbers", () => {
  const aleatoryNumbers: number[] = [5, 18, 10, 16, 49, 82, 43, 12];
  const orderedNumbers: number[] = [5, 10, 12, 16, 18, 43, 49, 82];
  const resultArray: number[] = bubbleSort.execute(aleatoryNumbers);
  expect(resultArray).toStrictEqual(orderedNumbers);
});

test("Should return the ordered numbers with repeated elements", () => {
  const aleatoryNumbers: number[] = [5, 18, 10, 49, 16, 49, 10, 82, 43, 12];
  const orderedNumbers: number[] = [5, 10, 10, 12, 16, 18, 43, 49, 49, 82];
  const resultArray: number[] = bubbleSort.execute(aleatoryNumbers);
  expect(resultArray).toStrictEqual(orderedNumbers);
});
