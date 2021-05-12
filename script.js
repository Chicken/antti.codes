// variables
let current = "start";
let backbutton = Array.from(document.getElementsByClassName("back"))[0];

// page buttons
Array.from(document.getElementsByClassName("page")).forEach(b => {
    b.addEventListener("click", () => {
        setTimeout(changePage, 100, b.innerText.toLowerCase());
    })
})

// backbutton functionality
backbutton.addEventListener("click", () => changePage("start"));

// site links
let fragment = window.location.hash.substr(1);
if(fragment) changePage(fragment);

// page change function
function changePage(page) {
    let pages = Array.from(document.getElementsByClassName(page));
    if(pages.length === 0) {
        window.location.hash = "";
        return;
    };
    if (page == "start") {
        window.location.hash = "#";
        backbutton.style.display = "none";
    } else {
        window.location.hash = `#${page}`;
        backbutton.style.display = "block";
    }
    pages.forEach(c => {
        c.style.display = "block";
    })
    Array.from(document.getElementsByClassName(current.toLowerCase())).forEach(c => {
        c.style.display = "none";
    })
    current = page;
}
