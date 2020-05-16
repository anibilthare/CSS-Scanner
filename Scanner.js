
document.body.addEventListener("click", (e) => {
    var old = e.target.style.border;
    let fontSize = window.getComputedStyle(e.target).getPropertyValue("font-size");
    let fontFamily = window.getComputedStyle(e.target).getPropertyValue("font-family");
    
    let height = window.getComputedStyle(e.target).getPropertyValue("height");
    let width = window.getComputedStyle(e.target).getPropertyValue("width");
    let position = window.getComputedStyle(e.target).getPropertyValue("position");
    let fontColor = window.getComputedStyle(e.target).getPropertyValue("color");
    let backgroundColor = window.getComputedStyle(e.target).getPropertyValue("background-color")
    alert(`height: ${height}\nWidth: ${width}\nPosition: ${position}\nFont color: ${fontColor}\nBackground-color: ${backgroundColor}\nFont-size: ${fontSize}\nFont-family: ${fontFamily}`);
})
document.body.addEventListener("mouseover", (e) => {
    e.target.style.border = 'red dotted';
})

document.body.addEventListener("mouseout", (e) => {
    e.target.style.border = old;
});



