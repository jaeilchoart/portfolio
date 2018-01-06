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
      '../assets/comics/sketch-page/robot-sketch-1-copy_2017-11-11/robot-sketch-1-copy@3x.jpg',
      '../assets/comics/sketch-page/noodle-crew-copy_2017-11-11/noodle-crew-copy@3x.jpg',
      '../assets/comics/sketch-page/robot-sketch-5-bw-copy_2017-11-11/robot-sketch-5-bw-copy@3x.jpg',
      '../assets/comics/sketch-page/crime-boss_2017-11-11/crime-boss@3x.jpg',
      '../assets/comics/sketch-page/two-girls-night-out-copy_2017-11-11/two-girls-night-out-copy@3x.jpg',
      '../assets/comics/sketch-page/estherpark_2017-11-11/estherpark@3x.jpg',
      '../assets/comics/sketch-page/sherdog-jon-jones-vs-daniel-cormier-bw_2017-11-11/sherdog-jon-jones-vs-daniel-cormier-bw@3x.jpg',
      '../assets/comics/sketch-page/new-power-generation-copy_2017-11-11/new-power-generation-copy@3x.jpg',
      '../assets/comics/sketch-page/two-warriors-battling_2017-11-11/two-warriors-battling@3x.jpg',
      '../assets/comics/sketch-page/mtp-cover_2017-11-11/mtp-cover@3x.jpg'
    ];
    const length = imgArray.length - 1;
    // use var syntax to make it used as a global variable within this scope
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