const menu = document.querySelector('.menu');
const menuSection = menu.querySelector('.menu-section');
const menuArrow = menu.querySelector('.menu-mobile-arrow');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuTrigger = document.querySelector('.menu-mobile-trigger');
const menuOverlay = document.querySelector('.overlay');
let subMenu;

menuSection.addEventListener('click', (e) => {
   if (!menu.classList.contains('active')) {
      return;
   }
   if (e.target.closest('.menu-item-has-children')) {
      const hasChildren = e.target.closest('.menu-item-has-children');
      showSubMenu(hasChildren);
   }
});

menuArrow.addEventListener('click', () => {
   hideSubMenu();
});

menuTrigger.addEventListener('click', () => {
   toggleMenu();
});

menuClosed.addEventListener('click', () => {
   toggleMenu();
});

menuOverlay.addEventListener('click', () => {
   toggleMenu();
});

// Show & Hide Toggle Menu Function
function toggleMenu() {
   menu.classList.toggle('active');
   menuOverlay.classList.toggle('active');
}

// Show the Mobile Side Menu Function


// Hide the Mobile Side Menu Function

