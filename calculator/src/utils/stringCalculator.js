export function add(numbers) {
    //return 0 for empty string
    if (numbers === "") return 0;
    return numbers.split(',').reduce((sum, num) => sum + Number(num), 0);
  }
  