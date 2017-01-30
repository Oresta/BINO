$(function() {
//Mobile menu

  var body = $('body');
      menuBtn = $('.toggle-menu'),
      menu = $('header .menu'),
      overlay = $('.overlay');

  menuBtn.click(function() {
    menuBtn.toggleClass('active');
    menu.toggleClass('active');

    if(menu.hasClass('active')){
      overlay.fadeIn(500);
      body.addClass('no-scroll');
    }
    else{
      overlay.fadeOut(500);
      body.removeClass('no-scroll');
    }
  });

  overlay.click(function() {
    menuBtn.toggleClass('active');
    menu.toggleClass('active');
    overlay.fadeOut(500);
    body.removeClass('no-scroll');
  });
  
  // Move to top
  var $moveUp = $('.move-up');
  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
	  $moveUp.fadeIn();
    } else {
      $moveUp.fadeOut();
    }
  });
  
  $moveUp.click(function (e) {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    e.preventDefault();
  });

  //Slider background
  var $rightButton = $('.right-button');
  var $leftButton = $('.left-button');

  var imgArr = new Array(
    '../images/background.jpg',
    '../images/background-2.png',
    '../images/background-road.png'
 );
 
 var preloadArr = new Array();
 var i;
 
 for(i=0; i < imgArr.length; i++){
    preloadArr[i] = new Image();
    preloadArr[i].src = imgArr[i];
 }
 
 var currImg = 0;

function setButtonDisabled() {
  $leftButton.removeClass('not-active');
  $rightButton.removeClass('not-active');
  if(currImg == 0) {
    $leftButton.addClass('not-active');
  } else if(currImg == preloadArr.length - 1) {
    $rightButton.addClass('not-active');
  }
}

function changeImg(currImg) {
  $('header').animate({opacity: 0}, 1000, function() {
    $(this).css({'background': 'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(' 
      + preloadArr[currImg].src +')',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'});
  }).animate({opacity: 1}, 1000);
}

 $rightButton.click(function(e) {
   if(currImg < preloadArr.length - 1) {
     currImg += 1;
     setButtonDisabled();
     changeImg(currImg);
   }
   e.preventDefault();
 });

 $leftButton.click(function(e) {
   if(currImg > 0) {
     currImg -= 1;
     setButtonDisabled();
     changeImg(currImg);
   }
   e.preventDefault();
 });

 //Services

 var $servicesItems = $('.services .info-item');
 var $vrLines = $('.vr-lines .vr-lines-item');

 $servicesItems.eq(0).hover(function(e) {
    $vrLines.eq(0).toggleClass('active');
    e.preventDefault();
  });
  $servicesItems.eq(1).hover(function(e) {
    $vrLines.eq(1).toggleClass('active');
    e.preventDefault();
  });
  $servicesItems.eq(2).hover(function(e) {
    $vrLines.eq(2).toggleClass('active');
    e.preventDefault();
  });

 for(let i = 0; i < $servicesItems.lenght; i++) {
   $servicesItems.eq(i).hover(function(e) {
      $vrLines.eq(i).toggleClass('active');
      e.preventDefault();
    });
 }

});
