(function () {
  function updateGallery(gallery, nextIndex) {
    var images = gallery.querySelectorAll('.portfolio-modal__gallery-stage img');
    var total = images.length;

    if (!total) {
      return;
    }

    var index = (nextIndex + total) % total;
    var current = gallery.querySelector('[data-gallery-current]');
    var totalLabel = gallery.querySelector('[data-gallery-total]');

    images.forEach(function (image, imageIndex) {
      var isActive = imageIndex === index;
      image.classList.toggle('is-active', isActive);
      image.setAttribute('aria-hidden', String(!isActive));
    });

    if (current) {
      current.textContent = String(index + 1);
    }

    if (totalLabel) {
      totalLabel.textContent = String(total);
    }
  }

  document.addEventListener('click', function (event) {
    var control = event.target.closest('[data-gallery-prev], [data-gallery-next]');

    if (!control) {
      return;
    }

    var gallery = control.closest('[data-gallery]');
    var activeImage = gallery.querySelector('.portfolio-modal__gallery-stage img.is-active');
    var images = Array.prototype.slice.call(gallery.querySelectorAll('.portfolio-modal__gallery-stage img'));
    var activeIndex = Math.max(images.indexOf(activeImage), 0);
    var direction = control.hasAttribute('data-gallery-next') ? 1 : -1;

    event.preventDefault();
    updateGallery(gallery, activeIndex + direction);
  });

  document.querySelectorAll('[data-gallery]').forEach(function (gallery) {
    gallery.querySelectorAll('.portfolio-modal__gallery-stage img').forEach(function (image) {
      var preloadedImage = new Image();
      preloadedImage.src = image.currentSrc || image.src;
    });

    updateGallery(gallery, 0);
  });
}());
