(function () {
  var panels = Array.prototype.slice.call(document.querySelectorAll("[data-page]"));
  var links = Array.prototype.slice.call(document.querySelectorAll("[data-page-link]"));
  var sideNav = document.querySelector(".side-nav");
  var menuToggle = document.querySelector(".side-nav__toggle");

  function closeMenu() {
    if (!sideNav || !menuToggle) {
      return;
    }

    sideNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "메뉴 열기");
  }

  function showPage(pageId, updateHash) {
    var target = panels.find(function (panel) {
      return panel.getAttribute("data-page") === pageId;
    });

    if (!target) {
      pageId = "header";
      target = document.querySelector('[data-page="header"]');
    }

    panels.forEach(function (panel) {
      var isActive = panel === target;
      panel.classList.toggle("is-active", isActive);
      panel.setAttribute("aria-hidden", isActive ? "false" : "true");
    });

    links.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("data-page-link") === pageId);
    });

    if (updateHash) {
      history.pushState(null, "", "#" + pageId);
    }
  }

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      showPage(link.getAttribute("data-page-link"), true);
      closeMenu();
    });
  });

  if (sideNav && menuToggle) {
    menuToggle.addEventListener("click", function () {
      var isOpen = sideNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
    });

    document.addEventListener("click", function (event) {
      if (!sideNav.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  window.addEventListener("hashchange", function () {
    showPage(location.hash.replace("#", ""), false);
  });

  showPage(location.hash.replace("#", "") || "header", false);
})();
