import { shallowMount } from '@vue/test-utils'
import HomePage from '@/views/home-page/home-page'

describe('main-header.vue', () => {
  it('Should have the correct name', () => {
    const wrapper = shallowMount(HomePage);
    expect(wrapper.vm.$options.name).toEqual('HomePage')
  })
})