var Space = function(elem, index) {
  this.elem = elem;
  this.index = index;
  this.value = 0;
};

Space.prototype.setValue = function(value) {
  this.value = value;
  
  if (value == 0) {
    this.elem.classList.add('empty');
  } else {
    this.elem.classList.remove('empty');
  };

  if (value == 1) {
    this.elem.classList.add('me');
  } else {
    this.elem.classList.remove('me');
  };

  if (value == 2) {
    this.elem.classList.add('opponent');
  } else {
    this.elem.classList.remove('opponent');
  };
};

Space.prototype.setWin = function(win) {
  if (win) {
    this.elem.classList.add('win');
  } else {
    this.elem.classList.remove('win');
  };
};

Space.prototype.click = function() {
  game.click(this.index);
};
