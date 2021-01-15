
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restuarants: [],
  reviews: []
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      const restaurant = {text: action.text, id: cuidFn() };
      return {
          ...state,
          restaurants: [...state.restaurants, restaurant]
      }
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return {...state, restaurants}

    default:
      return state;
  }
  
}
