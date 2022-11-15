// Fixing flexbox property missing in some Safari versions
function checkFlexGap() {
  let flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));
  document.body.appendChild(flex);
  let isSupported = flex.scrollHeight === 1;
  if (!isSupported) document.body.classList.add("no-flex-gap");
}
checkFlexGap();

const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

// Mobile nav
function showMenu(e) {
  // const el = e.target;
  const header = document.querySelector(".header");
  console.log(header.classList.contains("nav-open"));
  if (header.classList.contains("nav-open")) {
    header.classList.remove("nav-open");
  } else {
    header.classList.add("nav-open");
  }
}
const navBtn = document.querySelector(".btn-mobile-nav");
navBtn.addEventListener("click", showMenu);
