class ListaPhotos{
  constructor(){
    this._photos = [];
  }

  add(photo){
    this._photos.push(photo);
  }

  get photos(){
    return [].concat(this._photos);
  }
}
