// Strapi 
export const state = () => ({
//  messages
  message: null, 
// ecomerce  
  allProducts: [],
  featuredProducts: [],
  menProducts: [],
  womenProducts: [],
  cartItems: [],
}) 

export const getters = {
// auth 
  isAuthenticated(state) {
    return state.auth.loggedIn;
  }, 
  loggedInUser(state) {
    return state.auth.user;
  },
// ecomerce 
  allProducts: (state) => state.allProducts,
  featuredProducts: (state) => state.featuredProducts,
  menProducts: (state) => state.menProducts,
  womenProducts: (state) => state.womenProducts,
  getCart: (state) => state.cartItems,
  getCartTotal: (state) =>
    state.cartItems.length < 1 ? '0' 
      : state.cartItems
        .map((el) => el.price * el.quantity)
        .reduce((a, b) => a + b),
};

export const actions = {
// ecomerce  
  async addItemToCart({ commit }, cartItem) {
    await commit('setCartItem', cartItem)
  },
  async deleteCartItem({ commit }, id) {
    await commit('removeCartItem', id)
  },
}

export const mutations = {
// ecomerce  
  setProducts: (state, products) => (state.allProducts = products),
  setFeaturedProducts: (state, products) => (state.featuredProducts = products),
  setMenProducts: (state, products) => (state.menProducts = products),
  setWomenProducts: (state, products) => (state.womenProducts = products),
  setCartItem: (state, item) => state.cartItems.push(item),
  removeCartItem: (state, id) =>
    state.cartItems.splice(
      state.cartItems.findIndex((el) => el.id === id),
      1
    ),
}