document.body.onload = function() {

  setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if( !preloader.classList.contains('done') )
    {
      preloader.classList.add('done');
      preloader.style.background = 'transparent';
      preloader.style.zIndex = '0';
    }
  }, 2000)
}