 
let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let items = container.querySelectorAll('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setIndicator() {
    
    document.querySelector('.indicators .number').innerHTML = String(active + 1).padStart(2, '0')
    
   
    let dots = document.querySelectorAll('.indicators ul li')
    dots.forEach((dot, i) => {
        if (i === active) {
            dot.classList.add('active')
        } else {
            dot.classList.remove('active')
        }
    })
}

function updateActiveClass() {
    
    items.forEach(item => {
        item.classList.remove('active')
    })
    
   
    items[active].classList.add('active')
    
    
    const list = document.querySelector('.list')
    
    
    if (window.direction === 'prev') {
        list.style.setProperty('--calculation', '-1')
    } else if (window.direction === 'next') {
        list.style.setProperty('--calculation', '1')
    }
    
   
    void list.offsetHeight
}


prevButton.onclick = () => {
    window.direction = 'prev'
    
    active--
    if (active < firstPosition) {
        active = lastPosition
    }
    
    updateActiveClass()
    setIndicator()
}


nextButton.onclick = () => {
    window.direction = 'next'
    
    active++
    if (active > lastPosition) {
        active = firstPosition
    }
    
    updateActiveClass()
    setIndicator()
}

updateActiveClass()
setIndicator()