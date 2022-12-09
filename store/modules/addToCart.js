export const state = () => ({
  count: 0,
  cart: [],
});

export const defaultState = state();

export const mutations = {
  increment(state) {
    state.count++;
  },

  Add_To_Cart(state, product) {
    state.cart.push(product);
  },

  decrement(state) {
    state.count--;
  },

  removearray(state, index) {
    state.cart.splice(index, 1);
  },
};

export const actions = {
  addProductToCart({commit}, product) {
    commit("Add_To_Cart", product);
  },
};

export const getters = {
  getCounter: (state) => state.count,
  cardData: (state) => state.cart,
};
