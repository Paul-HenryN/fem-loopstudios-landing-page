// DOM
const sidebarOpenBtn = document.querySelector(".nav__toggle");
const sidebarCloseBtn = document.querySelector(".sidebar__toggle");
const sidebar = document.querySelector(".sidebar");

console.log(sidebarOpenBtn);

function openSideBar() {
    sidebar.style.transform = "translateX(0)";
}

function CloseSideBar() {
    sidebar.style.transform = "translateX(100%)";
}

function main() {
    sidebarOpenBtn.onclick = openSideBar;
    sidebarCloseBtn.onclick = CloseSideBar;
}

main();