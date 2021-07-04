const smoothScroll = () => {

  const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"]):not(a[href="#close"]');

  smoothScrollElems.forEach(link => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      const id = link.getAttribute('href').substring(1);
  
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
}

export default smoothScroll;