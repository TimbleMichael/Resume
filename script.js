// Using the jQuery JS library for page manipulation and animation

$(document).ready(function(){
    // Navbar scolling animation.
    // Once the page has scrolled vertically 20px, the 'navbar' will "stick" the navbar as you scoll down,
    //ELSE it will remove just be a regular navbar situated at the top.

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // Menu-button functionality
    // Adding a click functionality to the menu button
    // Once the 'menu-btn' is clicked, the 'menu-tab' will become "active" and the 'menu-btn' will become a 'close-btn'

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation
    // Setting the 'strings' I want typed at a specific 'typeSpeed' and 'backspeed', and finally have it running in a loop (loop=true)

    var typed =  new Typed(".typing", {
        strings: ["Ruby", "Python", "JavaScript", "HTML", "R-Studio", "HTML", "CSS", "Tableau"],
        typeSpeed: 100,
        backspeed: 60,
        loop: true
    })
    
})


// Declaring variable for the 'content' and the reseptive 'tab'

const tabs = document.querySelectorAll('[data-target]'), tabContents = document.querySelectorAll('[data-content]')


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification-active')
        })

        target.classList.add('qualification-active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification-active')
        })
        tab.classList.add('qualification-active')
    })
})