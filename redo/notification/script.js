const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  const noti = document.createElement("div");
  noti.innerText = "This is crazy!";
  noti.classList.add("toast");

  container.appendChild(noti);

  setTimeout(() => {
    noti.remove();
  }, 3000);
})
