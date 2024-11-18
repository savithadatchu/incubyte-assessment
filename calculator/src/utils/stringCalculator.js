export function add(numbers) {
    //return 0 for empty string
    if (numbers === "") return 0;

    let delimiters = [","];  
    let numString = numbers;

    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        const delimiterPart = numbers.slice(2, delimiterEndIndex);
        
        delimiters = [delimiterPart];
    
        numString = numbers.slice(delimiterEndIndex + 1);
    }
 
    let numArray = numString.split("\n");
    numArray = numArray.flatMap(item => item.split(delimiters[0]));
    numArray = numArray.map(Number);

    return numArray.reduce((sum, num) => sum + num, 0);
}
  