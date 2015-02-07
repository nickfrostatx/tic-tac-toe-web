var Game = function() {
  this.boardElem = null;
  this.turnElem = null;
  this.spaces = [null, null, null, null, null, null, null, null, null];
  this.turn = null;
};

Game.prototype.setBoard = function(elem) {
  this.boardElem = elem;
};

Game.prototype.setTurnElem = function(elem) {
  this.turnElem = elem;
};

Game.prototype.setSpace = function(i, space) {
  this.spaces[i] = space;
};

Game.prototype.setTurn = function(turn, msg, cls) {
  this.turn = turn;
  if (turn == 1) {
    this.boardElem.classList.add('turn');
  } else {
    this.boardElem.classList.remove('turn');
  };
  this.turnElem.innerText = msg;
  this.turnElem.className = 'whichturn ' + cls;
};

Game.prototype.start = function(turn) {
  if (turn == 1) {
    this.setTurn(1, 'Your turn', 'me-turn');
  } else {
    this.setTurn(2, 'Opponent\'s turn', 'opponent-turn');
  };
};

Game.prototype.stop = function() {
  forEach(this.spaces, function(space) {
    space.setValue(0);
    space.setWin(false);
  });
  this.setTurn(0, 'Waiting for opponent', 'waiting');
};

Game.prototype.click = function(space) {
  socket.move(space);
  this.move(1, space);
};

Game.prototype.move = function(player, space) {
  this.spaces[space].setValue(player);
  if (this.turn == 1) {
    this.setTurn(2, 'Opponent\'s turn', 'opponent-turn');
  } else {
    this.setTurn(1, 'Your turn', 'me-turn');
  };
};

Game.prototype.setWinners = function(player, winners) {
  var that = this;
  if (player == 1) {
    this.setTurn(0, 'You won!', 'me-turn');
  } else {
    this.setTurn(0, 'You lost', 'opponent-turn');
  };
  forEach(winners, function(space) {
    that.spaces[space].setValue(player);
    that.spaces[space].setWin(true);
  });
};

var game = new Game();
