const comeupps = document.getElementsByClassName("comeupp")


window,addEventListener("scroll", ()=>{
    peepInAndOut()
})

function peepInAndOut(){
    let triggerButton = window.innerHeight / 5 * 4

    for(let i =0; i<comeupps.length;i++){
        let disappearTop = comeupps[i].getBoundingClientRect().top

        if (disappearTop < triggerButton) {
            comeupps[i].classList.remove("comeup")
          } else {
            comeupps[i].classList.add("comeup")
          }
    }
}