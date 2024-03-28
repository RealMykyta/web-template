let elementsArray = document.querySelectorAll(".blog__post");

window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("blog__post_focus");
        } else {
            elem.classList.remove("blog__post_focus");
        }
    }
}
fadeIn();
