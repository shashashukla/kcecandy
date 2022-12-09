import HomePage from "@/pages/index.vue";
import {shallowMount, createLocalVue} from "@vue/test-utils";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Home page", () => {
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
      "modules/addToCart/getCounter": "",
    };
    state = {
      cart: [],
      count: 0,
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

  it("Homepage render", () => {
    const wrapper = shallowMount(HomePage, {
      store,
      localVue,
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
