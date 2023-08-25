import store from './services/store.js';
import API from './services/API.js';
import loadData from './services/menu.js';
import router from './services/router.js';

window.app = {};
app.store = store;
app.router = router;

window.addEventListener('DOMContentLoaded', () => {
  loadData();
  app.router.init();
});
