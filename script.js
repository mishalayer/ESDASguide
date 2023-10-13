const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const sidebarToggleIcon = document.getElementById('sidebarToggleIcon');
const mainContent = document.getElementById('mainContent');
const scrollUpButton = document.getElementById('scrollUpButton');
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    sidebarToggleIcon.classList.toggle('active');
    sidebarToggle.classList.toggle('active');
    mainContent.classList.toggle('active');
});
window.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop > 100) {
        scrollUpButton.style.opacity = '100%';
        scrollUpButton.style.visibility = 'visible';
    } else {
        scrollUpButton.style.opacity = '0%';
        scrollUpButton.style.visibility = 'hidden';
    }
});

function themeFunction() {
    const wholeBody = document.body;
    wholeBody.dataset.bsTheme = wholeBody.dataset.bsTheme == "light" ? "dark" : "light";
}