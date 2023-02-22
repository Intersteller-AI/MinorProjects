document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".object").forEach(function (move) {
        var moving_value = move.getAttribute("data-value");

        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}


const tl = gsap.timeline()

tl.from('.inner_anime', {
    height: 0,
    delay: 1,
})
    .from('.inner_anime', {
        rotate: 0,
        delay: 0.3,
    })
    .from('.inner_anime>div', {
        width: 0,
        delay: 0.4,
    }, 'head_w')
    .from('.content span:nth-child(1)', {
        color: 'royalblue',
        delay: 0.4,
        ease: Expo.easeInOut
    }, 'head_w')
    .from('.content span:nth-child(2)', {
        opacity: 0,
        color: 'black',
        delay: 0.4,
        ease: Expo.easeInOut
    }, 'head_w')
    .to('.inner_anime>div', {
        border: '2px solid black',
        delay: -0.3
    })
    .to('.foot', {
        delay: 0.6,
        color: 'white'
    }, 'head_w')
    .to('.heading_sec>div>p', {
        color: 'white'
    }, 'head_w')

document.querySelector('.butt>button').addEventListener('click', () => {
    const tl = gsap.timeline()
    tl
        .to('.landing_page>div', {
            opacity: 0,
            duration: 1,
            stagger: 0.5,
        })
        .to('.landing_page', {
            opacity: 0,
        })
        .to('.landing_page', {
            zIndex: -1,
            pointerEvents: 'none',
            display: 'none',
            width: 0,
            height: 0,
        })
        .to('body', {
            delay: 0.1,
            overflow: 'unset',
        })
})


// --------------------------------

const swap_tl = gsap.timeline({
    yoyo: 1,
    repeat: -1,
    repeatDelay: 1
})

swap_tl.to('.left_in>div', {
    y: '-100%',
    delay: 2,
    duration: 1,
})
    .to('.left_in>div', {
        y: '-200%',
        delay: 1,
        duration: 1,
    })

// -----------------------------------------

const tl_2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.pin_home',
        start: 'top top',
        end: "+=" + window.innerHeight * 3,
        pin: true,
        scrub: 1,
        // markers: true,
    }
})

tl_2.to('.up_img', {
    top: "-100%",
    ease: "Expo.easeIn",
    duration: 2,
    stagger: 0.1,
}, 'sameto')
    .to('.text_up_top', {
        delay: -1,
        y: "-100%",
        ease: "Expo.easein",
        opacity: 0,
        stagger: 0.04,
    }, 'same')
    .from('.text_up_boot', {
        delay: -1,
        y: "100%",
        ease: "Expo.easein",
        opacity: 0,
        stagger: 0.04,
    }, 'same')
    .to('.text_up_boot', {
        delay: -0.4,
        y: "-100%",
        ease: "Expo.easein",
        opacity: 0,
        stagger: 0.04,
    })


const navtl = gsap.timeline({
    scrollTrigger: {
        trigger: '.navbar',
        start: 'top top',
        // end: "+=" + window.innerHeight * 3,
        // pin: true,
        scrub: 1,
        // markers: true,
    }  
})

navtl.to('.navbar', {
    position: 'fixed',
    display: 'flex',
    ease: Expo.easeInOut,
    duration: 3,
    opacity: 1,
    delay: -1
})