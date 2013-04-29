(function() {

  var headings = document.querySelectorAll('h2'),
      sidebar = document.querySelector('.sidebar'),
      sidebarPos = sidebar.offsetTop,
      main = document.querySelector('.main'),
      mainChild = main.firstChild,
      headingsLength = headings.length,
      scrolled = false,
      match, matchElement, targetElement, headingOffset, i,
      apitoc = document.querySelector('.api-toc'),
      apitocPosition = apitoc.offsetTop + apitoc.offsetHeight;

  var selectSection = function() {
    for (i = 0; i < headingsLength; i++) {
      headingOffset = headings[i].offsetTop;

      if (window.pageYOffset < apitocPosition) {
        expandNav();
      }

      if (window.pageYOffset > headingOffset) {
        match = headings[i].id;
        matchElement = document.querySelector('.sidebar a[href="#' + match + '"]');
        targetElement = matchElement.parentNode;

        expandNav(targetElement);
      }
    }
  };

  var expandNav = function(element) {

    var expanded = document.querySelectorAll('.active'),
        expandedLength = expanded.length,
        i;

    for (i = 0; i < expandedLength; i++) {
      expanded[i].className = '';
    }

    if (element) {
      element.className = 'active';
    }
  };

  document.addEventListener('scroll', function() {
    scrolled = true;

    if (window.pageYOffset + 24 > sidebarPos) {
      if (sidebar.className.indexOf('fixed') === -1) {
        sidebar.className += ' fixed';
      }
    } else {
      sidebar.className = sidebar.className.replace( /fixed/g , '' );
    }
  });

  var expanderInterval = setInterval(function() {
    if (scrolled) {
        scrolled = false;
        selectSection();
    }
  }, 250);

})();