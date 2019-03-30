import { shallowMount } from '@vue/test-utils'
import LoginPage from '@/views/login-page/login-page'

describe('LoginPage', () => {
  it('Should have the correct name', () => {
    const wrapper = shallowMount(LoginPage);
    expect(wrapper.vm.$options.name).toEqual('LoginPage')
  })
})