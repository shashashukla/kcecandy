// import EditCandyPage from "@/pages/EditCandy.vue";
import Homepage from "@/pages/index.vue";
import {shallowMount} from "@vue/test-utils";

// const $nuxt = {
//   $on: jest.fn(),
// };

describe("Homepage", () => {
  test("Homepage render", () => {
    const wrapper = shallowMount(Homepage);
    expect(wrapper.vm).toBeTruthy();
  });
});

// describe("render whole page including child components", () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = mount(Homepage, {
//       mocks: {
//         $nuxt,
//       },
//     });
//   });
//   test("homepage component render including child components", () => {
//     expect(wrapper.vm).toBeTruthy();
//   });
// });
