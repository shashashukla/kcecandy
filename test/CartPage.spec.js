import CartCandyPage from "@/pages/cartpage.vue";
import {shallowMount, createLocalVue} from "@vue/test-utils";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Add to cart page", () => {
  let actions;
  let getters;
  let state;
  let store;

  beforeEach(() => {
    actions = {
      addProductToCart: jest.fn(),
    };
    getters = {
      "modules/addToCart/cardData": [],
    };
    state = {
      cart: [],
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

  it("test cart page rendering with NuxLink and vuex store", () => {
    const wrapper = shallowMount(CartCandyPage, {
      store,
      localVue,
      stubs: {
        NuxtLink: true,
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
