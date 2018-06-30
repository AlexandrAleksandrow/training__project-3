const articles = document.querySelector('.articles')
const articlesList = document.querySelector('.articles__list')
const swipe = document.querySelector('.swipe')

//задание сайдбару position: fixed и появление зеленого полукруга по скроллу
document.addEventListener ('scroll', e => {  
  console.log(articles.getBoundingClientRect())
  if(articles.getBoundingClientRect().top < -33) {
    articlesList.classList.add('articles__list--fixed')        
  }
  
  if(articles.getBoundingClientRect().top > -33) {
    articlesList.classList.remove('articles__list--fixed')            
  }
})

//Появление зеленого полукруга
document.addEventListener ('scroll', e => {  
  console.log(articles.getBoundingClientRect())
  if(articles.getBoundingClientRect().top < 250) {
    swipe.style.display = 'block'        
  }
  
  if(articles.getBoundingClientRect().top > 250) {
    swipe.style.display = 'none'        
  }
})


// открытие сайдбара по клику на полукруг
swipe.addEventListener ('click', e => {
  (!articlesList.classList.contains('articles__list--open'))
  ? articlesList.classList.add('articles__list--open')
  : articlesList.classList.remove('articles__list--open')
})