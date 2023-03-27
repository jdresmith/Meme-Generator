const myForm = document.getElementById("meme-form");
const memeContainer = document.getElementById("meme");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const joke = myForm.elements["top-text"].value;
  const punchline = myForm.elements["bottom-text"].value;
  const imageURL = myForm.elements["image"].value;
  const meme = document.createElement("div");
  meme.style.height = "400px";
  meme.style.width = "400px";
  meme.style.display = "flex";
  meme.style.backgroundImage = `url(${imageURL})`;
  meme.style.flexDirection = "column";
  meme.style.justifyContent = "space-between";
  meme.style.backgroundSize = "cover";
  meme.style.padding = "20px";
  meme.innerHTML = `<p>${joke}</p><p>${punchline}</p>`;
  memeContainer.append(meme);

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove Meme";
  removeBtn.addEventListener("click", () => {
    memeContainer.removeChild(meme);
  });

  memeContainer.append(meme);
  memeContainer.append(removeBtn);
});
