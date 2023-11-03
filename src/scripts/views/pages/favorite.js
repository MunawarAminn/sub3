import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div id="content" class="content">
        <h2 class="content__heading">Your Favorite Restaurant</h2>
        <div id="restaurants" class="restaurants"></div>
        <div id="empty-content" class="empty-content">
          <p class="empty-message">Anda belum memiliki restoran favorit. Coba tambahkan beberapa!</p>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    const emptyContent = document.querySelector('#empty-content');
    const emptyMessage = document.querySelector('.empty-message');

    if (restaurants.length === 0) {
      emptyContent.style.display = 'block';
    } else {
      emptyContent.style.display = 'none';

      restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('div');
        restaurantItem.innerHTML = createRestaurantItemTemplate(restaurant);

        const deleteContainer = document.createElement('div');
        deleteContainer.className = 'delete-container';

        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa fa-trash delete-icon';

        // Append the deleteIcon to deleteContainer
        deleteContainer.appendChild(deleteIcon);

        restaurantItem.querySelector('.restaurant-item__header').appendChild(deleteContainer);
        deleteIcon.addEventListener('click', async () => {
          // eslint-disable-next-line no-alert
          const confirmDelete = confirm('Apakah Anda yakin ingin menghapus restoran ini dari favorit?');
          if (confirmDelete) {
            await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
            restaurantItem.remove();
          }
        });

        restaurantContainer.appendChild(restaurantItem);
      });
    }
  },
};

export default Favorite;
