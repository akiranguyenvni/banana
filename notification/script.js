const btn = document.getElementById("btn");
const container = document.getElementById("container");

if (btn) {
  btn.addEventListener("click", () => {
    notify();
  })
}

function notify() {
  const noti = document.createElement("div");
  noti.classList.add("toast");
  noti.innerText = "This thing is crazy!";

  container.appendChild(noti);

  setTimeout(() => {
    noti.remove();
  }, 3000);
}
