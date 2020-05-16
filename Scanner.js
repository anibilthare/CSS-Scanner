
document.body.addEventListener("click", (e) => {
    
    let fontSize = window.getComputedStyle(e.target).getPropertyValue("font-size");
    let fontFamily = window.getComputedStyle(e.target).getPropertyValue("font-family");
    
    let height = window.getComputedStyle(e.target).getPropertyValue("height");
    let width = window.getComputedStyle(e.target).getPropertyValue("width");
    let position = window.getComputedStyle(e.target).getPropertyValue("position");
    alert(`height: ${height}\nWidth: ${width}\nPosition: ${position}\nFont-size: ${fontSize}\nFont-family: ${fontFamily}`);
})
document.body.addEventListener("mouseover", (e) => {
    e.target.style.border = 'red dotted';
})

document.body.addEventListener("mouseout", (e) => {
    e.target.style.border = 'none';
});



