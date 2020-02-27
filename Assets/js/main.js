var page = document.getElementById('content');
console.log(window.innerHeight)

page.addEventListener('scroll', function() {
  var dots = document.getElementsByClassName('dots');
  var rightLinks = document.getElementById('right-nav').children;
  
  if(page.scrollTop < window.innerHeight/2){
    document.getElementById('current-position').classList.add('invert-text')
    document.getElementById('title').classList.add('invert-text')
    rightLinks[0].classList.add('invert-bouton')

    for(i=1;i<rightLinks.length;i++){
      rightLinks[i].classList.add('invert-text')
    }

    for(i=0;i<dots.length;i++){
      dots[i].classList.add('invert-dots');
    }
  }
  else{
    document.getElementById('current-position').classList.remove('invert-text')
    document.getElementById('title').classList.remove('invert-text')
    rightLinks[0].classList.remove('invert-bouton')

    for(i=0;i<dots.length;i++){
      dots[i].classList.remove('invert-dots');
    }
    for(i=1;i<rightLinks.length;i++){
      rightLinks[i].classList.remove('invert-text')
    }
  }

  UpdateScroll();

});

function ScrollTo(section){

  target = document.getElementById(section);
  target.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
  });
}

function UpdateScroll(){

  var dots = document.getElementsByClassName('dots');

  for(i=0;i<dots.length;i++){
    dots[i].classList.remove('selected');
  }



  switch (page.scrollTop) {
    case 0:
      document.getElementById('current-position').innerHTML = "ACCUEIL";
      dots[0].classList.add('selected');
      document.getElementById('title').style.visibility = 'visible';

      break;

    case window.innerHeight:
      document.getElementById('current-position').innerHTML = "LE CONCEPT";
      dots[1].classList.add('selected');
      document.getElementById('title').style.visibility = 'visible';

      break;

    case window.innerHeight *2:
      document.getElementById('current-position').innerHTML = "NOTRE SOLUTION";
      dots[2].classList.add('selected');
      document.getElementById('title').style.visibility = 'visible';

      break;

    case window.innerHeight*3:
      document.getElementById('current-position').innerHTML = "POURQUOI NOUS";
      dots[3].classList.add('selected');
      document.getElementById('title').style.visibility = 'visible';

      break;

    case window.innerHeight*4:
      document.getElementById('current-position').innerHTML = "POURQUOI NOUS";
      dots[4].classList.add('selected');
      document.getElementById('title').style.visibility = 'visible';

      break;

    case window.innerHeight*5:
      document.getElementById('current-position').innerHTML = "NOS JEUX";
      dots[5].classList.add('selected');
      document.getElementById('title').style.visibility = 'hidden';

      break;
  
    default:
      break;
  }
}