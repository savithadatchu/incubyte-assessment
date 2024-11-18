export function add(numbers) {
    //return 0 for empty string
    if (numbers === "") return 0;
    
    let numArray = numbers.split("\n");
    numArray = numArray.flatMap(item => item.split(","));
    numArray = numArray.map(Number);

    return numArray.reduce((sum, num) => sum + num, 0);
}
  