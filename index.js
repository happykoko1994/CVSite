const project = document.querySelector('a[href*="#"]');
const projectID = project.getAttribute('href').substring(1);
project.addEventListener('click', e => {
    e.preventDefault();
    document.getElementById(projectID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})
