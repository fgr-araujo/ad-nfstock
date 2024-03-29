import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import LoginPage from '@/views/login-page/login-page'
import store from '@/store/store'

const localVue = createLocalVue()

describe('LoginPage', () => {
  it('Should have the correct name', () => {
    const wrapper = shallowMount(LoginPage, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.vm.$options.name).toEqual('LoginPage')
  })
})