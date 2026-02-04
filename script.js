const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redNum = document.getElementById("redNum");
const greenNum = document.getElementById("greenNum");
const blueNum = document.getElementById("blueNum");

const colorPicker = document.getElementById("colorPicker");

const colorBox = document.getElementById("colorBox");
const rgbValue = document.getElementById("rgbValue");
const hexValue = document.getElementById("hexValue");

function clamp(value) {
  return Math.max(0, Math.min(255, value));
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    Number(r).toString(16).padStart(2, "0") +
    Number(g).toString(16).padStart(2, "0") +
    Number(b).toString(16).padStart(2, "0")
  ).toUpperCase();
}

function hexToRgb(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
}

function updateFromRGB(r, g, b) {
  r = clamp(r);
  g = clamp(g);
  b = clamp(b);

  red.value = redNum.value = r;
  green.value = greenNum.value = g;
  blue.value = blueNum.value = b;

  const rgb = `rgb(${r}, ${g}, ${b})`;
  const hex = rgbToHex(r, g, b);

  colorBox.style.backgroundColor = rgb;
  rgbValue.textContent = rgb;
  hexValue.textContent = hex;
  colorPicker.value = hex;
}

/* Eventos sliders */
red.addEventListener("input", () =>
  updateFromRGB(red.value, green.value, blue.value)
);
green.addEventListener("input", () =>
  updateFromRGB(red.value, green.value, blue.value)
);
blue.addEventListener("input", () =>
  updateFromRGB(red.value, green.value, blue.value)
);

/* Eventos inputs numéricos */
redNum.addEventListener("input", () =>
  updateFromRGB(redNum.value, greenNum.value, blueNum.value)
);
greenNum.addEventListener("input", () =>
  updateFromRGB(redNum.value, greenNum.value, blueNum.value)
);
blueNum.addEventListener("input", () =>
  updateFromRGB(redNum.value, greenNum.value, blueNum.value)
);

/* Evento color picker */
colorPicker.addEventListener("input", () => {
  const { r, g, b } = hexToRgb(colorPicker.value);
  updateFromRGB(r, g, b);
});

/* Inicializar */
updateFromRGB(0, 0, 0);
