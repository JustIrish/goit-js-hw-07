import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`,
  ""
);

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">`);

  instance.show();

    window.addEventListener("keydown", (e) => { 
        if (e.code === 'Escape') { 
            instance.close();
        }
    });
}
