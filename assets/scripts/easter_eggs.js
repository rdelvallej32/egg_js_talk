'use strict';

const addHandlers = function() {
  let egg = new Egg();

  ///autoplay hotline bling video
  egg.addCode("h,o,t,l,i,n,e,b,l,i,n,g", function() {
    $('.musicVid').append("<iframe class='popUp' width='560' height='315' src='https://www.youtube.com/embed/uxpDa-c-4Mc?autoplay=1&start=20' frameborder='0' allowfullscreen autoplay></iframe>");

  }).listen();

  egg.addCode("n,a,v", function() {
    $('.navbar-nav').append("<li><a href='#'>Home</a></li>");

  }).listen();

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
