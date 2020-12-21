function add (num1,num2) {
	return num1+num2;
}

function subtract (num1,num2) {
	return num1-num2;
	
}

function sum (arg) {
	var sum=0
	for(var i=0;i<arg.length;i++){
	 sum+=arg[i]
	}
	return sum;
}

function multiply (arg) {
	var ans=1;
	for(var i=0;i<arg.length;i++){
	 ans*=arg[i]
	}
	return ans;
	
	
}

function power(num1,num2) {
	return num1**num2;
}

function factorial(num) {
	var factorial=1

	for(var i=num;i>0;i--){
		factorial*=i;
	}
return factorial
	
}
function operation(arg){
var num=[]
var ans=0
for(var i=0;i<arg.length;i++){
    switch(arg[i]){
       
        case 'add':
            ans+=sum(num)
        break;
        case typeof 'number':
            num.push(arg[i])
        break;
        

        
    }
}
return ans;
}
module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial,
	operation
}
