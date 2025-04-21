const slides = document.querySelectorAll('.slide')
let counter = 0
// console.log(slide)

slides.forEach(                 // initial position of slide
    (slides, index) => {
        slides.style.left = `${index*100}%`
    }
)   

const goPrevious = () => {
    counter = Math.max(counter - 1, 0)      // limits to 0 as well as decrements
    console.log(counter)
    slideImage()
}

const goNext = () => {
    counter = Math.min(counter + 1, slides.length -1)       // limits to length-4 due to 0 to 4 = 5 elements as well as increments
    console.log(counter)
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}


// Auto-play functionality
const autoPlay = () => {
    counter = (counter + 1) % slides.length; // Loops back to the first slide due to modulo
    slideImage();
};


// Pause auto-play on user interaction
const pauseAutoPlay = () => {
    let interval = setInterval(autoPlay, 3000);     // 3 seconds
    clearInterval(interval); // Stops the interval
    interval = setInterval(autoPlay, 3000);     // reset interval
};

// Attach event listeners to buttons to pause auto-pla
document.querySelector('.previous').addEventListener('click', pauseAutoPlay);
document.querySelector('.next').addEventListener('click', pauseAutoPlay);