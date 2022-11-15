// Mobile nav

function showMenu(e) {
  // const el = e.target;

  // if (header.classList.contains("nav-open")) {
  //   header.classList.remove("nav-open");
  // } else {
  //   header.classList.add("nav-open");
  // }
  //the same as above
  header.classList.toggle("nav-open");
}
const header = document.querySelector(".header");
const navBtn = document.querySelector(".btn-mobile-nav");
navBtn.addEventListener("click", showMenu);

//////////////////////////////////////////////////
// Smooth scrolling
const allLinks = document.querySelectorAll("a");

allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scroll to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    //Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    //Close mobile nav
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});
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
