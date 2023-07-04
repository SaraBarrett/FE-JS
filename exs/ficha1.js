function multiply(num1, num2) {
    return num1 * num2;
  };


  function isShortsWeather(temperature) {
    if (temperature > 25) {
      return true;
    } else {
      return false;
    }
  }

  function lastElement(arr) {
    if (!arr.length) {
      return null;
    }
    return arr[arr.length - 1];
  }

  function capitalize(word) {
    const firstLetterCapitalized = word[0].toUpperCase();
    const restOfTheString = word.slice(1);
    return firstLetterCapitalized + restOfTheString;
  }

  function sumArray(nums) {
    let total = 0;
    for (let num of nums) {
      total += num;
    }
    return total;
  }

  function returnDay(num) {
    const days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
      return null;
    } else {
      return days[num];
    }
  }