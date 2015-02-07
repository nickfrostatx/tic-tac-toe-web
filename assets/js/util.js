'use strict';

var forEach = function(items, func) {
  for (var i = 0; i < items.length; i++) {
    func(items[i], i);
  };
};
