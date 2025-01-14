function solveMatrix() {
    // 1. Get Input Values
    const a11 = parseFloat(document.getElementById('a11').value);
    const a12 = parseFloat(document.getElementById('a12').value);
    const a13 = parseFloat(document.getElementById('a13').value);
    const a21 = parseFloat(document.getElementById('a21').value);
    const a22 = parseFloat(document.getElementById('a22').value);
    const a23 = parseFloat(document.getElementById('a23').value);
    const a31 = parseFloat(document.getElementById('a31').value);
    const a32 = parseFloat(document.getElementById('a32').value);
    const a33 = parseFloat(document.getElementById('a33').value);
    const b1 = parseFloat(document.getElementById('b1').value);
    const b2 = parseFloat(document.getElementById('b2').value);
    const b3 = parseFloat(document.getElementById('b3').value);
  
    // 2. Create the Matrices
    const A = [
      [a11, a12, a13],
      [a21, a22, a23],
      [a31, a32, a33],
    ];
    const b = [b1, b2, b3];
  
    // 3. Calculate the determinant of A
     const detA = a11 * (a22 * a33 - a23 * a32) - a12 * (a21 * a33 - a23 * a31) + a13 * (a21 * a32 - a22 * a31);
  
     if (detA === 0) {
       alert("The determinant of the matrix is zero so we can't compute the inverse");
       return;
      }
  
     // 4. calculate the inverse of A
    const invA = [
          [(a22 * a33 - a23 * a32) / detA, -(a12 * a33 - a13 * a32) / detA, (a12 * a23 - a13 * a22) / detA],
          [-(a21 * a33 - a23 * a31) / detA, (a11 * a33 - a13 * a31) / detA, -(a11 * a23 - a13 * a21) / detA],
          [(a21 * a32 - a22 * a31) / detA, -(a11 * a32 - a12 * a31) / detA, (a11 * a22 - a12 * a21) / detA]
      ];
  
      // 5. Multiply inv(A) * b
      const x1 = invA[0][0] * b[0] + invA[0][1] * b[1] + invA[0][2] * b[2] ;
      const x2 = invA[1][0] * b[0] + invA[1][1] * b[1] + invA[1][2] * b[2] ;
      const x3 = invA[2][0] * b[0] + invA[2][1] * b[1] + invA[2][2] * b[2] ;
  
      // 6. Display Results
    document.getElementById('x1').textContent = x1.toFixed(2);
    document.getElementById('x2').textContent = x2.toFixed(2);
    document.getElementById('x3').textContent = x3.toFixed(2);
  
  }
  