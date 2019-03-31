import LoginStore from '../../../../src/store/login'

describe('Login Store', () => {
  it('Should Mutate the User Informations', () => {
    const state = LoginStore.state
    const newData = {
      displayName: 'my name',
      email: 'abc@def.com',
      refreshToken: 1
    }
    LoginStore.mutations.setUser(state, newData)
    const userInformations = LoginStore.getters.getUserData(state)

    expect(userInformations.displayName).toEqual(newData.displayName)
    expect(userInformations.email).toEqual(newData.email)
    expect(userInformations.token).toEqual(newData.refreshToken)
  })

  it('Should set login on', () => {
    const state = LoginStore.state

    LoginStore.mutations.setLogin(state, true)
    const isLogged = LoginStore.getters.isLogged(state)

    expect(isLogged).toBeTruthy()
  })
})