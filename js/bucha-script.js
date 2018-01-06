// carousel script
(function () {
  document.addEventListener('DOMContentLoaded', function (event) {
    // use jquery to select DOM elements that we need for carousel
    const carousel = $('.carousel');
    // img-box are the animation boxes
    const imgBox = $('.img-box');
    // close button when modal is opened
    const closeBtn = $('.carousel-close');
    // carousel left button
    const left = $('.carousel-left');
    // carousel right button
    const right = $('.carousel-right');
    // contains filepath to animations in order
    const imgArray = [
      '../../assets/uxui/betta-bucha/persona-1/persona-1-intentional-isabelle@3x.png',
      '../../assets/uxui/betta-bucha/persona-2/adventurous-allie@3x.png',
    ];
    // use var syntax to make it used as a global variable within this scope
    const length = imgArray.length - 1;
    var index;

    let screenWidth = $('body').width();

    if (screenWidth > 599) {
      imgBox.on('click', function (event) {
        // prevent scrolling when modal is opened
        $('body').css('overflow', 'hidden');
        // show carousel overlay
        carousel.show();
        // add image src using the image array
        // event.target.dataset.box gets the data attribute from img-box elements
        index = event.target.dataset.box;
        $('.carousel-img').attr('src', imgArray[index]);
      });

      closeBtn.on('click', function (event) {
        // return scrolling after closing modal
        $('body').css('overflow', 'auto');
        // hide carousel modal
        carousel.hide();
      });

      left.on('click', function (event) {
        index--; // decrement 
        if (index < 0) { // keep carousel looping
          index = length;
        }
        // set the img src to the previous image
        $('.carousel-img').attr('src', imgArray[index]);
      });

      right.on('click', function (event) {
        index++; // increment
        if (index > length) { // keep carousel looping
          index = 0;
        }
        // set the img src to the next image
        $('.carousel-img').attr('src', imgArray[index]);
      });

      window.onkeyup = function (event) {
        let key = event.keyCode ? event.keyCode : event.which;
        if (key == 27) {
          $('body').css('overflow', 'auto');
          carousel.hide();
        }
      };
    }
  });
})();