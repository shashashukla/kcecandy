export const state = () => ({
    count: 0,
    cart: []
  });

  export const getters = {
    getCounter: state => state.count,
    cardData: state => state.cart
  };
  
  export const mutations = {
    increment(state) {
      state.count++;
    },

    Add_To_Cart(state,  product) {
      console.log('productaddtocart',product);
        state.cart.push(product)
    },

    decrement(state) {
      console.log('statedecr',state);
     
      state.count--;
    },

    removearray(state,index) {
      console.log('stateremove',state);
      console.log('stateindex',index);
      state.cart.splice(index, 1);
    },
  };

  export const actions = {
    addProductToCart({ commit }, product) {
        commit('Add_To_Cart', product)
      },
  }