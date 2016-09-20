var book = {title: "The sun also rises",
            author: "Ernest Hemmingway"}
print(book.title);
var add = function(num1,num2) {
  return num1 + num2;
}
var result = add(5,5);
var  numbers =[7,5,2,6,45,67,12,43,101];
numbers.sort(function(first,second){
  return first - second;
});
print(numbers);

function sum() {
  var result = 0
  len = arguments.length;
  i = 0;
  while(i < len) {
    result += arguments[i];
    i++;
  }
  return result;
    
}
var result = sum(1,2,3);
print(result)
  
