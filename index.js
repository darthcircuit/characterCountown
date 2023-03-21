const inputWrapper = document.getElementById("inputWrapper");
const currentInput = document.getElementById("textInput");
const charMessage = document.createTextNode("");

inputWrapper.appendChild(charMessage);

charMessage.id = "charMessage";

currentInput.addEventListener("input", (e) => {
  const currentLength = e.target.value.length;
  const maxLength = e.target.maxLength;
  charMessage.textContent = `You have ${
    maxLength - currentLength
  } characters remaining`;
});
