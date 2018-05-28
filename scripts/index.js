/**
 * index.js
 letAll our useful JS goes here, awesome!
 */

let cards = `<div class="cards-album">
  <div class="card" id="card-1">
    <div class="card" id="card-2">
      <div class="card" id="card-3">
      </div>
  </div>
  </div>
  </div>`;

let photos = [{src:'1.jpg',album:'',cards:''},
{src:'4.jpg',album:{name:'album-1',
photosAlbum:['1.jpg','2.jpg','3.jpg']},cards:cards,number:''},
{src:'3.jpg',album:'',cards:'',number:''},{src:'4.jpg',album:'',cards:'',number:''},{src:'5.jpg',album:{ name:'album-1',
photosAlbum:['3.jpg','5.jpg','4.jpg']},cards:'',number:''},{src:'4.jpg',cards:,number:''},{src:'1.jpg',album:'',cards:''},
{src:'4.jpg',album:{name:'album-1',
photosAlbum:['1.jpg','2.jpg','3.jpg']},cards:cards,number:''},
{src:'3.jpg',album:'',cards:'',number:''},{src:'4.jpg',album:'',cards:'',number:''},{src:'5.jpg',album:{ name:'album-1',
photosAlbum:['3.jpg','5.jpg','4.jpg']},cards:'',number:''},{src:'4.jpg',cards:,number:''}];


let body = $("body");
let portfolio = $(".portifolio");
let navbar = $(".nav-bar");
let photo = $('.photo');
let photoAlbum = $('.photo-album');
let closeAlbumButton = $('.close-album');
let albumToShow = $('.album-to-show');
let main =$('main');
let dots = $('.dot');


function fixNav(){
  var top = this.scrollY;
  if(top > 150){
    navbar.addClass('nav-bar-fixed');
    navbar.removeClass('nav-bar');
  } else{
    navbar.removeClass('nav-bar-fixed');
    navbar.addClass('nav-bar');
  }
  console.log(top);
}
$(window).scroll(fixNav);


let controller = new PhotoController();

for(var i=0;i<photos.length;i++){
  controller.add(photos[i].src,photos[i].cards,photos[i].album);
}





$(document).ready(function() {
 $('#body').show();
main.fadeIn();
controller.onClickPhoto();
});
