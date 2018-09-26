module.exports = function solveEquation(equation) {
  const parsedEquation = equation.split(' ');
  const op1 = parsedEquation[3];
  const op2 = parsedEquation[7]; 
  const a = parsedEquation[0];
  const b = parsedEquation[4] * (op1 === '-' ? - 1 : 1 );
  const c = parsedEquation[8] * (op2 === '-' ? - 1 : 1 );
  const D = Math.sqrt(b * b - 4 * a * c);
  const x1 = Math.round((-b + D) / (2 * a));
  const x2 = Math.round((-b - D) / (2 * a));

  return [x1, x2].sort(function (a, b) {return a - b});
}
