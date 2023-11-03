import RestaurantDBSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Luweh Tenan List</h2>
        <div class="search-container">
          <input id="restaurant-search" type="text" placeholder="Cari restoran...">
        </div>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const data = await RestaurantDBSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    const searchInput = document.querySelector('#restaurant-search');

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const filteredRestaurants = data.restaurants
        .filter((restaurant) => {
          const restaurantName = restaurant.name.toLowerCase();
          return restaurantName.includes(query);
        });

      restaurantsContainer.innerHTML = '';

      if (filteredRestaurants.length === 0) {
        restaurantsContainer.innerHTML = `
          <p class="empty-message">Tidak ada restoran yang cocok dengan pencarian Anda.</p>
        `;
      } else {
        filteredRestaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      }
    });

    data.restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurants;
