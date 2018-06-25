const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
 
let index = 0;

function init() {
  // your code here
  const key = e.key;
  if (key === codes[i]) {
    index++;
    if (index === codes.length) {
      alert('Hurray!');
      
      index = 0;
    }
  } else {
    index = 0;
  }
}

  function triggerKeyDown(key) {
    const keyboardEvent = new KeyboardEvent("keydown", { key });
    document.body.dispatchEvent(keyboardEvent);
  }
  
  init();