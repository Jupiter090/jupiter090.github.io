function onHamburgerClick() {
  const hamburgerButton = document.querySelector(".close-button");

  if (hamburgerButton.classList.contains("cross")) {
    hamburgerButton.classList.remove("cross");
    hamburgerButton.style.justifyContent = "space-evenly";
    document.querySelector("#mobile-nav").style.left = "-70%";
    return;
  }

  hamburgerButton.classList.add("cross");
  hamburgerButton.style.justifyContent = "center";
  document.querySelector("#mobile-nav").style.left = "0%";
}
