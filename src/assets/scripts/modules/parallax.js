// parallax page index

function Parallax() {
  const layers = document.querySelectorAll('.parallax__img')
        
  return {
    mouse (e) {
      let speed = 60
      
      for (let i = 0; i < layers.length; i++) {

        const pos_x = `${e.pageX / speed}px`
        const pos_y = `${e.pageY / speed}px`
        
        console.log(speed)

        layers[i].style.transform=`translate3d(${pos_x}, ${pos_y}, 0)`

        speed -= 10
      }   
    }
  }
}

const parallax = Parallax()

document.addEventListener('mousemove', e => {
  parallax.mouse(e)
})