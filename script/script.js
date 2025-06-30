const Download_Btn = document.querySelector('.download-btn');
const Github_Btn = document.querySelector('.github-btn');
const Theme_Btn = document.querySelector('.Theme-Btn');

//Debugging
if (!Download_Btn || !Github_Btn || !Theme_Btn){
    console.log(`Couldnt get the buttons.`)
}

//Button functions
Download_Btn.addEventListener('click', () =>{
    window.location.href = 'download.html';
})

Github_Btn.addEventListener('click', () =>{
    window.location.href = 'https://github.com/AqwozTheDeveloper/SheefyClient';
})

Theme_Btn.addEventListener('click', () => {
    let themeLink = document.getElementById('theme-stylesheet');
    const isDark = localStorage.getItem('theme') === 'blacktheme';

    // Toggle icon (replace with your actual icon logic if needed)
    Theme_Btn.innerHTML = isDark
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';

    if (!themeLink) {
        themeLink = document.createElement('link');
        themeLink.rel = 'stylesheet';
        themeLink.id = 'theme-stylesheet';
        document.head.appendChild(themeLink);
    }

    if (isDark) {
        // Switch to light theme
        themeLink.href = 'style/main.css';
        localStorage.setItem('theme', 'light');
    } else {
        // Switch to dark theme
        themeLink.href = 'style/blacktheme.css';
        localStorage.setItem('theme', 'blacktheme');
    }
});

// On page load, apply saved theme if exists
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    let themeLink = document.getElementById('theme-stylesheet');
    if (!themeLink) {
        themeLink = document.createElement('link');
        themeLink.rel = 'stylesheet';
        themeLink.id = 'theme-stylesheet';
        document.head.appendChild(themeLink);
    }
    if (savedTheme === 'blacktheme') {
        themeLink.href = 'style/blacktheme.css';
        Theme_Btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        themeLink.href = 'style/main.css';
        Theme_Btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    }
});