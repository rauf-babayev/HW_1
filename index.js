// 1
function countEven(a, b) {
   let firstNumber = a;
   let secondNumber = b;
   let sum = a + b;
   let multiply = a * b;
   
   if (a % 2 == 0) {
       return multiply;
   } else return sum;
};

// 2

function getQuarter(x, y) {
    let firstNumber = x;
    let secondNumber = y;
    let result = ' ';
    if (firstNumber == 0 && secondNumber == 0)
        result = ('The dot is in the center')
    else if (firstNumber >= 0 && secondNumber >= 0)
        result = ('The dot is in the 1st quarter');
    if (firstNumber >= 0 && secondNumber <= 0)
        result = ('The dot is in the 2nd quarter');
    if (firstNumber <= 0 && secondNumber <= 0)
        result = ('The dot is in the 3rd quarter');
    if (firstNumber <= 0 && secondNumber >= 0)
        result = ('The dot is in the 4th quarter');
    
    return result;
};





// 3
function getSumOfPositives(a, b, c) {
   let firstNumber = a;
   let secondNumber = b;
   let thirdNumber =c;
   let result = 0;
    
    if (firstNumber > 0) {
       result = result + firstNumber;
   } 
   if (secondNumber > 0) {
       result = result + secondNumber;
   } 
   if (thirdNumber > 0) {
       result = result + thirdNumber;
   };
   
   return result;
};


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


// 5
function getGrade( n ) {
    let mark = n;
    let result = ' '
    if (mark >= 0 && mark <= 19 ) {
        result ('F');
    } 
    if (mark >= 20 && mark <= 39) {
        result ('E');
    } 
    if (mark >= 40 && mark <= 59) {
        result ('D');
    } 
    if (mark >= 60 && mark <= 74) {
        result ('C');
    } 
    if (mark >= 75 && mark <= 89) {
        result ('B');
    } 
    if (mark >= 90 && mark <= 100) {
        result ('A');
    }
    if (mark < 0 || mark > 100) {
        result ('Please Try Again')
    }
    return result;
    
};



// Age Request
function getRequest(age) {
    let result = ' ';
        if(age >= 18) {
            result = 'Allowed';
        } else result = 'Denied';
        return result;``
    };
    
    
    // Vivod Imeni
    function getName(name) {
        return `Hi ${name}`;
    }; 
    console.log(getName('Rasul'));



// Cycles 
 
// 1
function getSum( ) {
    let 










// functions

// 1
function getWeekName(a, b, c, d, e, f, g) {
    let firstNumber = a;
    let secondNumber = b;
    let thirdNumber = c;
    let fourthNumber = d;
    let fifthNumber = e;
    let sixthNumber = f;
    let seventhNumber = g;

    if (firstNumber) {
        return ('Monday');
    } 
    if (secondNumber) {
        return ('Thuesday');
    }
    if (thirdNumber) {
        return ('Wednesday');
    }
    if (fourthNumber) {
        return ('Thursday');
    }
    if (fifthNumber) {
        return ('Friday');
    }
    if (sixthNumber) {
        return ('Saturday');
    }
    if (seventhNumber) {
        return ('Sunday');
    }
};


