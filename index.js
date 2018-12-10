window.addEventListener("load", function (event) {
  //Animate card images on home page
  initHomePageAnimations();
});

//Extending jquery to to remove animation classes once finished 
$.fn.extend({
  animateCss: function (animationName, callback) {
    var animationEnd = (function (el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function () {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

function initHomePageAnimations() {
  var animation = 'pulse slow';
  var itemToAnimate = $('.card');
  itemToAnimate.mouseenter(function () {
    $element = $(this);
    $element.animateCss(animation);
  });

  fadeCardsOnHover();
}

function fadeCardsOnHover() {
  var $cardArray = $('.card');

  $.each($cardArray, function($key, $value) {
    //The card object
    var $card = $($value);

    //Fading in/out the card's card-body child class element 
    var $cardBody = $card.find('.card-body');
    $card.mouseenter(function() {
      fadeOut($cardBody);
    });
  
    $card.mouseleave(function() {
      fadeIn($cardBody);
    });
  })

}

function fadeIn($element) {
  $element.fadeTo(300, 1.0);
}

function fadeOut($element) {
  $element.fadeTo(300, 0.85);
}