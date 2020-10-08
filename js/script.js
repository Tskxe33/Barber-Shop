$(document).ready(function() {
  
 // Sticky Navi
  $('.js-section-onama').waypoint(function(direction) {
      if(direction == "down") {
        $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
      offset: '25%'
  });
 //Sticky Navi 

 // Scroll on btns
    $('.js-scroll-to-zakazitermin').click(function() {
        $('html,body').animate({scrollTop: $('.js-section-zakazi-termin').offset().top}, 2000);
    });

    $('.js-scroll-to-onama').click(function() {
        $('html,body').animate({scrollTop: $('.js-section-onama').offset().top}, 2000);
    });
 // Scroll on btns


  // Navi Scroll 
    $('a[href*="#"]')
  
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
   
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
     
      if (target.length) {
        
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000, function() {
          
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
    });
  // Navi Scroll 

  // Animation on Scroll 
  $('.js-wp-1').waypoint(function(direction) {
    $('.js-wp-1').addClass('animated fadeIn');
  }, {
    offset: '60%'
  });

  $('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animated fadeInUp');
  }, {
    offset: '40%'
  });

  $('.js-wp-3').waypoint(function(direction) {
    $('.js-wp-3').addClass('animated shake');
  }, {
    offset: '50%'
  });
  // Animation on scroll

  // Mobile Navi
  $('.js-nav-icon').click(function() {
    var nav = $('.js-main-nav');
    var icon = $('.js-nav-icon ion-icon');  
    
    nav.slideToggle(400);
    
  });


  
});

