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

(function () {
  function updateSlides(container, nextIndex, activeClass, currentSelector, totalSelector) {
    var slides = Array.prototype.slice.call(container.querySelectorAll(activeClass));
    var total = slides.length;

    if (!total) {
      return;
    }

    var activeIndex = slides.findIndex(function (slide) {
      return slide.classList.contains('is-active');
    });
    var index = (Math.max(activeIndex, 0) + nextIndex + total) % total;
    var current = container.parentElement.querySelector(currentSelector);
    var totalLabel = container.parentElement.querySelector(totalSelector);

    slides.forEach(function (slide, slideIndex) {
      var isActive = slideIndex === index;
      slide.classList.toggle('is-active', isActive);
      if (slide.tagName === 'IMG') {
        slide.setAttribute('aria-hidden', String(!isActive));
      }
    });

    if (current) {
      current.textContent = String(index + 1);
    }

    if (totalLabel) {
      totalLabel.textContent = String(total);
    }
  }

  document.addEventListener('click', function (event) {
    var tab = event.target.closest('[data-project-tab]');

    if (tab) {
      var modal = tab.closest('.frontend-modal');
      var tabName = tab.getAttribute('data-project-tab');

      modal.querySelectorAll('[data-project-tab]').forEach(function (item) {
        var isActive = item === tab;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-selected', String(isActive));
        item.tabIndex = isActive ? 0 : -1;
      });

      modal.querySelectorAll('[data-project-panel]').forEach(function (panel) {
        var isActive = panel.getAttribute('data-project-panel') === tabName;
        panel.classList.toggle('is-active', isActive);
        panel.hidden = !isActive;
      });
      return;
    }

    var mediaToggle = event.target.closest('[data-troubleshooting-media-toggle]');

    if (mediaToggle) {
      var stage = mediaToggle.closest('[data-troubleshooting]');
      var isExpanded = stage.classList.toggle('has-media');
      var label = mediaToggle.querySelector('span');

      mediaToggle.setAttribute('aria-expanded', String(isExpanded));
      label.textContent = isExpanded ? '접기' : '이미지 자료 보기';
      return;
    }

    var troubleshootingControl = event.target.closest('[data-troubleshooting-prev], [data-troubleshooting-next]');

    if (troubleshootingControl) {
      var troubleshooting = troubleshootingControl.closest('.frontend-modal__panel').querySelector('[data-troubleshooting]');
      updateSlides(troubleshooting, troubleshootingControl.hasAttribute('data-troubleshooting-next') ? 1 : -1, '.frontend-modal__troubleshoot-slide', '[data-troubleshooting-current]', '[data-troubleshooting-total]');
      return;
    }

    var screenControl = event.target.closest('[data-frontend-screen-prev], [data-frontend-screen-next]');

    if (screenControl) {
      var screens = screenControl.closest('.frontend-modal__panel').querySelector('[data-frontend-screens]');
      updateSlides(screens, screenControl.hasAttribute('data-frontend-screen-next') ? 1 : -1, 'img', '[data-frontend-screen-current]', '[data-frontend-screen-total]');
    }
  });
}());
