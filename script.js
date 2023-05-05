const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const menuLinks = document.querySelector('.menu-links');
const links = document.querySelectorAll('.menu-links li a');


const toggle = () =>{
  menuLinks.classList.toggle('show');
  closeMenu.classList.toggle('hidden');
  openMenu.classList.toggle('hidden');
}

for(const link of links){link.addEventListener('click',toggle)};
menu.addEventListener('click',toggle);
