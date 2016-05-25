# Egg.js Talk

Easter eggs are fun, and I want to show you how to use
Egg.js' simple JS library on how to add web easter eggs by watching the user's keystrokes.

## Objectves

By the end of this, developers should be able to:

-   Reference the Egg.js library.
-   Implement Egg.js in a project.
-   Write code that sets up easter egg events.
-   Add easter eggs within a web application.

## Preparation

By the end of this, developers should be able to:

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Install dependencies with `npm install`.


## What is Egg.js?

Egg.js is a JS library that allows you to incorporate easter eggs within your web application.

How does it do it? It listens for the correct combination of keystrokes to make magic happen.

Still skeptical about what I'm saying? Run `grunt serve` and then type this classic cheatcode, once you are on the website:

**"Hint 'up', 'down', 'left', 'right' are the arrow keys"**

(up, up, down, down, left, right, left, right, b, a)

Boom Magic.

## How Egg.js Works

As I mentioned earlier, this is a simple javascript library and involves very little steps to implement into a project.

The first step is to include the egg.js file in your html:

```html

<script type="text/javascript" src="https://cdn.rawgit.com/mikeflynn/egg.js/master/egg.min.js"></script>

```

Second step is to create a variable and use the Egg constructor function:

```js

let egg = new Egg();
egg

```

Next, use the "addCode()" function with a string of keystroke combinations followed by a function to trigger the event:

```js

egg.addCode("up,up,down,down,left,right,left,right,b,a", function() {
  ///some code here
})

```
Finally, add the .listen() method at the end of your code.

```js

egg.addCode("up,up,down,down,left,right,left,right,b,a", function() {
  ///some code here
}).listen();

```

## Demo: Adding a video to appear with Egg.js

Now that we have the basic steps to use Egg.js, let's
have a video appear somewhere on the webpage.

First, let me head over to my easter_eggs.js file and add this line of code:

```js

egg.addCode("h,o,t,l,i,n,e,b,l,i,n,g", function() {
  ///some code here

}).listen();

```

Alright, now let's trigger our event by appending a video to a div called 'musicVid' in our html.

```js
egg.addCode("h,o,t,l,i,n,e,b,l,i,n,g", function() {
  $('.musicVid').append("<iframe class='popUp' width='560' height='315' src='https://www.youtube.com/embed/uxpDa-c-4Mc?autoplay=1&start=20' frameborder='0' allowfullscreen autoplay></iframe>");
  }).listen();

```

Awesome, let's test it out.

## Code Along: Adding a link to the navbar-nav

Same steps as before, lets add a couple of links to our nav bar in html:

```html
<li class="easterEgg"><a href='#'>Home</a></li>
<li class="easterEgg"><a href='#'>About</a></li>
<li class="easterEgg"><a href='#'>Contact Us</a></li>

```

Now let's head to our easter_eggs JS file and add our easter egg:

```js
egg.addCode("n,a,v", function() {
  $('.easterEgg').show();

}).listen();

```

Let's test it out!

## Lab: Practice Adding Easter Eggs

Now, take some time to write your own easter egg!

If you need inspiration for ideas, here are a couple:

-  Find a way to remove the youtube video when it appears.
- Change the color of an element on the web page.
- Move an elements position with an easter egg.

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
