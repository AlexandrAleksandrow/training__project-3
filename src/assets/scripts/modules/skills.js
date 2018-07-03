const skillsList = document.querySelector('.skills-list')
const circle = document.querySelectorAll('.skill__circle')

document.addEventListener ('scroll', e => {
  if(skillsList.getBoundingClientRect().top <= 264) {
    for (let item of circle) {      
      item.classList.add('skill__circle_above')
    }    
  } 
})
