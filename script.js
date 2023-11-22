let field = document.querySelector("#con")
field.addEventListener("mousemove", function(dets) {
    let fieldv = field.getBoundingClientRect();
    var mp = dets.clientX - field.getBoundingClientRect().left;
    // console.log(mp)
    if (mp < fieldv.width / 2) {
        let c = gsap.utils.mapRange(0, fieldv.width / 2, 0, 255, mp);
        console.log(c)
        gsap.to(field, {
            backgroundColor: `rgb(255,${c},${c})`,
            ease: Power4
        })
    } else {
        console.log(mp)
        let c = gsap.utils.mapRange(fieldv.width / 2, fieldv.width, 255, 0, mp)
        gsap.to(field, {
            backgroundColor: `rgb(${c},${c},255)`,
            ease: Power4
        })
    }
})
window.addEventListener("mousemove", function(d) {
    let xv = gsap.utils.mapRange(0, window.innerWidth, 100 + field.getBoundingClientRect().width / 2,
        window.innerWidth - (100 + field.getBoundingClientRect().width / 2), d.x)
    gsap.to(field, {
        left: xv,
        ease: Power3,
    })
})