const inputWrapper = document.getElementById("inputWrapper");
const currentInput = document.getElementById("textInput");
const textDiv = document.createElement("div");
const charMessage = document.createTextNode("");

textDiv.id = "charsMessage";
inputWrapper.appendChild(textDiv);
textDiv.appendChild(charMessage);

charMessage.id = "charMessage";

currentInput.addEventListener("input", (e) => {
  const currentLength = e.target.value.length;
  const maxLength = e.target.maxLength;
  charMessage.textContent = `You have ${
    maxLength - currentLength
  } characters remaining`;
});
