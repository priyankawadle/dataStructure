
// JavaScript program to find infix for
// a given postfix.

function isOperand(x)
{
	return (x >= 'a' && x <= 'z') ||
			(x >= 'A' && x <= 'Z');
}

// Get Infix for a given postfix
// expression
function getInfix(exp)
{
	let s = [];

	for (let i = 0; i < exp.length; i++)
	{
		// Push operands
		if (isOperand(exp[i]))
		{
		s.push(exp[i] + "");
		}

		// We assume that input is
		// a valid postfix and expect
		// an operator.
		else
		{
			let op1 = s[s.length-1];
			s.pop();
			let op2 = s[s.length-1];
			s.pop();
			s.push("(" + op2 + exp[i] +
					op1 + ")");
		}
	}

	// There must be a single element
	// in stack now which is the required
	// infix.
	return s[s.length-1];
}

// Driver code
let exp = "ab*c+";
document.write( getInfix(exp));
