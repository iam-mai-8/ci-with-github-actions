//load node.js assertion library
const assert = require("assert");

//load calculator code
var Calculator = require("../Calculator");
var calc = new Calculator();

describe("Calculator Tests",function(){
 
  it("Adds 1 and 2",function(){
	var result = calc.add(1,2);
	assert.equal(result,3);
  });

    it("Subtracts 5 from 10",function(){
	var result = calc.subtract(10,5);
	assert.equal(result,5);
  });

    it("Multiply 5 x 2",function(){
	var result = calc.multiply(5,2);
	assert.equal(result,10);
  });
       
  it("6 divided by 3",function(){
	var result = calc.divide(6,3);
	assert.equal(result,2);
  });
      
});
