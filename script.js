$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed =  new Typed(".typing", {
        strings: ["Software Engineering", "Python", "JavaScript", "HTML", "Data Science"],
        typeSpeed: 100,
        backspeed: 60,
        loop: true
    })
    
    


})