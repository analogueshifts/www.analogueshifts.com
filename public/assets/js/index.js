const navBtn = document.querySelector("#navBtn");
const navBar = document.querySelector("#navBar");

navBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (navBar.classList.contains("hidden")) {
        navBar.classList.remove("hidden");
    } else {
        navBar.classList.add("hidden");
    }
});
