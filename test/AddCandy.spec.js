import AddCandyPage from "@/pages/AddCandy.vue";
// import Homepage from "@/pages/index.vue";
import {shallowMount} from "@vue/test-utils";

describe("AddCandy page", () => {
  test("AddCandy component render", () => {
    const wrapper = shallowMount(AddCandyPage);
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("add button", () => {
  test("add button", async () => {
    const wrapper = shallowMount(AddCandyPage, {
      methods: {saveForm: jest.fn().mockReturnValue(true)}});
    wrapper.setData({AddCandyForm: {
      ProductName: "testname",
      ProductType: "testtype",
      Price: "400",
      Description: "test mobile",
    }});

    const button = wrapper.find(".save-btn");
    button.trigger("click");

    await wrapper.vm.$nextTick();
    expect(wrapper.vm.saveForm()).toEqual(true);
  });
});
