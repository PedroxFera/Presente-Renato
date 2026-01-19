const video = document.getElementById("video");
const letter = document.getElementById("letter");

video.addEventListener("ended", () => {
  document.body.classList.remove("no-scroll");
  letter.style.display = "block";
  letter.scrollIntoView({ behavior: "smooth" });
});

