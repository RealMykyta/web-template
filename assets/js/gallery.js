const gallItem = document.querySelectorAll(".gall__item");

document.querySelector(".gall__cats").addEventListener("click", event => {
    if (event.target.className !== "gall__btn") return false;

    let filterClass = event.target.dataset["btn"];

    gallItem.forEach(elem => {
        elem.classList.remove("gall__hide");
        if (!elem.classList.contains(filterClass) && filterClass !== "all") {
            elem.classList.add("gall__hide");
        }
    });
});
