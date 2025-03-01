gsap.to("#page2 h1",{
    transform:"translateX(-125%)",
    delay:1,
    scrollTrigger:{
        trigger:"#page2",
        scroler:"body",
        scrub:2,
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true

    }
})