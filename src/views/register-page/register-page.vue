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
      <form class="form" @submit.prevent="doRegister" novalidate="true">
        <h3 class="title">Cadastro</h3>
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

        <label class="input-label" :class="{ '-warning': validation.invalidPassword || !isPasswordConfirm }">
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

         <label class="input-label" :class="{ '-warning': validation.invalidRepeatedPassword || !isPasswordConfirm }">
          <input
            class="input" type="password"
            v-model="formData.repeatedPassword"
            placeholder="Repita sua senha"
            @blur="validateRepeatedPassword"
            required>
          
          <span class="placeholder">Repita sua senha</span>
        
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
            :disabled="commandBusy">Registrar</button>
          <button
            class="button -primary"
            type="button"
            @click="navigateTo('/login')">Ir para Login</button>
          </div>
      </form>
    </div>

    <push-toast :dismiss="true" ref="Toast" />
  </div>
</template>

<script>
import PushToast from '@/components/push-toast/push-toast'

export default {
  name: 'RegisterPage',
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
        invalidPassword: false,
        invalidRepeatedPassword: false
      },
      formData: {
        email: '',
        password: '',
        repeatedPassword: ''
      },
    }
  },
  computed: {
    isPasswordConfirm () {
      return this.formData.password === this.formData.repeatedPassword
    }
  },
  methods: {
    async doRegister() {
      if (!this.isFormValid()) {
        this.$refs.Toast.showToast({
          toastType: 'warning',
          description: 'Os campos devem estar preenchidos corretamente' })
        return false
      }
      this.commandBusy = true
      try {
        await this.$store.dispatch('Login/doRegister', { email: this.formData.email, password: this.formData.password })
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
    validateRepeatedPassword () {
      return this.validation.invalidRepeatedPassword = this.formData.repeatedPassword.length < 4
    },
    checkPasswordConfirmation () {
      return this.formData.password !== this.formData.repeatedPassword
    },
    isFormValid() {
      const isEmailValid = this.validateEmail()
      const isPasswordValid = this.validatePassword()
      return !(isEmailValid || isPasswordValid)
    },
    navigateTo (url) {
      this.$router.push(url)
    },
    resetForm() {
      this.formData = {
        email: '',
        password: '',
        repeatedPassword: ''
      }
    }
  }
}
</script>