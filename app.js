import store from './services/store.js';
import API from './services/API.js';
import loadData from './services/menu.js';

window.app = {};
app.store = store;

window.addEventListener('DOMContentLoaded', () => {
  loadData();
  console.log(app.store);
});
