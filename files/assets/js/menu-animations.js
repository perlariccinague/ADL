/*
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
   /!* gsap.from('.menu-close', {
        duration: 3,
    })*!/

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


*/


gsap.registerPlugin(ScrollTrigger);

const time = 1.5;

const navigationItems = '.mobile_menu .inner .mod_navigation ul li';
const customNavigationItems = '.mobile_menu .inner .mod_customnav ul li';

const allNavigationItems = `${navigationItems}, ${customNavigationItems}`;

// État initial
gsap.set(allNavigationItems, {
    right: '100%',
    opacity: 0
});

document.querySelector('.mobile_menu_trigger').addEventListener('click', function() {

    gsap.to(allNavigationItems, {
        stagger: {
            amount: .1,
            grid: 'auto',
            from: 'start',
            axis: 'y'
        },
        right: '0%',
        opacity: 1,
        duration: time,
        ease: 'power3.out',
        delay: .1
    });

});

document.querySelector('.menu-close').addEventListener('click', function() {

    gsap.to(allNavigationItems, {
        stagger: {
            amount: .1,
            grid: 'auto',
            from: 'center',
            axis: 'y'
        },
        right: '100%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

});
