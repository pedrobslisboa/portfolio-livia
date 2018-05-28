class Photo{

  constructor(src,cards,album){

    this._src = src;
    this._cards = cards;
    this._album = album;
  }

  get src(){
    return this._src;
  }

  get cards(){
    return this._cards;
  }
  get album(){
    return this._album;
  }

}
