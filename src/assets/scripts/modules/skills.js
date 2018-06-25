const skillsList = document.querySelector('.skills-list')
const fill = document.querySelectorAll('.skill__circle')

let animation = 0

document.addEventListener ('scroll', e => {
  if(skillsList.getBoundingClientRect().top <= 264) {
    for (item of fill) {
      delay += 0.5
      item.style.animationDelay = delay + 's'
      item.classList.add('skill__circle_above')
    }    
  } 
})