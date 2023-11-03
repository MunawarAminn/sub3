import CONFIG from '../../globals/config';

const getStarRating = (rating) => {
  const starCount = 5;
  const filledStars = Math.floor(rating);
  const remainingStars = starCount - filledStars;

  let stars = '';
  let i;

  // eslint-disable-next-line no-plusplus
  for (i = 0; i < filledStars; i++) {
    stars += '<i class="fa fa-star"></i>';
  }

  // eslint-disable-next-line no-plusplus
  for (i = 0; i < remainingStars; i++) {
    stars += '<i class="fa fa-star-o"></i>';
  }

  stars += ` ${rating}`;

  return stars;
};

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}"
        src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>
          ${getStarRating(restaurant.rating)} 
        </p>
      </div>
      <div class="restaurant-item__header__city">
        <p>
        <i class="fa fa-map-marker"></i> ${restaurant.city}
        </p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant__name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address}, Kota ${restaurant.city}</p>
    <h4>Rating</h4>
    <p>
      ${getStarRating(restaurant.rating)} 
    </p>
    <h4>Categories</h4>
    <div class="red-box-container">
      ${restaurant.categories.map((category) => `
        <div class="red-box">${category.name}</div>
      `).join('  ')}
    </div>
    <h4>Foods</h4>
    <div class="red-box-container">
      ${restaurant.menus.foods.map((food) => `
        <div class="red-box">${food.name}</div>
      `).join(' ')}
    </div>
    <h4>Drinks</h4>
    <div>
      ${restaurant.menus.drinks.map((drink) => `
        <div class="red-box">${drink.name}</div>
      `).join(' ')}
    </div>
  </div>
  <h3 class="restaurant__name">Reviews</h3>
  <div>
    ${restaurant.customerReviews.map((review) => `
      <section class="all-review">
        <section class="list-review box">
          <section class="nama-paket">
            <h3><i class="fa fa-user"></i> ${review.name}</h3>
            <p>${review.review}</p>
          </section>
          <section class="tanggal">
            <h1>${review.date}</h1>
          </section>
        </section>
      </section>
    `).join('')}
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
