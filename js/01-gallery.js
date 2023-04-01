import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");
list.addEventListener('click', OnClick);
let markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`).join("");
list.innerHTML = markup;
function OnClick(evt) {
    evt.preventDefault();
    const { target } = evt;
    if (!target.classList.contains("gallery__image")) {
        return;
    }
    const bigImageUrl = target.dataset.source;
    const imgAlt = target.alt;
    const instance = basicLightbox.create(`<img src="${bigImageUrl}" alt="${imgAlt}">`,
        {
            onShow: (instance) => document.addEventListener("keydown", onKeyPress),
            onClose: (instance) => document.removeEventListener("keydown", onKeyPress)
        });
    instance.show()
    function onKeyPress(evt) {
        if (evt.code === "Escape") {
            instance.close();
            }
        }
}
console.log(galleryItems);