gsap.registerPlugin(ScrollTrigger);

const time = 1.5;

gsap.to ('.mobile_menu .inner .mod_navigation ul li', {
    stagger: {
        amount: .1,
        grid: 'auto',
        from: 'top',
        axis: 'y'
    },
    right: '100%',
    opacity: 1,
    duration: time,
    ease: 'power3.out'
})


document.querySelector('.mobile_menu_trigger').addEventListener('click', function(){
   /* gsap.from('.menu-close', {
        duration: 3,
    })*/

    gsap.to('.mobile_menu .inner .mod_navigation ul li', {
        stagger: {
            amount: .1,
            grid: 'auto',
            from: 'top',
            axis: 'y'
        },
        right: '0',
        opacity: 1,
        duration: time,
        ease: 'power3.out',
        delay: .1
    })

});

document.querySelector('.menu-close').addEventListener('click', function() {
    gsap.to('.mobile_menu .inner .mod_navigation ul li', {
        stagger: {
            amount: .1,
            grid: 'auto',
            from: 'center',
            axis: 'y'
        },
        right: '100%',
        opacity: 0,
        duration: 1
    })

})


