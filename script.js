const menu = document.querySelector('#mobileMenu');
const MENULinks = document.querySelector('.navbarMenu');
const navLogo = document.querySelector('#navbarLogo');


const mobileMENU = () => {
    menu.classList.toggle('is-active');
    MENULinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMENU);

//show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const HomeMenu = document.querySelector('#home-Page');
    const AboutMenu = document.querySelector('#about-Page');
    const ServicesMenu = document.querySelector('#services-Page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    //adds the highlight class to menu items
    if(window.innerWidth > 960 && scrollPos <500){
        HomeMenu.classList.add('highlight');
        AboutMenu.classList.remove('highlight');
        return
    }
    else if(window.innerWidth > 960 && scrollPos <1300){
        AboutMenu.classList.add('highlight');
        HomeMenu.classList.remove('highlight');
        ServicesMenu.classList.remove('highlight');
        return
    }
    else if(window.innerWidth > 960 && scrollPos <2145){
        AboutMenu.classList.remove('highlight');
        ServicesMenu.classList.add('highlight');
        return
    };

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem ){
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//close mobile menu on click
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if( window.innerWidth <= 960 && menuBars){
        menu.classList.toggle('is-active')
        MENULinks.classList.remove('active')
    }
}
MENULinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)


    var myVar = document.querySelector('#loader');

    function myFunction() {
        myVar = setTimeout(showPage, 800);
    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
    }

    // to top
  var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  
  document.documentElement.scrollTop = 0;
  
}