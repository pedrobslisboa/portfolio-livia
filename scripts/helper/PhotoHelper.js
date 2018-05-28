class EffectHelper{

  constructor(){

    this._elemento = $('.photo-album');

  }

  adjustImage(){

    this._elemento.each(function() {
      let e = $(this);
      let img = e.children('img');
      let imgHeight = e.height();
      let imgWidth = e.height();

      if(imgHeight > imgWidth){
        img.css({
          width:'100%',
          top:'0',
          bottom:'0'
        });
      } else {
        img.css({
          height:'100%',
          left:'0',
          right:'0'
        });
      }});

    }

    cardsEffect(){
      this._elemento.each(function(){
        let e = $(this);
        e.stop().hover(function(){
          e.find('.card').animate({
            bottom: '+=2',
            right: '+=2'
          },100);
        },function(){
          e.find('.card').animate({
            bottom: '-=2',
            right: '-=2'
          },100);
        });
      });
    }


  }
