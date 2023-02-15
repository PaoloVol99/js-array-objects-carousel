// let slidesList = [
//     "./img/01.jpg", 
//     "./img/02.jpg",
//     "./img/03.jpg",
//     "./img/04.jpg",
//     "./img/05.jpg"
// ]



const slidesList = [
    {
        image: './img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
]

const images = []
const titles = []
const texts = []

slidesList.forEach((element, i, array) => {
    const {image, title, text} = slidesList[i]
    console.log(image)
    images.push(image)
    titles.push(title)
    texts.push(text)
});

console.log(images)



const wrapper = document.createElement("div")
wrapper.classList.add('wrapper')
document.body.appendChild(wrapper);
const carousel = document.createElement("ul")
carousel.classList.add('carousel')
wrapper.appendChild(carousel)
const arrowWrapper = document.createElement("div")
arrowWrapper.classList.add('arrow-wrapper')
wrapper.appendChild(arrowWrapper)
let arrowsElements = `
<i id="arrow-left" class="arrow arrow-left fa-solid fa-chevron-left"></i>
<i id="arrow-right" class="arrow arrow-right fa-solid fa-chevron-right"></i>
`
arrowWrapper.innerHTML = arrowsElements

let slideElements

for (let i = 0; i < images.length; i++) {
    const slide = document.createElement("li")
    slide.classList.add('slide')
    carousel.appendChild(slide)
    slideElements = document.querySelectorAll("li")
    slideElements[i].innerHTML = `
    <img src="${images[i]}" alt="">
    <div class="info">
        <h1 class="title">${titles[i]}</h1>
        <p class="text">${texts[i]}</p>
    </div>
    `
}

let firstSlide = slideElements[0]
firstSlide.classList.add ('active')

let arrowRight = document.getElementById('arrow-right')
let arrowLeft = document.getElementById('arrow-left')
let activeSlideIndex = 0
let playElement = document.querySelector('.play')
let playIcon = document.querySelector('.play .fa-play')
let stopIcon = document.querySelector('.play .fa-stop')
let previousElement = document.querySelector('.previous')
previousElement.style.backgroundColor = 'gray'
let nextElement = document.querySelector('.next')

arrowRight.addEventListener('click', nextSlide)

arrowLeft.addEventListener('click', previousSlide)

let interval
let playing = false
let next = true
let previous = false

nextElement.addEventListener('click', function() {
    if (previous === true) {
        previousElement.style.backgroundColor = 'gray'
        this.style.backgroundColor = 'rgb(53, 83, 131)'
        next = true
        previous = false
        console.log ('next:', next, 'previous:', previous)
    }
})

previousElement.addEventListener('click', function() {
    if (next === true) {
        nextElement.style.backgroundColor = 'gray'
        this.style.backgroundColor = 'rgb(53, 83, 131)'
        previous = true
        next = false
        console.log ('next:', next, 'previous:', previous)
    }
})

playElement.addEventListener('click', function() {
    if (playing === false) {
        playIcon.style.display = 'none'
        stopIcon.style.display = 'block'
        clearInterval(interval)
        console.log(interval)
        playing = true
        if (previous === true) {
            interval = setInterval(previousSlide, 3000)
        } else if (next === true ) {
            interval = setInterval(nextSlide, 3000)
        }
    } else {
        playIcon.style.display = 'block'
        stopIcon.style.display = 'none'
        clearInterval(interval)
        playing = false
    }
})




// FUNCTIONS


function nextSlide() {

    let currentSlide = slideElements[activeSlideIndex]
    let nextSlide = slideElements[activeSlideIndex + 1]
    
    if (activeSlideIndex < slideElements.length - 1) {
        currentSlide.classList.remove('active')
        nextSlide.classList.add('active')
        activeSlideIndex++
    } else {
        activeSlideIndex -= slideElements.length 
        currentSlide.classList.remove('active')
        nextSlide = slideElements[activeSlideIndex + 1]
        nextSlide.classList.add('active')
        activeSlideIndex++
    }

}

function previousSlide() {
    

    let currentSlide = slideElements[activeSlideIndex]
    let nextSlide = slideElements[activeSlideIndex - 1]
    
    if (activeSlideIndex > 0) {
        currentSlide.classList.remove('active')
    
        nextSlide.classList.add('active')
        activeSlideIndex -= 1
    } else {
        activeSlideIndex += slideElements.length 
        currentSlide.classList.remove('active')
        nextSlide = slideElements[activeSlideIndex - 1]
        nextSlide.classList.add('active')
        activeSlideIndex -= 1
    }
    
}