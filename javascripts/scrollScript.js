// Change style of navbar on scroll
window.onscroll = function() {
   scrollButtonColor()
};

function scrollButtonColor() {
   var navbar = document.getElementById("myNavbar");
   var homeB = document.getElementById("homeButton");
   var contactB = document.getElementById("contactButton");
   var portfolioB = document.getElementById("portfolioButton");
   var searchB = document.getElementById("searchButton");
   var aboutB = document.getElementById("aboutButton");
   var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
   if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
      navbar.className = "viice-bar";
      homeButton.className = "viice-bar-item viice-button  viice-verydark  viice-hover-main-color viice-text-white";
      contactButton.className = "viice-bar-item viice-button  viice-verydark  viice-hover-main-color viice-text-white";
      portfolioButton.className = "viice-bar-item viice-button  viice-verydark  viice-hover-main-color viice-text-white";
      aboutButton.className = "viice-bar-item viice-button  viice-verydark  viice-hover-main-color viice-text-white";
   } else {

      navbar.className = "viice-bar";
      homeButton.className = "viice-bar-item viice-button  viice-main-color  viice-hover-verydark viice-text-aqua";
      contactButton.className = "viice-bar-item viice-button  viice-main-color  viice-hover-verydark viice-text-aqua";
      portfolioButton.className = "viice-bar-item viice-button  viice-main-color  viice-hover-verydark viice-text-aqua";
      aboutButton.className = "viice-bar-item viice-button  viice-main-color  viice-hover-verydark viice-text-aqua";
   }
}
// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
   var x = document.getElementById("navDemo");
   if (x.className.indexOf("viice-show") == -1) {
      x.className += " viice-show";
   } else {
      x.className = x.className.replace(" viice-show", "");
   }
}
