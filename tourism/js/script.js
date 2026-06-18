const swiper = new Swiper ('.swiper' ,{
    slidePerView :1,
    effect :"creative",
    creativeEffect :{
        prev :{
            // will set translateZ(-400px) on previous slides
            translate :[0,0,-400], 
        },
        next :{
            // will set translateX(100%) on next slides
            translate :["100%" ,0,0],
        },
    },
    Loop :true,
    direction :"horizontal",

    autoplay :{
        delay :5000,
    },

    speed :400,
    spaceBetwwen :100,
});

const menus = document.querySelector("nav ul");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener('click' , () => {
    menus.classList.add("display");
})

closeBtn.addEventListener('click' , () => {
    menus.classList.remove("display");
})