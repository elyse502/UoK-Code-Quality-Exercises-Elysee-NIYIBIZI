# Code Improvements

Refactor the different functions below by improving their structure and code quality.

Exercise 1:

```jsx
function calculateAverage(numbers) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count++;
  }
  var average = sum / count;
  return average;
}
```

Exercise 2:

```jsx
function greet(name) {
  if (name) {
    return "Hello, " + name + "!";
  } else {
    return "Hello!";
  }
}
```

Exercise 3:

```jsx
function reverseString(str) {
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
```

Exercise 4:

```jsx
function findEvenNumbers(numbers) {
  var evenNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
```

Exercise 5:

```jsx
function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    var factorial = 1;
    for (var i = 2; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
```

Exercise 6:

```jsx
function maxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else {
    if (b > a && b > c) {
      return b;
    } else {
      return c;
    }
  }
}
```

Exercise 7:

```jsx
function mult(x, y) {
  return x * y;
}
```

Exercise 8:

```jsx
function discount(totalamount) {
  var disc;
  if (totalamount > 100) {
    disc = totalamount * 0.1;
  } else {
    disc = totalamount * 0.05;
  }
  return disc;
}
```

Exercise 9:

```jsx
function calculateMatrixSum(matrix) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++)
    for (var j = 0; j < matrix[i].length; j++) sum += matrix[i][j];
  return sum;
}
```
