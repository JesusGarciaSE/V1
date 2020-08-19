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

// var docWidth = document.documentElement.offsetWidth;
    
// [].forEach.call(
//     document.querySelectorAll('*'),
//     function(el) {
//     if (el.offsetWidth > docWidth) {
//         console.log(el);
//     }
//     }
// );