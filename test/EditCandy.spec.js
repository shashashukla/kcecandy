import EditCandyPage from '@/pages/EditCandy.vue'
import Homepage from '@/pages/index.vue'
import {shallowMount, mount} from '@vue/test-utils'
import { mapGetters, mapMutations } from "vuex";

const $nuxt = {
  $on: jest.fn(),
}

describe('Homepage', () => {
  test('homepage component render', () => {
    
    const wrapper = shallowMount(Homepage)
    wrapper.mapGetters({getCounter: "modules/addToCart/getCounter", cardData: "modules/addToCart/cardData"});
    wrapper.mapMutations({ increment: "modules/addToCart/increment"});
    expect(wrapper.vm).toBeTruthy()
  })
})


describe('render whole page including child components', () => {
  let wrapper
  beforeEach(() => {
     wrapper = mount(Homepage, {
      mocks: {
        $nuxt
      },
    })
  })
  test('homepage component render including child components', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
