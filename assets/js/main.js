/*===== MENU SHOW =====*/ 
const ShowMenu=(toggleId,navId)=>
{
    const toggle=document.getElementById(toggleId);
    const nav=document.getElementById(navId);
    if(toggle && nav)
    {
        toggle.addEventListener('click',()=>
        {
            nav.classList.toggle('show')
        })
    }
}
ShowMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')
console.log(navLink)
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    console.log(navMenu)
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections=document.querySelectorAll('section[id]');
window.addEventListener('scroll' , scrollActive)
function scrollActive()
{
    const scrolly=window.scrollY;
    sections.forEach(current=>
        {
            const sectionheight=current.offsetHeight;
            const sectiontop=current.offsetTop - 50;
            const sectionId=current.getAttribute('id')
            const currentSection=document.querySelector('.nav__menu a[href*='+ sectionId +']');

            if(scrolly > sectiontop && scrolly <= sectiontop + sectionheight)
            {
                currentSection.classList.add('active');
            }
            else
            {
                currentSection.classList.remove('active');
            }
        })
}