const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', alter)
})

function alter(e){
  e.preventDefault();
  const id = this.getAttribute('href');
  const to = document.querySelector(id).offsetTop;
  window.scrollTo(null, to);
}

