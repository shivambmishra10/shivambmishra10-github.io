const menu = document.getElementsByClassName('menu-items')[0];
const menuToggler = document.getElementById('menu-toggler');
const btn = document.getElementById('btn');
menu.classList.add('nav-hidden');
menuToggler.addEventListener('click', () => {
  menu.classList.toggle('nav-visible');
  menu.classList.toggle('nav-hidden');
  menu.style.display='flex';
  menuToggler.classList.toggle('bi-list');
  menuToggler.classList.toggle('bi-x-lg');
});
const list = Array.from(document.getElementsByClassName('list-items'));
window.onclick = (e) => {
  if (e.target != menuToggler) {
    menu.classList.add('nav-hidden');
    menu.classList.remove('nav-visible');
    menuToggler.classList.add('bi-list');
    menuToggler.classList.remove('bi-x-lg');
  }
}
list.forEach((element) => {
  element.addEventListener('click', () => {
    menu.classList.add('nav-hidden');
    menu.classList.remove('nav-visible');
  })
});