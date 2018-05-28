class CarouselHelper {

  constructor(){
    this._elemento = $('.dot');
  }

  changePhoto(){

    $('.close-album').click(function() {
      albumToShow.fadeOut();
    });

        let slides = $('.photo-album-to-show');
        let currentSlide = 0;
        console.log(slides[currentSlide]);
        $(slides[currentSlide]).fadeIn();


        $('.before').click(function() {
          let dotOn = $('.dot-on');
          $(slides[currentSlide]).fadeOut();

          if(currentSlide <= 0){

            currentSlide = $('.dot').length - 1;
            let slideOn = slides.get(currentSlide);
            dotOn.removeClass('dot-on');
            $($('.dot').get(currentSlide)).addClass('dot-on');
            $(slideOn).fadeIn();

            return
          } else {

            currentSlide -= 1;
            let slideOn = slides.get(currentSlide);
            dotOn.removeClass('dot-on');
            $($('.dot').get(currentSlide)).addClass('dot-on');
            $(slideOn).fadeIn();

          }
        });
        $('.next').click(function() {
          let dotOn = $('.dot-on');
          $(slides[currentSlide]).fadeOut();
          console.log('ola');
          if(currentSlide >= $('.dot').length - 1){

            currentSlide = 0;
            let slideOn = slides.get(currentSlide);
            dotOn.removeClass('dot-on');
            $($('.dot').get(currentSlide)).addClass('dot-on');
            $(slideOn).fadeIn();

            return
          } else {

            currentSlide += 1;
            let slideOn = slides.get(currentSlide);
            dotOn.removeClass('dot-on');
            $($('.dot').get(currentSlide)).addClass('dot-on');
            $(slideOn).fadeIn();

          }
        });

        $('.dot').each(function(n) {
          let e = $(this);
          if(n == 0){
            e.addClass('dot-on');
          }
          e.click(function() {
          let arrayClasses = e.attr('class').split(' ');
          if(arrayClasses.includes('dot-on')){
          } else{
            console.log(slides[currentSlide]);
            let slideOn = slides.get(n);
            let dotOn = $('.dot-on');
            $(slides[currentSlide]).fadeOut();
            currentSlide = n;
            console.log(slides[currentSlide]);
            dotOn.removeClass('dot-on');
            e.addClass('dot-on');
            $(slideOn).fadeIn();

          }
        });
      });
  }

}
