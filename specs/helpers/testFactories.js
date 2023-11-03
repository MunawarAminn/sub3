import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
    favoriteRestaurants: FavoriteRestaurantIdb,
  });
};

/* eslint-disable import/prefer-default-export */
export { createLikeButtonPresenterWithRestaurant };
