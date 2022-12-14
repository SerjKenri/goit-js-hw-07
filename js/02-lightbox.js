import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGallery (galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);


function createGallery (galleryItems) { 
    return galleryItems.map(({preview, original, description}) => 
        `<div class="gallery">
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
        </a></div>`
).join("");
};

new SimpleLightbox('.gallery a', {
	captionDelay: 250
})
