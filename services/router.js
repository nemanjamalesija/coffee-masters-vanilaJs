const router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const url = link.getAttribute('href');
        router.go(url);
      });
    });

    // Event handler for url changes
    window.addEventListener('popstate', (e) => {
      router.go(e.state.route, false);
    });

    // Check the initial URL
    router.go(location.pathname);
  },

  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, '', route);
    }

    let pageElement = null;
    switch (route) {
      case '/':
        pageElement = document.createElement('menu-page');

        break;

      case '/order':
        pageElement = document.createElement('order-page');

        break;
      default:
        if (route.startsWith('/product-')) {
          pageElement = document.createElement('details-page');

          const paramId = route.substring(route.lastIndexOf('-') + 1);

          pageElement.dataset.id = paramId;
        }
    }

    if (pageElement) {
      const cacheMain = document.querySelector('main');
      // clear dom before apending
      if (cacheMain.children[0]) cacheMain.children[0].remove();

      cacheMain.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default router;
