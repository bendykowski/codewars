const snail = matrix => {
  const output = matrix[0];
  const maxMove = matrix.length - 1;
  const rotateVector = v => [v[1], v[0] * -1]

  for (let i = maxMove, p = [0, maxMove], v = [0, 1]; i > 0; i--) {
    for (let j = i * 2; j > 0; j--) {
      if (j % i === 0) v = rotateVector(v);
      p = [p[0] + v[0], p[1] + v[1]];
      output.push(matrix[p[0]][p[1]]);
    }
  }

  return output;
}

module.exports = snail;
