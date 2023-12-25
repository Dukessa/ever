document.addEventListener('DOMContentLoaded', () => {
    addEventListener('click', function (element) {
      if (element.target.className !== 'burger__line' && element.target.className !== 'burger' && element.target.className !== 'menu-hero' && element.target.className !== 'menu__box') {
        document.querySelector(".menu-hero").classList.remove("menu--js");
        document.querySelector(".burger").classList.remove("burger--js");
      }
    })
  
    document.querySelector(".burger").addEventListener('click', function () {
      document.querySelector(".burger").classList.toggle("burger--js");
      document.querySelector(".menu-hero").classList.toggle("menu--js");
    })
  
    document.querySelector(".close").addEventListener('click', function () {
      document.querySelector(".burger").classList.remove("burger--js");
      document.querySelector(".menu-hero").classList.remove("menu--js");
    })
  
  })