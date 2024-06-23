function toggleContent() {
  const letter = document.querySelector(".letter");
  const text = document.querySelector(".text");
  const isHidden =
    letter.style.display === "none" || letter.style.display === "";

  letter.style.display = isHidden ? "block" : "none";
  text.style.display = isHidden ? "block" : "none";
}
