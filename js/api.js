(function() {

  var headings = document.querySelectorAll('h2'),
      sidebar = document.querySelector('.sidebar'),
      main = document.querySelector('.main'),
      mainChild = main.firstChild,
      headingsLength = headings.length,
      scrolled = false,
      match, matchElement, targetElement, headingOffset, i;

  var tocContent = sidebar.innerHTML,
      tocElement = document.createElement('div');

  tocElement.innerHTML = tocContent;
  tocElement.className = 'api-toc';
  main.insertBefore(tocElement, mainChild);

  var tocPosition = tocElement.offsetHeight + tocElement.offsetTop;

  var selectSection = function() {
    for (i = 0; i < headingsLength; i++) {
      headingOffset = headings[i].offsetTop;

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

    element.className = 'active';
  };

  document.addEventListener('scroll', function() {
    scrolled = true;

    if (window.pageYOffset > tocPosition) {
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