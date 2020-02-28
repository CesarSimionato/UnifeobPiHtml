const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeVerticalBar(e) {
  const verticalBar = document.querySelector('[data-anime="verticalBar"]');
  const navBar = document.querySelector('[data-anime="navBar"]');
  const up = document.querySelector('[data-anime="up"]');
  const windowTop = window.pageYOffset;

  if (windowTop >= 800) {
    up.classList.add(animationClass);
  } else {
    up.classList.remove(animationClass);
  }

  if (windowTop > 0) {
    verticalBar.classList.add(animationClass);
    navBar.classList.add(animationClass);
  } else {
    verticalBar.classList.remove(animationClass);
    navBar.classList.remove(animationClass);
  }
};

function selectMenu(){
  const windowTop = window.pageYOffset;
  
  if(windowTop < 800){
    links.forEach(link => {
      link.classList.remove('selected')
    })
    const linksNavBar = document.querySelectorAll('a[href^="#navBar"]');
    linksNavBar.forEach(link => {
      link.classList.add('selected')
    })
  } 

  if(windowTop < 1600 && windowTop >= 500){
    links.forEach(link => {
      link.classList.remove('selected')
    })
    const linksAbout = document.querySelectorAll('a[href^="#about"]');
    linksAbout.forEach(link => {
      link.classList.add('selected')
    })
  } 

  if(windowTop < 2400 && windowTop >= 1000){
    links.forEach(link => {
      link.classList.remove('selected')
    })
    const linksContact = document.querySelectorAll('a[href^="#contact"]');
    linksContact.forEach(link => {
      link.classList.add('selected')
    })
  } 

}

window.addEventListener('scroll', () => {
  selectMenu();
  if (target) {
    animeVerticalBar();
  }
});