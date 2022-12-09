import ViewCandy from "@/pages/ViewCandy.vue";
// import Homepage from "@/pages/index.vue";
import {shallowMount} from "@vue/test-utils";
const route = {
  params: {
    id: 1,
  },
};

describe("ViewCandy page", () => {
  test("ViewCandy component render", () => {
    // const wrapper = shallowMount(ViewCandy);
    const wrapper = shallowMount(ViewCandy, {
      methods: {getallproducts: jest.fn().mockReturnValue(route)}});
    expect(wrapper.vm).toBeTruthy();
  });
});


