//Responsive Navbar And Burger Icon
var navSlide = () => {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.nav-links');
    var navLinks = document.querySelectorAll('.nav-links li');

    //Toggel Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate Navlinks
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');

    });

}
navSlide();

// Loop through the li and add the active class to the current/clicked li
var myLi = document.querySelectorAll('li');
for (var i = 0; i < myLi.length; i++) {
    myLi[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// when you scrolling to 700px  show the button  with jquery
$(document).ready(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() >= 600) {
            $('.fa-angle-up').css('display', 'flex');
        } else {
            $('.fa-angle-up').css('display', 'none');
        }
        // when you click button go to the up with jquery


    });

    $('.fa-angle-up').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 550)
    });
    //  when you click the li navbar go to the section

    $('li a').on('click', function (e) {

        e.preventDefault();
        $('html, body').animate({scrollTop:$($(this).data('scroll')).offset().top -70},750)

    });
});
