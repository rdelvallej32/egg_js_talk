'use strict';

const addHandlers = function() {
  let egg = new Egg();

  ///example for the class
  egg.addCode("up,up,down,down,left,right,left,right,b,a", function() {
    jQuery('#egggif').fadeIn(500, function() {
      window.setTimeout(function() { jQuery('#egggif').hide(); }, 5000);
    });
  }).listen();

};

module.exports = {
  addHandlers
};
