const _board = [
    ['.', '9', '.', '.', '4', '2', '1', '3', '6'],
    ['.', '.', '.', '9', '6', '.', '4', '8', '5'],
    ['.', '.', '.', '5', '8', '1', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
    ['5', '1', '7', '2', '.', '.', '9', '.', '.'],
    ['6', '.', '2', '.', '.', '.', '3', '7', '.'],
    ['1', '.', '.', '8', '.', '4', '.', '2', '.'],
    ['7', '.', '6', '.', '.', '.', '8', '1', '.'],
    ['3', '.', '.', '.', '9', '.', '.', '.', '.'],
];
sodokoSolver(_board);
console.log(_board);
DisplayResult(_board);

function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}


function sodokoSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == '.') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = `${k}`;
          if (sodokoSolver(data)) {
           return true;
          } else {
           data[i][j] = '.';
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}

function DisplayResult(board) {
  // ...
  var theResult = board.join("||");
  var placeholder = $('#placeholderId'); // jQuery selector by id
  placeholder.html(theResult); // set HTML content of placeholder element
}

function toggleTitle() {
  var x = document.getElementById("MyTitle");
  var y = document.getElementById("MyTitleButton");
  if (x.innerHTML === "Alec's Fantastic Sudoku Solver") {
    x.innerHTML = "Alec's Intentionally Bad Sudoku Solver";
    y.innerHTML = "Click here if you have changed your mind"
  } else {
    x.innerHTML = "Alec's Fantastic Sudoku Solver";
    y.innerHTML = "Click here if you do not like The Sudoku Solver"
  }
}