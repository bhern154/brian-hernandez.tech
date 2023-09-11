// window.onresize = function(){ location.reload(); }
window.scroll({behavior: 'smooth'});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (0+(window.innerHeight || document.documentElement.clientHeight)) &&
        rect.bottom >= 0
    );
}

// ************* navbar scripts ****************

    var home = document.querySelector('.home-sec');
    var navbar = document.querySelector('.navbar');
    var offset = home.offsetHeight - navbar.offsetHeight;

    window.onscroll = function(){
        if(window.pageYOffset > offset){
            navbar.classList.add('fixed');
        }else{
            navbar.classList.remove('fixed');
        }
    }

    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".navbar .container-nav a");
    
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // if (pageYOffset >= sectionTop - sectionHeight / 3) {
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
            
        });

        navLi.forEach((a) => {
            a.classList.remove("active");
            if (a.classList.contains(current)) {
            a.classList.add("active");
            }
        });
    });

// ************* parallax script ****************

const parallaxContainer = document.querySelector('.allProjects');

    document.addEventListener('scroll', function () {
        if(isInViewport(parallaxContainer)){
            // console.log("visible");

            const parallaxList = document.querySelectorAll('.parallax');
            const parallaxContainer = document.querySelectorAll('.parallax-container');

            var visibleScrollPos0 = -1*parallaxContainer[0].getBoundingClientRect().top + window.innerHeight;
            var elementNotVisible0 = parallaxContainer[0].offsetHeight + window.innerHeight;
            if( (visibleScrollPos0 > 0) && (visibleScrollPos0 < elementNotVisible0) ){          
                var scrolled = -1*parallaxContainer[0].getBoundingClientRect().top + window.innerHeight;
                // parallaxList[0].style.transform = 'translateY(' + scrolled*-1*0.2 + 'px)';
                parallaxList[0].style.transform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
                parallaxList[0].style.webkitTransform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
            }

            var visibleScrollPos1 = -1*parallaxContainer[1].getBoundingClientRect().top + window.innerHeight;
            var elementNotVisible1 = parallaxContainer[1].offsetHeight + window.innerHeight;
            if( (visibleScrollPos1 > 0) && (visibleScrollPos1 < elementNotVisible1) ){          
                var scrolled = -1*parallaxContainer[1].getBoundingClientRect().top + window.innerHeight;
                parallaxList[1].style.transform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
                parallaxList[1].style.webkitTransform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
            }

            var visibleScrollPos2 = -1*parallaxContainer[2].getBoundingClientRect().top + window.innerHeight;
            var elementNotVisible2 = parallaxContainer[2].offsetHeight + window.innerHeight;
            if( (visibleScrollPos2 > 0) && (visibleScrollPos2 < elementNotVisible2) ){          
                var scrolled = -1*parallaxContainer[2].getBoundingClientRect().top + window.innerHeight;
                parallaxList[2].style.transform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
                parallaxList[2].style.webkitTransform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
            }

            var visibleScrollPos3 = -1*parallaxContainer[3].getBoundingClientRect().top + window.innerHeight;
            var elementNotVisible3 = parallaxContainer[3].offsetHeight + window.innerHeight;
            if( (visibleScrollPos3 > 0) && (visibleScrollPos3 < elementNotVisible3) ){          
                var scrolled = -1*parallaxContainer[3].getBoundingClientRect().top + window.innerHeight;
                parallaxList[3].style.transform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
                parallaxList[3].style.webkitTransform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
            }

            var visibleScrollPos4 = -1*parallaxContainer[4].getBoundingClientRect().top + window.innerHeight;
            var elementNotVisible4 = parallaxContainer[4].offsetHeight + window.innerHeight;
            if( (visibleScrollPos4 > 0) && (visibleScrollPos4 < elementNotVisible4) ){          
                var scrolled = -1*parallaxContainer[4].getBoundingClientRect().top + window.innerHeight;
                parallaxList[4].style.transform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
                parallaxList[4].style.webkitTransform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
            }

            var visibleScrollPos5 = -1*parallaxContainer[5].getBoundingClientRect().top + window.innerHeight;
            var elementNotVisible5 = parallaxContainer[5].offsetHeight + window.innerHeight;
            if( (visibleScrollPos5 > 0) && (visibleScrollPos5 < elementNotVisible5) ){          
                var scrolled = -1*parallaxContainer[5].getBoundingClientRect().top + window.innerHeight;
                parallaxList[5].style.transform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
                parallaxList[5].style.webkitTransform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
            }

            var visibleScrollPos6 = -1*parallaxContainer[6].getBoundingClientRect().top + window.innerHeight;
            var elementNotVisible6 = parallaxContainer[6].offsetHeight + window.innerHeight;
            if( (visibleScrollPos6 > 0) && (visibleScrollPos6 < elementNotVisible6) ){          
                var scrolled = -1*parallaxContainer[6].getBoundingClientRect().top + window.innerHeight;
                parallaxList[6].style.transform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
                parallaxList[6].style.webkitTransform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
            }
        }
        else {
            // console.log("not visible");
        }
    }, {
        passive: true
    });

    // window.addEventListener('scroll', function (e){

    //     const parallaxList = document.querySelectorAll('.parallax');
    //     const parallaxContainer = document.querySelectorAll('.parallax-container');

    //     var visibleScrollPos0 = -1*parallaxContainer[0].getBoundingClientRect().top + window.innerHeight;
    //     var elementNotVisible0 = parallaxContainer[0].offsetHeight + window.innerHeight;
    //     if( (visibleScrollPos0 > 0) && (visibleScrollPos0 < elementNotVisible0) ){          
    //         var scrolled = -1*parallaxContainer[0].getBoundingClientRect().top + window.innerHeight;
    //         // parallaxList[0].style.transform = 'translateY(' + scrolled*-1*0.2 + 'px)';
    //         parallaxList[0].style.transform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
    //         parallaxList[0].style.webkitTransform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
    //     }

    //     var visibleScrollPos1 = -1*parallaxContainer[1].getBoundingClientRect().top + window.innerHeight;
    //     var elementNotVisible1 = parallaxContainer[1].offsetHeight + window.innerHeight;
    //     if( (visibleScrollPos1 > 0) && (visibleScrollPos1 < elementNotVisible1) ){          
    //         var scrolled = -1*parallaxContainer[1].getBoundingClientRect().top + window.innerHeight;
    //         parallaxList[1].style.transform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
    //         parallaxList[1].style.webkitTransform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
    //     }

    //     var visibleScrollPos2 = -1*parallaxContainer[2].getBoundingClientRect().top + window.innerHeight;
    //     var elementNotVisible2 = parallaxContainer[2].offsetHeight + window.innerHeight;
    //     if( (visibleScrollPos2 > 0) && (visibleScrollPos2 < elementNotVisible2) ){          
    //         var scrolled = -1*parallaxContainer[2].getBoundingClientRect().top + window.innerHeight;
    //         parallaxList[2].style.transform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
    //         parallaxList[2].style.webkitTransform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
    //     }

    //     var visibleScrollPos3 = -1*parallaxContainer[3].getBoundingClientRect().top + window.innerHeight;
    //     var elementNotVisible3 = parallaxContainer[3].offsetHeight + window.innerHeight;
    //     if( (visibleScrollPos3 > 0) && (visibleScrollPos3 < elementNotVisible3) ){          
    //         var scrolled = -1*parallaxContainer[3].getBoundingClientRect().top + window.innerHeight;
    //         parallaxList[3].style.transform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
    //         parallaxList[3].style.webkitTransform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
    //     }

    //     // var visibleScrollPos4 = -1*parallaxContainer[4].getBoundingClientRect().top + window.innerHeight;
    //     // var elementNotVisible4 = parallaxContainer[4].offsetHeight + window.innerHeight;
    //     // if( (visibleScrollPos4 > 0) && (visibleScrollPos4 < elementNotVisible4) ){          
    //     //     var scrolled = -1*parallaxContainer[4].getBoundingClientRect().top + window.innerHeight;
    //     //     parallaxList[4].style.transform = 'translate3D( 0px,' + scrolled*-1*0.2 + 'px, 0px)';
    //     // }
    // });


    //----- OLD


    // window.addEventListener('scroll', function (){
    //     const parallaxList = document.querySelectorAll('.parallax');
    //     var parallaxContainer = document.querySelectorAll('.parallax-container');

    //     for(var i=0; i < parallaxList.length; i++){
    //         let scrollPosition = window.pageYOffset - parallaxContainer[i].offsetHeight;
    //         parallaxList[i].style.transform = 'translateY(' + scrollPosition*.5 + 'px)';
    //     }
    // });





// ************* image scroll scripts ****************

    const slider = document.querySelector(".slider");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const slides = document.querySelectorAll(".slide");
    const slideIcons = document.querySelectorAll(".slide-icon");
    const numberOfSlides = slides.length;
    var slideNumber = 0;

    //image right arrow
    nextBtn.addEventListener("click", () => {

        slides.forEach((slide) => {
            slide.classList.remove("active-img");
        })
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active-img");
        })

        slideNumber++;

        if(slideNumber > (numberOfSlides - 1)){
            slideNumber = 0;
        }

        slides[slideNumber].classList.add("active-img");
        slideIcons[slideNumber].classList.add("active-img");
    });

    //image left arrow
    prevBtn.addEventListener("click", () => {

        slides.forEach((slide) => {
            slide.classList.remove("active-img");
        })
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active-img");
        })

        slideNumber--;

        if(slideNumber < 0){
            slideNumber = numberOfSlides - 1;
        }

        slides[slideNumber].classList.add("active-img");
        slideIcons[slideNumber].classList.add("active-img");
    });

    //image autoplay
    // var platSlider;

    // var repeater = () => {
    //     platSlider = setInterval(function(){
    //         slides.forEach((slide) => {
    //             slide.classList.remove("active-img");
    //         })
    //         slideIcons.forEach((slideIcon) => {
    //             slideIcon.classList.remove("active-img");
    //         })
    
    //         slideNumber++;
    
    //         if(slideNumber > (numberOfSlides - 1)){
    //             slideNumber = 0;
    //         }
    
    //         slides[slideNumber].classList.add("active-img");
    //         slideIcons[slideNumber].classList.add("active-img");
    //     }, 3000);
    // }

    // repeater();

    // slider.addEventListener("mouseover", () =>{
    //     clearInterval(platSlider);
    // });

    // slider.addEventListener("mouseout", () =>{
    //     repeater();
    // });







    //slider 2

    const slider2 = document.querySelector(".slider2");
    const nextBtn2 = document.querySelector(".next2");
    const prevBtn2 = document.querySelector(".prev2");
    const slides2 = document.querySelectorAll(".slide2");
    const slideIcons2 = document.querySelectorAll(".slide-icon2");
    const numberOfSlides2 = slides2.length;
    var slideNumber2 = 0;

    //image right arrow
    nextBtn2.addEventListener("click", () => {

        slides2.forEach((slide) => {
            slide.classList.remove("active-img");
        })
        slideIcons2.forEach((slideIcon) => {
            slideIcon.classList.remove("active-img");
        })

        slideNumber2++;

        if(slideNumber2 > (numberOfSlides2 - 1)){
            slideNumber2 = 0;
        }

        slides2[slideNumber2].classList.add("active-img");
        slideIcons2[slideNumber2].classList.add("active-img");
    });

    //image left arrow
    prevBtn2.addEventListener("click", () => {

        slides2.forEach((slide) => {
            slide.classList.remove("active-img");
        })
        slideIcons2.forEach((slideIcon) => {
            slideIcon.classList.remove("active-img");
        })

        slideNumber2--;

        if(slideNumber2 < 0){
            slideNumber2 = numberOfSlides2 - 1;
        }

        slides2[slideNumber2].classList.add("active-img");
        slideIcons2[slideNumber2].classList.add("active-img");
    });

    //image autoplay
    // var platSlider2;

    // var repeater2 = () => {
    //     platSlider2 = setInterval(function(){
    //         slides2.forEach((slide) => {
    //             slide.classList.remove("active-img");
    //         })
    //         slideIcons2.forEach((slideIcon) => {
    //             slideIcon.classList.remove("active-img");
    //         })
    
    //         slideNumber2++;
    
    //         if(slideNumber2 > (numberOfSlides2 - 1)){
    //             slideNumber2 = 0;
    //         }
    
    //         slides2[slideNumber2].classList.add("active-img");
    //         slideIcons2[slideNumber2].classList.add("active-img");
    //     }, 3000);
    // }

    // repeater2();

    // slider2.addEventListener("mouseover", () =>{
    //     clearInterval(platSlider2);
    // });

    // slider2.addEventListener("mouseout", () =>{
    //     repeater2();
    // });






    //slider 3

    const slider3 = document.querySelector(".slider3");
    const nextBtn3 = document.querySelector(".next3");
    const prevBtn3 = document.querySelector(".prev3");
    const slides3 = document.querySelectorAll(".slide3");
    const slideIcons3 = document.querySelectorAll(".slide-icon3");
    const numberOfSlides3 = slides3.length;
    var slideNumber3 = 0;

    //image right arrow
    nextBtn3.addEventListener("click", () => {

        slides3.forEach((slide) => {
            slide.classList.remove("active-img");
        })
        slideIcons3.forEach((slideIcon) => {
            slideIcon.classList.remove("active-img");
        })

        slideNumber3++;

        if(slideNumber3 > (numberOfSlides3 - 1)){
            slideNumber3 = 0;
        }

        slides3[slideNumber3].classList.add("active-img");
        slideIcons3[slideNumber3].classList.add("active-img");
    });

    //image left arrow
    prevBtn3.addEventListener("click", () => {

        slides3.forEach((slide) => {
            slide.classList.remove("active-img");
        })
        slideIcons3.forEach((slideIcon) => {
            slideIcon.classList.remove("active-img");
        })

        slideNumber3--;

        if(slideNumber3 < 0){
            slideNumber3 = numberOfSlides3 - 1;
        }

        slides3[slideNumber3].classList.add("active-img");
        slideIcons3[slideNumber3].classList.add("active-img");
    });

    //image autoplay
    // var platSlider3;

    // var repeater3 = () => {
    //     platSlider3 = setInterval(function(){
    //         slides3.forEach((slide) => {
    //             slide.classList.remove("active-img");
    //         })
    //         slideIcons3.forEach((slideIcon) => {
    //             slideIcon.classList.remove("active-img");
    //         })
    
    //         slideNumber3++;
    
    //         if(slideNumber3 > (numberOfSlides3 - 1)){
    //             slideNumber3 = 0;
    //         }
    
    //         slides3[slideNumber3].classList.add("active-img");
    //         slideIcons3[slideNumber3].classList.add("active-img");
    //     }, 3000);
    // }

    // repeater3();

    // slider3.addEventListener("mouseover", () =>{
    //     clearInterval(platSlider3);
    // });

    // slider3.addEventListener("mouseout", () =>{
    //     repeater3();
    // });










// Apply RGB rotation to sliders only when in sight

    const slideContainer = document.querySelector('.about-container');
    const root = document.querySelector(":root"); //grabbing the root
    
    document.addEventListener('scroll', function () {
        if(isInViewport(slideContainer)){
            // console.log("visible");
            root.style.setProperty("--js-rotate", 'rotateImage 4s linear infinite');
        } 
        else {
            // console.log("not visible");
            root.style.setProperty("--js-rotate", 'unset');
        }
    }, {
        passive: true
    });