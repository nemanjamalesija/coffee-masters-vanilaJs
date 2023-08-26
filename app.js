import store from './services/store.js';
import API from './services/API.js';
import loadData from './services/menu.js';
import router from './services/router.js';

// Link web components
import MenuPage from './components/menuPage.js';
import DetailsPage from './components/detailsPage.js';
import OrderPage from './components/orderPage.js';
import ProductItem from './components/productItem.js';

window.app = {};
app.store = store;
app.router = router;

window.addEventListener('DOMContentLoaded', () => {
  loadData();
  app.router.init();
});

window.addEventListener('appcartchange', (event) => {
  const badge = document.getElementById('badge');
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});
