const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
