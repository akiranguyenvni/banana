const myText = "Hello everyone ~ Have a nice day!! <3"
let idx = 0;

const writeText = () => {
  document.body.innerText = myText.slice(0, idx);
  idx++;

  if (idx > myText.length + 10) {
    idx = 0;
  }
}
setInterval(writeText, 100);
