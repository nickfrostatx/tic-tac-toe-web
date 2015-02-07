window.onload = function() {
  var board = document.getElementsByClassName('board')[0];
  var turn = document.getElementsByClassName('whichturn')[0];
  game.setBoard(board);
  game.setTurnElem(turn);

  forEach(document.getElementsByClassName('space'), function(elem, i) {
    var space = new Space(elem, i);
    elem.onclick = function() {
      if (this.classList.contains('empty') && board.classList.contains('turn')) {
        space.click();
      };
    };
    game.setSpace(i, space);
  });

  game.setTurn(0, 'Waiting for opponent', 'waiting');

  socket.connect();
};
