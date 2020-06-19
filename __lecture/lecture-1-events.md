# 2.4.1 - JS Events

---

## Situation

Open the door, when someone is there.

<img src='./assets/door.gif' />

---

## Event-driven Programming

<img src='./assets/fig1_event.png' />

---

### Event Types

<img src='./assets/event_types.jpg' />

[Source](https://data-flair.training/blogs/javascript-event-types/)

---

- User Interface Events: `load`, `unload`, `error`, `resize`, `scroll`
- Focus and Blur Events: `focus`, `blur`, `focusin`\*, `focusout`\*
- Mouse Events: `click`, `dblclick`, `mousedown`, `mouseup`, `mouseover`, `mouseout`, `mousemove`
- Keyboard Events: `input`, `keydown`, `keypress`, `keyup`
- Form Events: `submit`, `change`, `input`

\*_new; not supported by Firefox_

Focus and blur events fire when the HTML elements **you can interact with** gain/lose focus.



---

### Events and DOM Nodes

All DOM nodes have methods we can use to _notify_ us of an event.

- [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), [`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

```html
<div id="door">🚪</div>
```

```js
// Example - install doorbell

// Target element - create door
const door = document.querySelector('#door');

// On click, ding dong will be logged
door.addEventListener('click',function() {
  console.log('ding dong');
});

// For Bob specifically
const doorbell = function() {
  // who's there?
  console.log('Is it Bob?');
  // If yes, then disable doorbell
  door.removeEventListener('click', doorbell);
}); 
door.addEventListener('click', doorbell);

// 'click' can be anything, like mouseover

```

---

### [Event Object](https://www.w3schools.com/jsref/obj_event.asp)

Event handler functions are passed an argument, when events are triggered.

This object includes lots of stuff.

- `preventDefault()`
- `target`
- `stopPropagation()`



---

### Default Actions

Some events have _default_ actions associated to them.

- click a link
- press down arrow
- click `submit` in a Form

In most cases handlers are called _before_ the default action takes place.

You can prevent the _default_ action from happening by calling `event.preventDefault();` in the eventListener function.

<!-- Mostly in the case of forms, because there's a lot of default options, especially with "Submit". Sometimes we don't want these to happen/do something else. E.g. validate each input, then submit manually, highlight errors, etc. -->

---

### target

- The `target` property refers to the node where they **originated**. (example)
- With an `input`, use `event.target.value` to read what was entered into an `input`.

---

### Propagation

Handlers registered on nodes with children will also receive events that happen in the children.

```html
<div>
  <ul>
    <li>
      <a href="#"><img scr="..." /></a>
    </li>
    ...
  </ul>
</div>
```

---

### 3 Phases of Event Propagation

- The Event Capture Phase
- The Event Target Phase
- The Event Bubbling Phase

**most** events bubble

---

<img src='./assets/propagation_bubbling.png' />

[Source](https://www.sitepoint.com/event-bubbling-javascript/)

---

`<p>A paragraph with a <button id="the-btn">button</button>.</p>` [🐇](https://codepen.io/gnomecircle/pres/BajQgzy?editors=1011)

```js
let para = document.querySelector('p');
let button = document.querySelector('button');

para.addEventListener('mousedown', () => {
  console.log('Handler for paragraph.');
});

button.addEventListener('mousedown', (event) => {
  console.log('Handler for button.');
  if (event.button === 2) {
    event.stopPropagation();
  }
});
```
<!--  -->
---

## Events and the Event Loop

Events can only be processed when _nothing_ else is running.

This means that other page processes will be delayed until there is time to process it.

This can occur if you have long-running event handlers, or _lots_ of short-running ones.

[Read a little more deeply...](https://eloquentjavascript.net/15_event.html)

---

# Balloon Exercise

_source [Eloquent JavaScript](https://eloquentjavascript.net/15_event.html)_

<!--  -->
```js
const balloon = document.querySelector('#balloon');
let balloonSize = 12
balloon.style.fontSize = `${balloonSize}px`;
const RATE = 5;
const LIMIT = 75;

// listen on the up and down arrows
// if up, inflate balloon
// if down, deflate balloon

// if balloon is bigger than x, BOOM

const resize = function() {
  const keyPress = event.key;
  if (keyPress === 'ArrowUp') {
    balloonSize += 10;
    balloon.style.fontSize = `${balloonSize}px`;
  } 
  if (keyPress === 'ArrowDown') {
    balloonSize -= 10;
    balloon.style.fontSize = `${balloonSize}px`;
  }
  if (balloonSize > LIMIT) {
    balloon.innerText = 'BLOWN UP EMOJI';
    const explosion = setInterval(function() {
      balloonSize += 50;
      baloon.style.fontSize = `${balloonSize}px`;

      if (balloonSize > 1000) {
        balloon.style.opacity = 0;
        clearInterval(explosion);
      }
    }, 20);
    document.removeEventListener('keydown', resize);
  }
}
// SHORTER VERSION 

function modifyBalloonSize();
.....

function resize(event) {
  const keyPress = event.key;

  if (keyPress === 'ArrowUp') {
    modifyBalloonSize('more')
  } else if (keyPress === 'ArrowDown') {
    modifyBalloonSize('less')
  }
}


document.addEventListener('keydown', resize);
---