var menuButton = document.getElementById('side-bar-icon');
var menu = document.getElementById('side-bar');
var navLinks = document.getElementsByClassName('nav-link');
var tabs = document.getElementsByClassName('tab-content');
var options = {
    wrapAround: true,
    prevNextButtons: false
}

// Open and close the menu when the menu button is clicked
menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
})

// Close the menu when a nav link is clicked
for(const link of navLinks) {
    link.addEventListener("click", () => {
        document.getElementById("side-bar").classList.toggle("active");
    });
};

// Change selected tab to display grid and all other to display none
function openTab(projectNo) {
    for (const tab of tabs) {
        tab.style.display = 'none';
    }
    document.getElementById(projectNo).style.display = 'grid';
    var flkty = new Flickity(`#${projectNo}-carousel`, options);
    flkty.resize();
}
// Set initial tab-content to display grid and initialize carousel
document.getElementById('project1').style.display = 'grid';
var project1Carousel = new Flickity('#project1-carousel', options);

// Change theme css variables
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

// Testing when elements extend beyond screen width
var docWidth = document.documentElement.offsetWidth;    
[].forEach.call(
    document.querySelectorAll('*'),
    function(el) {
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    }
);