var page = document.getElementById('content');

page.addEventListener('scroll', function() {
  
  if(page.scrollTop < window.innerHeight/2){
    WhiteText();
    $('#mute').show();
  }
  else if(page.scrollTop > window.innerHeight*4.5 && page.scrollTop < window.innerHeight*5.5){
    WhiteText();
    $('#title').hide();
  }
  else{
    BlackText();
    $('#mute').hide();
  }

  UpdateNavbar();

});

function ScrollTo(section){

  target = document.getElementById(section);
  target.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
  });
}

function WhiteText(){
  $('#current-position').addClass('invert-text');
  $('#title').show().addClass('invert-text');
  $('#connect').addClass('invert-bouton');
  $('.dots').addClass('invert-dots')
}

function BlackText(){
  $('#current-position').removeClass('invert-text');
  $('#title').show().removeClass('invert-text');
  $('#connect').removeClass('invert-bouton');
  $('.dots').removeClass('invert-dots')
}

function UpdateNavbar(){

  var height0 = $("#intro").height() // #intro height
  var height1 = height0 + $("#concept").height(); // #concept height
  var height2 = height1 + $("#solution").height(); // #solution height
  var height3 = height2 + $("#why").height(); // #why height
  var height4 = height3 + $("#why2").height(); // #why2 height
  var height5 = height4 + $("#our-games").height(); // #our-games height
  var height6 = height5 + $("#about").height(); // #about height
  // var height7 = height6 + $("#contact").height(); // #contact height
  var transition = height0 / 2;

  if(page.scrollTop < height0 - transition){
     if($(".selected") != $(".dots")[0]){
          $(".selected").removeClass("selected");
          $(".dots:eq(0)").addClass("selected");
          $("#current-position").html("ACCUEIL");
     }
  }

  if(page.scrollTop > height0 -transition && page.scrollTop < height1 -transition){
      if($(".selected") != $(".dots")[1]){
           $(".selected").removeClass("selected");
           $(".dots:eq(1)").addClass("selected");
           $("#current-position").html("CONCEPT");

      }
   }

   if(page.scrollTop > height1 -transition && page.scrollTop < height2 -transition){
      if($(".selected") != $(".dots")[2]){
           $(".selected").removeClass("selected");
           $(".dots:eq(2)").addClass("selected");
           $("#current-position").html("SOLUTION");

      }
   }

   if(page.scrollTop > height2 -transition && page.scrollTop < height3 -transition){
    if($(".selected") != $(".dots")[3]){
           $(".selected").removeClass("selected");
           $(".dots:eq(3)").addClass("selected");
           $("#current-position").html("POURQUOI NOUS");

      }
   }
 
   if(page.scrollTop > height3 -transition && page.scrollTop < height4 -transition){
    if($(".selected") != $(".dots")[4]){
           $(".selected").removeClass("selected");
           $(".dots:eq(4)").addClass("selected");
           $("#current-position").html("POURQUOI NOUS");

      }
   }
   
   if(page.scrollTop > height4 -transition && page.scrollTop < height5 -transition){
    if($(".selected") != $(".dots")[5]){
           $(".selected").removeClass("selected");
           $(".dots:eq(5)").addClass("selected");
           $("#current-position").html("NOS JEUX");

      }
   }
   
   if(page.scrollTop > height5 -transition && page.scrollTop < height6 -transition){
    if($(".selected") != $(".dots")[6]){
           $(".selected").removeClass("selected");
           $(".dots:eq(6)").addClass("selected");
           $("#current-position").html("À PROPOS");

      }
   }
   
   if(page.scrollTop > height6 -transition){
    if($(".selected") != $(".dots")[7]){
           $(".selected").removeClass("selected");
           $(".dots:eq(7)").addClass("selected");
           $("#current-position").html("CONTACT");

      }
   }
}


function muteSound(){
  var audio = document.getElementById('myVideo');
  var btn = document.getElementById('mute-btn');

  if(audio.muted == false){
    audio.muted = true;
    btn.src = 'Assets/pictures/icons/mute.png';
  }
  else{
    audio.muted = false;
    btn.src = 'Assets/pictures/icons/speaker.png';
  }
}