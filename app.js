const navSlider = () => {
  const navToggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('nav-active');
  });
};
navSlider();
