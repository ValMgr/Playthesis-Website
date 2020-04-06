/* 
 * Playthesis ©
 * Author: Valentin Magry - 2020
 * MMI Bordeaux
 */

var page = document.getElementById('content');

page.addEventListener('scroll', function() {
  
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
  var halfHeight = height0 / 2;

  if(page.scrollTop < height0 - halfHeight){
     if($(".selected") != $(".dots")[0]){
          $(".selected").removeClass("selected");
          $(".dots:eq(0)").addClass("selected");
          $("#current-position").html("ACCUEIL");
          WhiteText();
          $('#mute').show();
     }
  }

  if(page.scrollTop > height0 -halfHeight && page.scrollTop < height1 -halfHeight){
      if($(".selected") != $(".dots")[1]){
           $(".selected").removeClass("selected");
           $(".dots:eq(1)").addClass("selected");
           $("#current-position").html("CONCEPT");
           BlackText();
           $('#mute').hide();
      }
   }

   if(page.scrollTop > height1 -halfHeight && page.scrollTop < height2 -halfHeight){
      if($(".selected") != $(".dots")[2]){
           $(".selected").removeClass("selected");
           $(".dots:eq(2)").addClass("selected");
           $("#current-position").html("SOLUTION");
           BlackText();
           $('#mute').hide();
      }
   }

   if(page.scrollTop > height2 -halfHeight && page.scrollTop < height3 -halfHeight){
    if($(".selected") != $(".dots")[3]){
           $(".selected").removeClass("selected");
           $(".dots:eq(3)").addClass("selected");
           $("#current-position").html("POURQUOI NOUS");
           BlackText();
           $('#mute').hide();
      }
   }
 
   if(page.scrollTop > height3 -halfHeight && page.scrollTop < height4 -halfHeight){
    if($(".selected") != $(".dots")[4]){
           $(".selected").removeClass("selected");
           $(".dots:eq(4)").addClass("selected");
           $("#current-position").html("POURQUOI NOUS");
           BlackText();
           $('#mute').hide();
      }
   }
   
   if(page.scrollTop > height4 -halfHeight && page.scrollTop < height5 -halfHeight){
    if($(".selected") != $(".dots")[5]){
           $(".selected").removeClass("selected");
           $(".dots:eq(5)").addClass("selected");
           $("#current-position").html("NOS JEUX");
           WhiteText();
           $('#title').hide();
      }
   }
   
   if(page.scrollTop > height5 -halfHeight && page.scrollTop < height6 -halfHeight){
    if($(".selected") != $(".dots")[6]){
           $(".selected").removeClass("selected");
           $(".dots:eq(6)").addClass("selected");
           $("#current-position").html("À PROPOS");
           BlackText();
           $('#mute').hide();
      }
   }
   
   if(page.scrollTop > height6 -halfHeight){
    if($(".selected") != $(".dots")[7]){
           $(".selected").removeClass("selected");
           $(".dots:eq(7)").addClass("selected");
           $("#current-position").html("CONTACT");
           BlackText();
           $('#mute').hide();
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