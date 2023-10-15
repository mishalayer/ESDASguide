const sidebarToggle = document.getElementById('sidebarToggle');
const dimmerToggle = document.getElementById('dimmer');
const sidebar = document.getElementById('sidebar');
const sidebarToggleIcon = document.getElementById('sidebarToggleIcon');
const mainContent = document.getElementById('mainContent');
const mainContentHeader = document.getElementById('mainContentHeader');
const scrollUpButton = document.getElementById('scrollUpButton');
const themeButtonIcon = document.getElementById('themeButtonIcon');
const textSlider = document.getElementById("textSlider");
const textContainer = document.getElementById("textContainer");
const wholeBody = document.body;
//Local storage variables
const savedFontSize = localStorage.getItem('fontSize');
const savedTheme = localStorage.getItem('theme');

onPageLoad();

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    sidebarToggleIcon.classList.toggle('active');
    sidebarToggle.classList.toggle('active-custom');
    mainContent.classList.toggle('active');
    mainContentHeader.classList.toggle('active');
    if (localStorage.getItem('sidebar') == 'closed') {
        localStorage.setItem('sidebar', 'open');
    } else {
        localStorage.setItem('sidebar', 'closed');
    }
});

dimmerToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    sidebarToggleIcon.classList.toggle('active');
    sidebarToggle.classList.toggle('active-custom');
    mainContent.classList.toggle('active');
    mainContentHeader.classList.toggle('active');
    if (localStorage.getItem('sidebar') == 'closed') {
        localStorage.setItem('sidebar', 'open');
    } else {
        localStorage.setItem('sidebar', 'closed');
    }
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
    wholeBody.dataset.bsTheme = wholeBody.dataset.bsTheme == "light" ? "dark" : "light";
    if (wholeBody.dataset.bsTheme == 'light') {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    themeButtonIcon.classList.toggle('bi-sun-fill');
    themeButtonIcon.classList.toggle('bi-moon-fill');
}

textSlider.addEventListener("input", function () {
    const textSize = textSlider.value;
    updateTextSize(textSize);
});

function updateTextSize(size) {
    textContainer.classList.remove("text-small", "text-medium", "text-large");

    if (size === "1") {
        textContainer.classList.add("text-small");
        localStorage.setItem('fontSize', 'text-small');
    } else if (size === "2") {
        textContainer.classList.add("text-medium");
        localStorage.setItem('fontSize', 'text-medium');
    } else if (size === "3") {
        textContainer.classList.add("text-large");
        localStorage.setItem('fontSize', 'text-large');
    }
}

function onPageLoad() {
    if (savedFontSize) {
        textContainer.classList.add(savedFontSize);
        if (savedFontSize == "text-small") {
            textSlider.value = "1";
        } else if (savedFontSize == "text-medium") {
            textSlider.value = "2";
        } else if (savedFontSize == "text-large") {
            textSlider.value = "3";
        }
    }
    if (savedTheme) {
        if (savedTheme == 'light') {
            wholeBody.dataset.bsTheme = 'light';
        } else {
            wholeBody.dataset.bsTheme = 'dark';
            themeButtonIcon.classList.toggle('bi-sun-fill');
            themeButtonIcon.classList.toggle('bi-moon-fill');
        }
    }
    if (localStorage.getItem('sidebar') == 'closed') {
        sidebar.classList.toggle('active');
        sidebarToggleIcon.classList.toggle('active');
        sidebarToggle.classList.toggle('active-custom');
        mainContent.classList.toggle('active');
        mainContentHeader.classList.toggle('active');
    } else {
        localStorage.setItem('sidebar', 'open');
    }
}