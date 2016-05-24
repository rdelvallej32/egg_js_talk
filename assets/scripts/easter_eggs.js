'use strict';

const addHandlers = function() {
  let egg = new Egg();

  ///hotline bling gif
  egg.addCode("h,o,t,l,i,n,e,b,l,i,n,g", function() {
    console.log('test');
    $('.musicVid').append("<iframe class='popUp' width='560' height='315' src='https://www.youtube.com/embed/uxpDa-c-4Mc?autoplay=1&start=20' frameborder='0' allowfullscreen autoplay></iframe>");

  }).listen();

};

module.exports = {
  addHandlers
};
