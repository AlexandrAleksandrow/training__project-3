const skillsList = document.querySelector('.skills-list')
const circleInner = document.querySelectorAll('.skill__circle-inner')
const circle = document.querySelectorAll('.skill__circle')


document.addEventListener ('scroll', e => {
  if(skillsList.getBoundingClientRect().top <= 264) {
    for (let item of circleInner) {     
      item.classList.add('skill__circle_under')
    }
  }
})

document.addEventListener ('scroll', e => {
  if(skillsList.getBoundingClientRect().top <= 264) {
    for (let item of circle) {     
      item.classList.add('skill__circle_above')
    }
  }
})
