document.getElementById('side-bar-icon').addEventListener('click', () => {
    let menuButton = document.getElementById('side-bar-icon');
    let menu = document.getElementById('side-bar');
    if(menuButton.getAttribute('name') == 'menu-sharp'){
        menuButton.setAttribute('name', 'close-sharp');
        menu.classList.toggle('active');
    }
    else {
        menuButton.setAttribute('name', 'menu-sharp');
        menu.classList.toggle('active');
    }
})

function openTab(projectNo) {
    let i;
    let x = document.getElementsByClassName('tab-content');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    document.getElementById(projectNo).style.display = 'flex';
    $(`#${projectNo}-carousel`).owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1
    });
}

$( document ).ready(function() {
    document.getElementById('project1').style.display = 'flex';
    $('#project1-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1
    });
    var docWidth = document.documentElement.offsetWidth;
    
    [].forEach.call(
      document.querySelectorAll('*'),
      function(el) {
        if (el.offsetWidth > docWidth) {
          console.log(el);
        }
      }
    );
});
