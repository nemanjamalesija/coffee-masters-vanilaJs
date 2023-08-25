const router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const url = link.getAttribute('href');
        router.go(url);
      });
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
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Menu';
        break;

      case '/order':
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Your order';
        break;
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
