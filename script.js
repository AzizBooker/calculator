

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;

}

function sum(arg) {
	var sum = 0
	for (var i = 0; i < arg.length; i++) {
		sum += arg[i]
	}
	return sum;
}

function multiply(arg) {
	var ans = 1;
	for (var i = 0; i < arg.length; i++) {
		ans *= arg[i]
	}
	return ans;


}

function power(arg) {
	return arg[0] ** arg[1];
}


function factorial(num) {
	var factorial = 1

	for (var i = num; i > 0; i--) {
		factorial *= i;
	}
	return factorial

}
function operation(func, arg) {
	var ans = 0
	ans = func(arg)
	previousNum.value = currentNum.value
	currentNum.value = ans
	return ans;

}


// End of Calc.js

const previousNum = document.querySelector('#prevNum')
const currentNum = document.querySelector('#currentNum')
const operationTypes =
{
	"None": 0,
	"Sum": 1,
	"Subtraction": 2,
	"Division": 3,
	"Multiplication": 4
}
Object.freeze(operationTypes)
var currentOperation = operationTypes.None;
var nums = []
var num = '';
var isMath = false;
function onButtonClick(btn) {

	switch (btn.value) {
		case 'back':
			currentNum.value = " ";

			break;
		case 'exponent':

			break;
		case 'sum':
			currentOperation = operationTypes.sum;
			console.log(`operation type:${currentOperation}`)
			isMath = true;
			currentNum.value += "+";
			break;

		case 'equal':
			console.log('case equal')

			switch (currentOperation) {
				case operationTypes.sum:
					console.log('case sum:')
					operation(sum, nums)

			}
			break;

		default:
			if (isMath) {
				isMath = false
				currentNum.value += btn.value;
				nums.push(Number(num))
				num = ""
				console.table(nums)
			} else
				currentNum.value += btn.value;
			num += btn.value;
		//console.log(`current Number:${num}`)

	}

}




