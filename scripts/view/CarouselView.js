class CarouselView {
    constructor(elemento) {
      this._elemento = elemento;
    }

    template(model){

      $(this._elemento).fadeIn();

      return `<center class="carousel">

       ${model.map(n => {

         return `<div class="photo-album-to-show">
           <img src="img/albuns/album-1/${n}" >
         </div>`

       }).join('')}

       <center class="dots">
       ${model.map(n =>{
         return `
          <div class="dot"></div>
          `}).join('')}
          </center>
          <div class="before">
          </div>
          <div class="next">
          </div>
          </center>
          <div class='close-album'>
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
          </div>
        `;
        }

    update(model){
        this._elemento.innerHTML = this.template(model);
    }

    templatePhoto(model){

      $(this._elemento).fadeIn();

      return `<center class="carousel">
      <div class="photo-album-to-show">
        <img src="img/imgs/${model}" >
      </div>
</center>
<div class='close-album'>
<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
</svg>
</div>
`;
        }

    updatePhoto(model){
        this._elemento.innerHTML = this.templatePhoto(model);
    }




}
