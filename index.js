// 1
function countEven(num1, num2) {
   let sum = num1 + num2;
   let multiply = num1 * num2;
   
        if (num1 % 2 == 0) {
            
            return multiply;
            } else return sum;
};
console.log('The Answer Is ', countEven(3, 6));



// 2

function getQuarter(num1, num2) {
    let result = ' ';
        
        if (num1 == 0 && num2 == 0) {
            result = ('The dot is in the center')
        } else if (num1 >= 0 && num2 >= 0) {
            result = ('The dot is in the 1st quarter');
        } if (num1 >= 0 && num2 <= 0) {
            result = ('The dot is in the 4nd quarter');
        } if (num1 <= 0 && num2 <= 0) {
            result = ('The dot is in the 3rd quarter');
        } if (num1 <= 0 && num2 >= 0) {
            result = ('The dot is in the 2th quarter');
        }

    return result;
};
console.log(getQuarter(3, 5));



// 3
function getSumOfPositives(num1, num2, num3) {
    let result = 0;
    
        if (num1 > 0) {
            result = result + num1;
        } 
        if (num2 > 0) {
            result = result + num2;
        } 
        if (num3 > 0) {
            result = result + num3;
        };
   
    return result;
};
console.log('The Sum Of Positives ', getSumOfPositives(4, 3, 6));


// 4
function getSumOfMax(num1, num2, num3) {
    let multiply = num1 * num2 * num3;
    let sum = num1 + num2 + num3;
    let result = null;
        
    if (multiply > sum) {
        result = multiply + 3;
    }  else result = sum + 3;

    return result;
};
console.log('The Sum Of Max Is ', getSumOfMax(3, 4, 7));



// 5
function getGrade(n) {
    let mark = n;
    let result = ' '
    
    if (mark >= 0 && mark <= 19 ) {
        result = 'F';
    } 
    if (mark >= 20 && mark <= 39) {
        result = 'E';
    } 
    if (mark >= 40 && mark <= 59) {
        result = 'D';
    } 
    if (mark >= 60 && mark <= 74) {
        result = 'C';
    } 
    if (mark >= 75 && mark <= 89) {
        result = 'B';
    } 
    if (mark >= 90 && mark <= 100) {
        result = 'A';
    }
    if (mark < 0 || mark > 100) {
        result = 'Please Try Again'
    }
    
    return result; 
};
console.log('Your Grade is ', getGrade(100));


// Age Request
function getRequest(age) {
let result = ' ';
        
    if(age >= 18) {
        result = 'Allowed';
    } else result = 'Denied';
        
    return result;``
};
console.log('Access ', getRequest(17));
    
   
// Vivod Imeni
function getName(name) {
    
    return `Hi ${name}`;
}; 
console.log(getName('Rasul'));


// Cycles 
 

// 1
function getSumOfEvens() {
    let n;
    let sum = 0;
    let quantity = 0;
    
    for(n = 1; n < 99; n++) {
        if(n % 2 === 0) {
            sum += n;
            quantity++;
        }
    }

    return `The Sum is ${sum} and the Quantity is ${quantity}`; 
};
console.log('The Sum Of Even Numbers is ', getSumOfEvens());


// 2
function getSimpleNumber(n) {
    
    for(let i = 2; i < n; i++) {
        if(n % i === 0){
            
            return 'Comp';
        }   
    }   

    return 'Simple';
};
console.log('This Number Is ', getSimpleNumber(11));
    

// 3
function getSquareNum(num) {
    let square = 0;
    
    square = num ** (1/2);
    
    
    return ~~square;
}
console.log('the square ',getSquareNum(7));


// 4   n != 1 * 2 * ... * n-1 * n;
function getFactorial(n) {
    let multiply = n;
    
    for(let i = 1; i < n; i++) {
        multiply *= i; 
    }

    return multiply;
};
console.log('Factorial is ', getFactorial(6));
 

// 5
function getSumOfEach(num) {
    let sum = 0;
    let eni;
    
    while(num) {
        eni = num % 10;
        num = (num - eni) / 10;
        sum += eni;
    }
    
    return sum;
};
console.log('the Sum of each number is ', getSumOfEach(123));


// 6
function getMirrorSequence(num) {
    let result = 0;
    let eni = 0;

    while(num) {
        eni = num % 10;
        num = (num - eni) / 10;
        result = (result * 10) + eni;

        if(!num) {
            return result;
        }
    }    
};
console.log('the raw changed to ',getMirrorSequence(123));


// Arrays

// 1
function getMinValue(array) {
    let min = array[0];
    
    for(let i = 1; i < array.length; i++) {
        if(min > array[i]) {
            min = array[i];
        }
    }

    return min;
};
console.log('min element is ', getMinValue([1, 2, 3, 5, 6, 0,-1]));


// 2
function getMaxValue(array) {
    let max = array[0];
    
    for(let i = 1; i < array.length; i++) {
        if(max < array[i]) {
            max = array[i];
        }
    }

    return max;
};
console.log('max element is ', getMaxValue([2, 4, 1, 7, 3, 8, 0]));


// 3
function getIndexMin(array) {
    let min = array[0];
    let minIndex = 0;
    
    for(let i = 1; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i];
            minIndex = i;
        }
    }
    
    return minIndex;
};
console.log('index of min element is ', getIndexMin([2, 4, 1, 7, 3, 0]));


// 4
function getIndexMax(array) {
    let max = array[0];
    let maxIndex = 0;
    
    for(let i = 1; i < array.length; i++) {
        if(maxIndex > max) {
            max = array[i];
            maxIndex = i;
        }
    }
    
    return maxIndex;
};
console.log('index of max element is ', getIndexMax([5, 7, 3, 5, 9, 0]));


// 5
function getSumOfOddIndex(array) {
    let sum = 0;
    
    for(let i = 0; i < array.length; i++) {
        if(i % 2 !== 0) {
            sum += array[i];
        }
    }

    return sum;
};
console.log(getSumOfOddIndex([5, 6, 2, 5, 9, 0, 8, 3, 1]));


// 6
function getReverseArr(array) {
    let reverse = [];
    
    for(let i = array.length - 1; i >= 0; i--) {
        reverse[reverse.length] = array[i];
        //reverse[array.length - 1 - i] = array[i];
        //console.log(reverse, 'reverse');       
    }
    
    return reverse;
}

console.log(getReverseArr([5, 6, 2, 3]));


// 7
function getSumOfOdds(array) {
    let quantity = 0;
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0) {
            quantity++;
        }
    }
    return quantity;
};
console.log(getSumOfOdds([5, 6, 2, 5, 9, 0, 8, 3, 1]));


// Functions

// 1
function getWeekDayz(num) {
    let array = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    let day = ' ';

    if(num > 0 && num < 8) {
        for(let i = 0; i < array.length; i++) {
            if(i === num - 1) {
                day = array[i]
            }
        }
        return day;
    } else return 'Nothing'
    
}
console.log('Today Is', getWeekDayz(7));
