// DOM
const sidebarOpenBtn = document.querySelector(".nav__toggle");
const sidebarCloseBtn = document.querySelector(".sidebar__toggle");
const sidebar = document.querySelector(".sidebar");

console.log(sidebarOpenBtn);

function openSideBar() {
    sidebar.style.display = "flex";
}

function CloseSideBar() {
    sidebar.style.display = "none";
}

function main() {
    sidebarOpenBtn.onclick = openSideBar;
    sidebarCloseBtn.onclick = CloseSideBar;
}

main();