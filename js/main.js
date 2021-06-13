function mobileNav() {
  let mobileNav = document.querySelector(".mobile-nav");
  if (mobileNav.style.display === "none") {
    mobileNav.style.display = "flex";
  } else {
    mobileNav.style.display = "none";
  }
}
