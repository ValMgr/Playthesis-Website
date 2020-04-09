/* 
 * Playthesis ©
 * Team: Playthesis 2020
 * Developer: Valentin Magry
 * 
 * MMI Bordeaux - IUT Bordeaux Montaigne
 */

var muted = 0;

window.addEventListener('scroll', function() {
  UpdateNavbar();
  
});

function ScrollTo(section){
  $('section')[section].scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest"
  });
}

function WhiteText(){
  $('.current-position').addClass('invert-text');
  $('.title').show().addClass('invert-text');
  $('.connect:eq(0)').addClass('invert-bouton');
  $('.dots').addClass('invert-dots')
  $('.nav-span').children().addClass('white-burger')
  muted = 0;
  UpdateSound();
}

function BlackText(){
  $('.current-position').removeClass('invert-text');
  $('.title').show().removeClass('invert-text');
  $('.connect:eq(0)').removeClass('invert-bouton');
  $('.dots').removeClass('invert-dots')
  $('.nav-span').children().removeClass('white-burger')
  muted = 1;
  UpdateSound();
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

  if(window.scrollY < height0 - halfHeight){
     if($(".selected") != $(".dots")[0]){
          $(".selected").removeClass("selected");
          $(".dots:eq(0)").addClass("selected");
          $(".current-position").html("ACCUEIL");
          WhiteText();
     }
  }

  if(window.scrollY > height0 -halfHeight && window.scrollY < height1 -halfHeight){
      if($(".selected") != $(".dots")[1]){
           $(".selected").removeClass("selected");
           $(".dots:eq(1)").addClass("selected");
           $(".current-position").html("CONCEPT");
           BlackText();
      }
   }

   if(window.scrollY > height1 -halfHeight && window.scrollY < height2 -halfHeight){
      if($(".selected") != $(".dots")[2]){
           $(".selected").removeClass("selected");
           $(".dots:eq(2)").addClass("selected");
           $(".current-position").html("SOLUTION");
           BlackText();
      }
   }

   if(window.scrollY > height2 -halfHeight && window.scrollY < height3 -halfHeight){
    if($(".selected") != $(".dots")[3]){
           $(".selected").removeClass("selected");
           $(".dots:eq(3)").addClass("selected");
           $(".current-position").html("POURQUOI NOUS");

           if($(window).width() < 640){
             WhiteText();
           }
           else{
            BlackText();
           }
      }
   }
 
   if(window.scrollY > height3 -halfHeight && window.scrollY < height4 -halfHeight){
    if($(".selected") != $(".dots")[4]){
           $(".selected").removeClass("selected");
           $(".dots:eq(4)").addClass("selected");
           $(".current-position").html("POURQUOI NOUS");
           BlackText();
      }
   }
   
   if(window.scrollY > height4 -halfHeight && window.scrollY < height5 -halfHeight){
    if($(".selected") != $(".dots")[5]){
           $(".selected").removeClass("selected");
           $(".dots:eq(5)").addClass("selected");
           $(".current-position").html("NOS JEUX");
           WhiteText();
           $('.title').hide();
      }
   }
   
   if(window.scrollY > height5 -halfHeight && window.scrollY < height6 -halfHeight){
    if($(".selected") != $(".dots")[6]){
           $(".selected").removeClass("selected");
           $(".dots:eq(6)").addClass("selected");
           $(".current-position").html("À PROPOS");
           BlackText();
      }
   }
   
   if(window.scrollY > height6 -halfHeight){
    if($(".selected") != $(".dots")[7]){
           $(".selected").removeClass("selected");
           $(".dots:eq(7)").addClass("selected");
           $(".current-position").html("CONTACT");
           BlackText();
      }
   }
}

function UpdateSound(){
  if($('#video').prop('muted') == true){
    $('#mute-btn').attr('src', 'Assets/pictures/icons/mute'+muted+'.png');
  }
  else{
    $('#mute-btn').attr('src', 'Assets/pictures/icons/speaker'+muted+'.png');
  }
}

function muteSound(){
  if($('#video').prop('muted') == false){
    $('#video').prop('muted', true);
    $('#mute-btn').attr('src', 'Assets/pictures/icons/mute'+muted+'.png');
  }
  else{
    $('#video').prop('muted', false);
    $('#mute-btn').attr('src', 'Assets/pictures/icons/speaker'+muted+'.png');
  }
}
