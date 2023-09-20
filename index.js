const project = document.querySelector('a[href*="#"]');
const projectID = project.getAttribute('href').substring(1);


project.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById(projectID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})


const upBtn = document.querySelector('.up-btn')
upBtn.addEventListener('click', scrollToTop)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
window.addEventListener('scroll', () => {
    let scroll = document.querySelector('.up-btn').classList.toggle('active', window.scrollY > 200)

})