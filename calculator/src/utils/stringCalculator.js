export function add(numbers) {
    //return 0 for empty string
    if (numbers === "") return 0;

    let delimiters = [","];  
    let numString = numbers;

    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf("\n");
        const delimiterPart = numbers.slice(2, delimiterEndIndex);
        
        if (delimiterPart.startsWith("[") && delimiterPart.endsWith("]")) {
            delimiters = delimiterPart.slice(1, -1).split("][");
        } else {
        delimiters = [delimiterPart];
        }
    
        numString = numbers.slice(delimiterEndIndex + 1);
    }
 
    let numArray = numString.split("\n");
    numArray = numArray.flatMap(item  => {
        for (let delimiter of delimiters) {
          item = item.split(delimiter).join(",");
        }
        return item.split(",");
    });
    numArray = numArray.map(Number);

    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error("negatives not allowed " + negatives.join(", "));
    }
    
    return numArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
}
  