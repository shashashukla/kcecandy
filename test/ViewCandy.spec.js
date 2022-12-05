import ViewCandy from '@/pages/ViewCandy.vue'
import Homepage from '@/pages/index.vue'
import {shallowMount, mount} from '@vue/test-utils'

const $nuxt = {
  $on: jest.fn()
}

describe('ViewCandy page', () => {
  test('ViewCandy component render', () => {
    const wrapper = shallowMount(ViewCandy)
    expect(wrapper.vm).toBeTruthy()
  })
})


