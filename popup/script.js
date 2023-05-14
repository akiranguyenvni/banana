const openPopupBtn = document.getElementById("openPopupBtn");
const closePopupBtn = document.getElementById("closePopupBtn");
const container = document.getElementById("container");

openPopupBtn.addEventListener("click", () => {
  console.log("open");
  container.classList.add("active");
})

closePopupBtn.addEventListener("click", () => {
  console.log("close");
  container.classList.remove("active");
})
