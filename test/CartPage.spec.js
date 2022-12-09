import CartCandyPage from "@/pages/cartpage.vue";
import {shallowMount, createLocalVue} from "@vue/test-utils";
import Vuex from "vuex";
import myModule from "../store/modules/addToCart.js";
// import {addtocart} from "@/store/module/addToCart.js";
const localVue = createLocalVue();
localVue.use(Vuex);

describe("MyComponent.vue", () => {
  let actions;
  let getters;
  let state;
  let store;
  let wrapper;

  beforeEach(() => {
    actions = {
      addProductToCart: jest.fn(),
    };
    getters = {
      cardData: jest.fn(),
    };
    state = {
      cart: jest.fn(),
    };

    store = new Vuex.Store({
      computed: {
        state,
        actions,
        getters,
        namespaced: true,
      },

    });
  });

  wrapper = shallowMount(CartCandyPage, {
    localVue, store,
  });
  expect(wrapper.vm).toBeTruthy();
});
