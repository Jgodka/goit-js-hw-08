// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('beforeend', createMarkupItems(galleryItems));
galleryEl.addEventListener('click', handlerClickGallery);

function createMarkupItems(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join('');
}

function handlerClickGallery(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('.gallery__image')) {
    return;
  }
}
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {});
