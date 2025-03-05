window.addEventListener("scroll", function() {
    let nav = document.getElementById("navigatsiya");
        if (window.scrollY > 0) {
            nav.classList.add("scroll");
        }else{
            nav.classList.remove("scroll");
        }
        });