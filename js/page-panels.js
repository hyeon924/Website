(function () {
  var panels = Array.prototype.slice.call(document.querySelectorAll("[data-page]"));
  var links = Array.prototype.slice.call(document.querySelectorAll("[data-page-link]"));

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
    });
  });

  window.addEventListener("hashchange", function () {
    showPage(location.hash.replace("#", ""), false);
  });

  showPage(location.hash.replace("#", "") || "header", false);
})();
