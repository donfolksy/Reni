const menuButton = document.getElementById('menuButton');
const expandableContent = document.querySelector('.expandable-content');

menuButton.addEventListener('click', () => {
  expandableContent.style.display = (expandableContent.style.display === 'none') ? 'block' : 'none';
  
  const icon = menuButton.querySelector('ion-icon');
  if (icon.name === 'menu') {
    icon.name = 'close';
  } else {
    icon.name = 'menu';
  }
});