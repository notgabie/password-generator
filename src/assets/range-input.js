for (let e of document.querySelectorAll(
  'input[type="range"].slider-progress'
)) {
  console.log("Initializing range input:", e);
  e.style.setProperty("--value", e.value);
  e.style.setProperty("--min", e.min == "" ? "0" : e.min);
  e.style.setProperty("--max", e.max == "" ? "100" : e.max);
  e.addEventListener("input", () => {
    e.style.setProperty("--value", e.value);
    console.log("Updating value:", e.value);
  });
}
