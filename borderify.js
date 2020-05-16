

document.body.addEventListener("click", (e) => {
    // e.target.css
    e.target.style.border = 'red dotted';
    let fontSize = window.getComputedStyle(e.target).getPropertyValue("font-size");
    let fontFamily = window.getComputedStyle(e.target).getPropertyValue("font-family");
    
    let height = window.getComputedStyle(e.target).getPropertyValue("height");
    let width = window.getComputedStyle(e.target).getPropertyValue("width");
    console.log("height: ", height);
    console.log("width: ", width)
    console.log("Font-Size: ",fontSize);
    console.log("font-family: ", fontFamily)
    if(e.target.nodeName == 'A')
    {
        let hreference = e.target.getAttribute("href");
        e.target.setAttribute("href", "#");
        console.log("href: ",hreference);
        e.target.setAttribute("href", hreference);
    }
})
// document.body.addEventListener("mouseout", (e) => {
//     // e.target.css
//     e.target.style.border = 'none';
// })