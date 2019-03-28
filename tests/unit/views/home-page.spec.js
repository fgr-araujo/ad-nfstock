import { shallowMount } from '@vue/test-utils'
import MainHeader from '@/components/main-header/main-header.vue'

describe('main-header.vue', () => {
  it('Should have the correct name', () => {
    const msg = 'new message'
    const wrapper = shallowMount(MainHeader);
    expect(wrapper.text()).toMatch(msg)
  })
})