class PhotoView{

    constructor(elemento) {

        this._elemento = elemento;
        Object.freeze(this);

    }

    template(model) {

      return `${model.photos.map(e => {

        return `<div class="photo-album">
              <img src="img/imgs/${e.src}">
              ${e.cards}
            </div>`;

      }).join('')}`;

    }

    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}
