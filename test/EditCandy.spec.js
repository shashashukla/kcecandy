import EditCandyPage from "@/pages/EditCandy.vue";
import {shallowMount} from "@vue/test-utils";
const route = {
  params: {
    id: 1,
  },
};


describe("EditCandy page", () => {
  test("EditCandy render", () => {
    const wrapper = shallowMount(EditCandyPage, {
      methods: {getallproducts: jest.fn().mockReturnValue(route)}});
    expect(wrapper.vm).toBeTruthy();
  });
});


