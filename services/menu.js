import API from './API.js';

export default async function loadData() {
  API.fetchMenu();
  app.store.menu = await API.fetchMenu();
}
