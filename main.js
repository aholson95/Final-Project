const favSong = document.querySelector("#fav-Song");
const msg = "Woah cool, me too!"
favSong.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (favSong.value === "Six - All That Remains") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode("Woah cool, me too!")
    );
  }
}