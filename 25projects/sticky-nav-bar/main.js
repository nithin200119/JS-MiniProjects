

const navbar=document.querySelector('.nav-bar')
let navTop=navbar.offsetTop
window.onscroll=function(){
    handelSticky()
}
function handelSticky(){
    if(window.scrollY >= navTop) navbar.classList.add('fix-navbar')
    else navbar.classList.remove('fix-navbar')
}