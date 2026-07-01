// Change style of navbar on scroll
window.onscroll = function () {
    scrollButtonColor()
};

function scrollButtonColor() {
    var navbar = document.getElementById("myNavbar");
    var homeB = document.getElementById("homeButton");
    var ResumeB = document.getElementById("ResumeButton");
    var portfolioB = document.getElementById("portfolioButton");
    var searchB = document.getElementById("searchButton");
    var aboutB = document.getElementById("aboutButton");
    var ethicsB = document.getElementById("eButton");
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 1 - navbar.offsetHeight;
    if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
        navbar.className = "viice-bar";
        homeButton.className = "viice-bar-item viice-button  viice-verydark  viice-hover-main-color viice-text-white";
        ResumeButton.className = "viice-bar-item viice-button  viice-verydark  viice-hover-main-color viice-text-white";
        portfolioButton.className = "viice-bar-item viice-button  viice-verydark  viice-hover-main-color viice-text-white";
        aboutButton.className = "viice-bar-item viice-button  viice-verydark  viice-hover-main-color viice-text-white";
    } else {

        navbar.className = "viice-bar";
        homeButton.className = "viice-bar-item viice-button  viice-main-color  viice-hover-verydark viice-text-aqua";
        ResumeButton.className = "viice-bar-item viice-button  viice-main-color  viice-hover-verydark viice-text-aqua";
        portfolioButton.className = "viice-bar-item viice-button  viice-main-color  viice-hover-verydark viice-text-aqua";
        aboutButton.className = "viice-bar-item viice-button  viice-main-color  viice-hover-verydark viice-text-aqua";
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
}
