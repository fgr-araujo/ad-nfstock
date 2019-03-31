<template>
  <div class="login-page">
    <div class="illustration">
      <img
        class="logo"
        src="https://www.alterdata.com.br/images/fixo/identidades/nfstock.svg"
        alt="NF Stock - Logo">
      <h2 class="welcome">Seja bem-vindo</h2>  

      <router-link to="/">
        <i class="fas fa-arrow-left"></i>
        Ir para tela principal
      </router-link>      
    </div>

    <div class="container">
      <form class="form" @submit.prevent="doLogin" novalidate="true">
        <h3 class="title">Login</h3>
        <label class="input-label" :class="{ '-warning': validation.invalidEmail }">
          <input
            class="input" type="text"
            v-model="formData.email"
            placeholder="Digite seu email"
            @blur="validateEmail"
            required>
          
          <span class="placeholder">Digite seu email</span>
        
          <div class="iconcontainer">
            <i class="icon fas fa-envelope"></i>
          </div>

          <div class="iconcontainer -warning" title="Esse campo está inválido">
            <i class="icon fas fa-exclamation-triangle"></i>
          </div>
        </label>

        <label class="input-label" :class="{ '-warning': validation.invalidPassword }">
          <input
            class="input" type="password"
            v-model="formData.password"
            placeholder="Digite sua senha"
            @blur="validatePassword"
            required>
          
          <span class="placeholder">Digite sua senha</span>
        
          <div class="iconcontainer">
            <i class="icon fas fa-key"></i>
          </div>

          <div class="iconcontainer -warning" title="Esse campo está inválido">
            <i class="icon fas fa-exclamation-triangle"></i>
          </div>
        </label>

        <div class="commands">
          <button
            class="button -success"
            :class="{ '-busy': commandBusy }"
            :disabled="commandBusy">Efetuar Login</button>
          
          <button
            class="button -primary"
            type="button"
            @click="navigateTo('/register')">Desejo me cadastrar</button>
        </div>

        <button
          type="button"
          @click="logWithGoogle"
          class="button -ghostinverse -providerlogo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            class="logo">
          Fazer login com o Google
        </button>
      </form>
    </div>

    <push-toast :dismiss="true" ref="Toast" />
  </div>
</template>

<script>
import PushToast from '@/components/push-toast/push-toast'

export default {
  name: 'LoginPage',
  components: {
    PushToast
  },
  data () {
    return {
      commandBusy: false,
      phoneCommandBusy: false,
      validation: {
        isFormValid: false,
        invalidEmail: false,
        invalidPassword: false
      },
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async doLogin() {
      if (!this.isFormValid()) {
        this.$refs.Toast.showToast({
          toastType: 'warning',
          description: 'Os campos devem estar preenchidos corretamente' })
        return false
      }

      this.commandBusy = true
      try {
        await this.$store.dispatch('Login/doLogin', {
          email: this.formData.email,
          password: this.formData.password
        })

        this.commandBusy = false
        this.resetForm()
        this.$router.push('/')
      } catch(err) {
        this.commandBusy = false
        this.$refs.Toast.showToast({
            toastType: 'danger',
            description: err })
      }
    },
    validateEmail () {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return this.validation.invalidEmail = !emailRegex.test(this.formData.email)
    },
    validatePassword () {
      return this.validation.invalidPassword = this.formData.password.length < 4
    },
    isFormValid() {
      const isEmailValid = this.validateEmail()
      const isPasswordValid = this.validatePassword()
      return !(isEmailValid || isPasswordValid)
    },
    navigateTo (url) {
      this.$router.push(url)
    },
    resetForm () {
      this.formData = {
        email: '',
        password: ''
      }
    },
    async logWithGoogle () {
      try {
        await this.$store.dispatch('Login/loginWithGoogleProvider')
        this.$router.push('/')
      } catch(err) {
        this.$refs.Toast.showToast({
            toastType: 'danger',
            description: 'N?o foi poss?vel fazer o Login' })
      }
    },
    async logWithFacebook () {
      try {
        await this.$store.dispatch('Login/loginWithGoogleProvider')
        this.$router.push('/')
      } catch(err) {
        this.$refs.Toast.showToast({
            toastType: 'danger',
            description: 'N?o foi poss?vel fazer o Login' })
      }
    }
  }
}
</script>