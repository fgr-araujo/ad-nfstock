import LoginStore from '../../../../src/store/login'

describe('Login Store', () => {
  it('Should Mutate the User Informations', () => {
    const state = LoginStore.state
    const newData = {
      userName: 'my name',
      userId: 1
    }
    LoginStore.mutations.user(state, newData)
    const userInformations = LoginStore.getters.getUserData(state)

    expect(userInformations.userName).toEqual(newData.userName)
    expect(userInformations.userId).toEqual(newData.userId)
  })

  it('Should set login on', () => {
    const state = LoginStore.state

    LoginStore.mutations.setLogin(state, true)
    const isLogged = LoginStore.getters.isLogged(state)

    expect(isLogged).toBeTruthy()
  })
})