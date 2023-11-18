let nameText = document.querySelector("#name-text");
let renameButton = document.querySelector("#change-button");
let renameInput = document.querySelector("#text-input");
renameButton.addEventListener("click", () => {
  let name = renameInput.value;
  nameText.innerHTML = "Hello, " + name;
});
