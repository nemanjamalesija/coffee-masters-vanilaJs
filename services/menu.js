import API from './API.js';

export default async function loadData() {
  API.fetchMenu();
  app.store.menu = await API.fetchMenu();
}

export async function getProductById(id) {
  if (!app.store.menu) {
    await loadData();
  }

  for (let category of app.store.menu) {
    for (let p of category.products) {
      if (p.id == id) {
        return p;
      }
    }
  }
  return null;
}
