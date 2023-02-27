<script src="script.js">
        
// DOM element references
const menuItems = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

// Add click event listener to menu items
menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener('click', () => {
    // Remove active class from all menu items and sections
    menuItems.forEach((item) => item.classList.remove('active'));
    sections.forEach((section) => section.classList.remove('active'));

    // Add active class to clicked menu item and section
    menuItem.classList.add('active');
    sections[index].classList.add('active');
  });
});

// Show and hide menu on mobile devices
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('show');
});
</script>