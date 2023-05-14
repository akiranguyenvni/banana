const myText = "My viewers are the best!! <3";
let idx = 10;

function writeText() {
  document.body.innerText = myText.slice(0, idx);
  idx += 1;

  if (idx > myText.length + 5) {
    idx = 0;
  }
}

setInterval(writeText, 100);
