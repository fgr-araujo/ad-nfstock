import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import MainHeader from '@/components/main-header/main-header.vue'
import store from '@/store/store'

const localVue = createLocalVue()

describe('main-header.vue', () => {
  it('Should have the correct name', () => {
    const wrapper = shallowMount(MainHeader, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.vm.$options.name).toEqual('MainHeader')
  })
})