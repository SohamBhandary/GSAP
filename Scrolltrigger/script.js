gsap.from("#page1 #circle",{
    scale:0,
    delay:1,
    duration:2,
    roate:360,
    // scrollTrigger:"#page1 #circle"
    scrollTrigger:{
        trigger:"#page1 #circle",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:true
    }
})
gsap.from("#page2 #circle",{
    scale:0,
    delay:1,
    duration:2,
    roate:360,
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:true
    }
})
gsap.from("#page3 #circle",{
    scale:0,
    delay:1,
    duration:2,
    roate:360,
    scrollTrigger:"#page3 #circle"
})