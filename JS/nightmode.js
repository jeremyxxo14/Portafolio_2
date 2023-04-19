const actualizarNavbar = (tema) => {
    const navbarMobile = document.querySelector(".navbar_mobile");
    if (tema === "dark") {
        navbarMobile.setAttribute("data-bs-theme", "dark");
    } else {
        navbarMobile.setAttribute("data-bs-theme", "light");
    }
}

const actualizarCollapse = (tema) => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (tema === "dark") {
        navbarCollapse.setAttribute("data-bs-theme", "dark");
    } else {
        navbarCollapse.setAttribute("data-bs-theme", "light");
    }
}

const actualizarLoader = (tema) => {
    const loder = document.querySelector("#loader");
    if (tema === "dark") {
        loder.setAttribute("data-bs-theme", "dark");
    } else {
        loder.setAttribute("data-bs-theme", "light");
    }
}

const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill white-icon");
    document.querySelector("#tema-btn").setAttribute("class", "bi bi-sun-fill white-icon");
    localStorage.setItem("tema", "dark");
    actualizarNavbar("dark");
    actualizarCollapse("dark");
    actualizarLoader("dark");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
    document.querySelector("#tema-btn").setAttribute("class", "bi bi-moon-fill");
    localStorage.setItem("tema", "light");
    actualizarNavbar("light");
    actualizarCollapse("light");
    actualizarLoader("light");
}

const CambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light" ? temaOscuro() : temaClaro();
}

window.onload = () => {
    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado === "dark") {
        temaOscuro();
    } else if (temaGuardado === "light") {
        temaClaro();
    }

}

window.addEventListener("load", function() {
    var loader = document.getElementById("loader");
    loader.style.display = "none";
}); 

window.addEventListener("scroll", function() {
    const btnToTop = document.querySelector("#btn-to-top");
    if (window.pageYOffset > 100) {
    btnToTop.classList.add("active");
    } else {
    btnToTop.classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".btn-to-top").addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});









