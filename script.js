let oof;
function script() {
    current = "start"
    backbutton = Array.from(document.getElementsByClassName("back"))[0]
    oof = false
    Array.from(document.getElementsByTagName("button")).forEach(b=>{
        b.addEventListener("click", () => {
	    if(oof) new Audio("oof.mp3").play()
	})
    })
    Array.from(document.getElementsByClassName("page")).forEach(b=>{
        b.addEventListener("click", () => {
            setTimeout(()=>{
                backbutton.style.display = "block";
                Array.from(document.getElementsByClassName(b.innerText.toLowerCase())).forEach(c=>{
                    c.style.display = "block";
                })
                Array.from(document.getElementsByClassName(current.toLowerCase())).forEach(c=>{
                    c.style.display = "none";
                })
                current = b.innerText
            },200)
        })
    })
    backbutton.addEventListener("click", ()=>{
        backbutton.style.display = "none"
        Array.from(document.getElementsByClassName("start")).forEach(c=>{
            c.style.display = "block";
        })
        Array.from(document.getElementsByClassName(current.toLowerCase())).forEach(c=>{
            c.style.display = "none";
        })
        current = "start"
    })
}
