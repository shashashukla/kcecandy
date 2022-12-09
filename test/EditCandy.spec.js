import EditCandyPage from "@/pages/EditCandy.vue";
// import Homepage from "@/pages/index.vue";
import {shallowMount} from "@vue/test-utils";
const route = {
  params: {
    id: 1,
  },
};


describe("EditCandy page", () => {
  test("EditCandy render", () => {
    // const wrapper = shallowMount(EditCandyPage);
    // const wrapper = shallowMount(EditCandyPage, {params: {id: 1}});
    const wrapper = shallowMount(EditCandyPage, {
      methods: {getallproducts: jest.fn().mockReturnValue(route)}});
    expect(wrapper.vm).toBeTruthy();
  });
});

// describe("edit button", () => {
//   test("edit button", async () => {
//     const wrapper = shallowMount(EditCandyPage, {
//       methods: {saveupdateForm: jest.fn().mockReturnValue(route)}});
//     wrapper.setData({ViewCandyForm: {
//       Description: "test mobile edit data",
//     }});

//     const button = wrapper.find(".on-edit");
//     button.trigger("click");

//     await wrapper.vm.$nextTick();
//     expect(wrapper.vm.saveupdateForm()).toEqual(true);
//   });
// });
