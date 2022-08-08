// DOM
const sidebarOpenBtn = document.querySelector(".nav__toggle");
const sidebarCloseBtn = document.querySelector(".sidebar__toggle");
const sidebar = document.querySelector(".sidebar");

console.log(sidebarOpenBtn);

function openSideBar() {
  sidebar.style.transform = "translateX(0)";
  sidebar.style.visibility = "visible";
}

function CloseSideBar() {
  sidebar.style.transform = "translateX(100%)";

  setTimeout(() => {
    sidebar.style.visibility = "hidden";
  }, 500);
}

function main() {
  sidebarOpenBtn.onclick = openSideBar;
  sidebarCloseBtn.onclick = CloseSideBar;
}

main();
