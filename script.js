// ======================HEADER======================
let input_search = document.getElementById('input_search');
let header = document.querySelector('header')
let nav = document.querySelector('header nav')

// show and hide the navBar 
document.onscroll = () => {
    if (window.scrollY > '170') {
        header.style.position = 'fixed'
        header.style.background = 'var(--main_color)'
        header.style.boxShadow = '1px 1px 5px #000'
        nav.style.borderBottom = 'none'
    } else {
        header.style.position = 'absolute'
        header.style.background = 'transparent'
        header.style.boxShadow = 'none'
        nav.style.borderBottom = '1px solid #ffffff42'
    }
}
// show and hide the input search
input_search.onclick = () => {
    input_search.style.width = '200px'
    input_search.style.background = '#ebebeb'
}
input_search.onblur = () => {
    input_search.style.width = '40px'
    input_search.style.background = 'transparent'
}
// ======================NAVBAR======================
let bars = document.querySelector('.bars i');
let navLink = document.getElementById('navLink');
let links = document.querySelectorAll('#navLink li a')
bars.onclick = () => {

    navLink.classList.toggle('respon')

}
navLink.addEventListener('click', (e) => {

    links.forEach((link) => {

        link.classList.remove('active');

    });

    e.target.classList.add('active');
})
// ======================SLIIDER HERO===========================
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// ============================OUR SKILLS===========================
let testOnePara = document.querySelector('#test_one p ')
let testOneHeader = document.querySelector('#test_one h5')
let testTwoPara = document.querySelector('#test_two p ')
let testTwoHeader = document.querySelector('#test_two h5')
let bullets = document.querySelectorAll('.ourSkills .bullets span')
let info = [{
    name: 'one',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing ',
    header: 'john doe One'
}, {
    name: 'two',
    para: 'Lorem ipsum dolor consectetur adipisicing elitLorem kloase dolor sit amet consectetur adipisicing ',
    header: 'john doe Two'
}, {
    name: 'three',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem  amet consectetur adipisicing ',
    header: 'john doe Three'
}
]
testOnePara.textContent = info[0].para
testOneHeader.textContent = info[0].header
testTwoPara.textContent = info[0].para
testTwoHeader.textContent = info[0].header

function changeContent(eleNumber) {
    if (eleNumber == 1) {
        changeBullets(eleNumber)
        content(eleNumber)
    }
    if (eleNumber == 2) {
        changeBullets(eleNumber)
        content(eleNumber)
    }
    if (eleNumber == 3) {
        changeBullets(eleNumber)
        content(eleNumber)
    }
}
function changeBullets(number) {
    bullets.forEach((span) => {
        span.classList.remove('active')
    })
    bullets[number - 1].classList.add('active')
}
function content(index) {
    testOnePara.textContent = info[index - 1].para
    testOneHeader.textContent = info[index - 1].header
    testTwoPara.textContent = info[index - 1].para
    testTwoHeader.textContent = info[index - 1].header
}
// =========================PORTFOLIO=============================// 

let portfolio_ul = document.getElementById('portfolio_list');
let portfolio_lis = document.querySelectorAll('#portfolio_list li');
let portfolioBoxs = document.querySelectorAll('.portfolio .box');

portfolio_ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'UL') {
        return
    }

    let liText = e.target.textContent;
    portfolio_lis.forEach((link) => {

        link.classList.remove('active');

    });

    e.target.classList.add('active');

    showBox(liText)
})

function showBox(box) {
    portfolioBoxs.forEach((e) => {
        e.style.display = 'none'
        if (e.dataset.id === box) {
            e.style.display = 'flex'
        }

        if (e.dataset.id === box) {
            e.style.display = 'flex'
        }

        if (e.dataset.id === box) {
            e.style.display = 'flex'
        }

        if (e.dataset.id === box) {
            e.style.display = 'flex'
        }

        if (box == 'all') {
            e.style.display = 'flex'
        }
    })
}