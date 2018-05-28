class PhotoController{

  constructor(){

    let $ = document.querySelector.bind(document);
    this._listaPhotos = new ListaPhotos();
    this._photoView = new PhotoView($('.album'));
    this._effectHelper = new EffectHelper();
    this._carouselView = new CarouselView($('.album-to-show'));
    this._carouselHelper = new CarouselHelper();
  }

  onClickPhoto(){
    let x;
    let local = $(this)[0];

    $('.photo-album').each(function(n){
      let e = $(this);
      e.click(() => {
        if(photos[$('.photo-album').index(e)].album){
          x = (photos[$('.photo-album').index(e)].album.photosAlbum);
          local._carouselView.update(x);
          local._carouselHelper.changePhoto();
        } else{

          x = photos[$('.photo-album').index(e)].src;
          local._carouselView.updatePhoto(x);
          $('.photo-album-to-show').fadeIn();
          $('.close-album').click(function() {
            albumToShow.fadeOut();
          });
        }


      });
    });



  }


  add(src,cards,album){
    this._listaPhotos.add(new Photo(src,cards,album));
    this._photoView.update(this._listaPhotos);
    new EffectHelper().adjustImage();
    new EffectHelper().cardsEffect();
  }

  showAlbum(album){


  }



}
