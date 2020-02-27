var page = document.getElementById('content');
console.log(screen.height)

page.addEventListener('scroll', function(e) {
  if(page.scrollTop < screen.height){
       var dots = document.getElementsByClassName('dots');
       dots.forEach(element => {
           element.classList.add("invert-dots");
       });
  }

});