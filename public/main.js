var menuButton = document.getElementById('side-bar-icon');
var menu = document.getElementById('side-bar');
var navLinks = document.getElementsByClassName('nav-link');
var tabs = document.getElementsByClassName('tab-content');

document.getElementById('side-bar-icon').addEventListener('click', () => {   
    if(menuButton.getAttribute('name') == 'menu-sharp'){
        menuButton.setAttribute('name', 'close-sharp');
        menu.classList.toggle('active');
    }
    else {
        menuButton.setAttribute('name', 'menu-sharp');
        menu.classList.toggle('active');
    }
})

for(const link of navLinks) {
    link.addEventListener("click", () => {
        document.getElementById("side-bar").classList.toggle("active");
    });
};

var options = {
    wrapAround: true,
    prevNextButtons: false
}

function openTab(projectNo) {
    for (const tab of tabs) {
        tab.style.display = 'none';
    }
    document.getElementById(projectNo).style.display = 'flex';
    var flkty = new Flickity(`#${projectNo}-carousel`, options);
    flkty.resize();
}

document.getElementById('project1').style.display = 'flex';
var project1Carousel = new Flickity('#project1-carousel', options);


function changeTheme(theme) {
    if(theme == 'zero-one') {
        document.documentElement.style.setProperty('--primary', 'var(--zero-one-primary)');
        document.documentElement.style.setProperty('--secondary', 'var(--zero-one-secondary)');
        document.documentElement.style.setProperty('--font', 'var(--zero-one-font)');
    }
    if(theme == 'saber') {
        document.documentElement.style.setProperty('--primary', 'var(--saber-primary)');
        document.documentElement.style.setProperty('--secondary', 'var(--saber-secondary)');
        document.documentElement.style.setProperty('--font', 'var(--saber-font)');
    }
}

var docWidth = document.documentElement.offsetWidth;    
[].forEach.call(
    document.querySelectorAll('*'),
    function(el) {
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    }
);