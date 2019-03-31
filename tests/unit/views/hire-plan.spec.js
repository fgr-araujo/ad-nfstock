import { shallowMount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import HirePlan from '@/views/hire-plan/hire-plan'
import store from '@/store/store'

const localVue = createLocalVue()

describe('HirePLan', () => {
  it('Should have the correct name', () => {
    const wrapper = shallowMount(HirePlan, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.vm.$options.name).toEqual('HirePlan')
  })
})