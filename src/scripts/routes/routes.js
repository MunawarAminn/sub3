import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Restaurant from '../views/pages/restaurants';

const routes = {
  '/': Restaurant, // default page
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/restaurants': Restaurant,
};

export default routes;
