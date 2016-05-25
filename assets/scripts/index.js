'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

const eventHandlers = require('./easter_eggs.js');
// use require without a reference to ensure a file is bundled
// require('./example');


$(() => {
  eventHandlers.addHandlers();
  $('.easterEgg').hide();
});
