// Change style of navbar on scroll and apply immediately on load
window.onscroll = function () {
    scrollButtonColor();
    updateMobileBg();
};
window.addEventListener("load", function () {
    scrollButtonColor();
    updateMobileBg();
});

function scrollButtonColor() {
    var navbar = document.getElementById("myNavbar");
    var hamburger = document.getElementById("hamburgerButton");
    var navDemoLinks = document.querySelectorAll("#navDemo a");
    var navDemo = document.getElementById("navDemo");
    var menuOpen = navDemo && navDemo.className.indexOf("viice-show") !== -1;
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 1 - navbar.offsetHeight;
    if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
        navbar.className = "viice-bar";
        homeButton.className = "viice-bar-item viice-button viice-verydark viice-hover-main-color viice-text-white";
        ResumeButton.className = "viice-bar-item viice-button viice-hide-small viice-verydark viice-hover-main-color viice-text-white";
        portfolioButton.className = "viice-bar-item viice-button viice-hide-small viice-verydark viice-hover-main-color viice-text-white";
        aboutButton.className = "viice-bar-item viice-button viice-hide-small viice-verydark viice-hover-main-color viice-text-white";
        if (hamburger) hamburger.className = menuOpen
            ? "viice-bar-item viice-button viice-hide-large viice-hide-medium viice-main-color viice-text-white"
            : "viice-bar-item viice-button viice-hide-large viice-hide-medium viice-verydark viice-hover-main-color viice-text-white";
        navDemoLinks.forEach(function (el) {
            el.className = "viice-bar-item viice-button viice-nearblack viice-hover-verydark viice-text-white";
        });
    } else {
        navbar.className = "viice-bar";
        homeButton.className = "viice-bar-item viice-button viice-main-color viice-hover-verydark viice-text-aqua";
        ResumeButton.className = "viice-bar-item viice-button viice-hide-small viice-main-color viice-hover-verydark viice-text-aqua";
        portfolioButton.className = "viice-bar-item viice-button viice-hide-small viice-main-color viice-hover-verydark viice-text-aqua";
        aboutButton.className = "viice-bar-item viice-button viice-hide-small viice-main-color viice-hover-verydark viice-text-aqua";
        if (hamburger) hamburger.className = menuOpen
            ? "viice-bar-item viice-button viice-hide-large viice-hide-medium viice-verydark viice-text-aqua"
            : "viice-bar-item viice-button viice-hide-large viice-hide-medium viice-main-color viice-hover-verydark viice-text-aqua";
        navDemoLinks.forEach(function (el) {
            el.className = "viice-bar-item viice-button viice-verydark viice-hover-main-color viice-text-aqua";
        });
    }
}
// Scale the map widget to fit its parent width (map is hardcoded at 400px by the third-party script)
function scaleMap() {
    var wrapper = document.querySelector('.map-scale-wrapper');
    if (wrapper) {
        var parent = wrapper.parentElement;
        var style = getComputedStyle(parent);
        var availableWidth = parent.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
        wrapper.style.width = '400px';
        wrapper.style.zoom = availableWidth / 400;
    }
}
scaleMap();
window.addEventListener('resize', scaleMap);

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("viice-show") == -1) {
        x.className += " viice-show";
    } else {
        x.className = x.className.replace(" viice-show", "");
    }
    scrollButtonColor();
}

// Mobile fixed background — swaps image based on which parallax section is in view
var mobileBgEl = document.getElementById("mobile-bg");
var mobileSections = [
    { selector: ".bgimg-1", src: "resources/titleImage.jpg" },
    { selector: ".bgimg-2", src: "resources/fountain.png" },
    { selector: ".bgimg-3", src: "resources/earth.jpg" }
];

function updateMobileBg() {
    if (!mobileBgEl || window.innerWidth > 600) return;
    var active = mobileSections[0].src;
    mobileSections.forEach(function (s) {
        var el = document.querySelector(s.selector);
        if (el && el.getBoundingClientRect().top < window.innerHeight) {
            active = s.src;
        }
    });
    var newUrl = 'url("' + active + '")';
    if (mobileBgEl.style.backgroundImage !== newUrl) {
        mobileBgEl.style.backgroundImage = newUrl;
    }
}

// Prevent drag on all elements (for Firefox which ignores -webkit-user-drag)
document.addEventListener("dragstart", function (e) { e.preventDefault(); });

// Close mobile menu when tapping anywhere outside it or scrolling
function closeNavDemo() {
    var nav = document.getElementById("navDemo");
    if (nav && nav.className.indexOf("viice-show") !== -1) {
        nav.className = nav.className.replace(" viice-show", "");
        scrollButtonColor();
    }
    var hamburger = document.getElementById("hamburgerButton");
    if (hamburger) hamburger.blur();
}

document.addEventListener("click", function (e) {
    var hamburger = document.getElementById("hamburgerButton");
    if (hamburger && !hamburger.contains(e.target)) {
        closeNavDemo();
    }
});

window.addEventListener("scroll", closeNavDemo, { passive: true });
