'use strict';

const addHandlers = function() {
  let egg = new Egg();

  ///hotline bling gif
  egg.addCode("h,o,t,l,i,n,e,b,l,i,n,g", function() {
    console.log('test');
    $('#egggif').fadeIn(500, function() {
        window.setTimeout(function() { $('#egggif').hide(); }, 4000);
  });

  }).listen();

};

module.exports = {
  addHandlers
};
