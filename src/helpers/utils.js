export function getCorrectWord(number) {
  let result = "";
  switch (number) {
    case 1:
      result = "book";
      break;
    default:
      result = "books";
      break;
  }
  return result;
}
