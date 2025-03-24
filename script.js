const charLen = document.getElementById("charLen");
const range = document.getElementById("range");

charLen.textContent = range.value;

range.addEventListener('input', e => {
    charLen.textContent = range.value;
})