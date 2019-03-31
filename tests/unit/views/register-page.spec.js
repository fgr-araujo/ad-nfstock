import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import RegisterPage from '@/views/register-page/register-page'
import store from '@/store/store'

const localVue = createLocalVue()

describe('RegisterPage', () => {
  it('Should have the correct name', () => {
    const wrapper = shallowMount(RegisterPage, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.vm.$options.name).toEqual('RegisterPage')
  })
})