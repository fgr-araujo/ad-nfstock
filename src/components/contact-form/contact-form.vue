<template>
  <section class="contact-form">
    <h3 class="hometitle" id="contact">Fale conosco</h3>

    <section class="content">
      <form class="form" @submit.prevent="submitMessage" novalidate="true">
        <h2 class="title">Envie-nos uma mensagem</h2>
        <p class="description">Utilize o formulário abaixo para entrar em contato conosco</p>

        <label class="input-label" :class="{ '-warning': validation.invalidName }">
          <input
            class="input" type="text"
            v-model="formData.personName"
            placeholder="Qual o seu nome?"
            @blur="validateName"
            required>
          
          <span class="placeholder">Qual é o seu nome?</span>
        
          <div class="iconcontainer">
            <i class="icon fas fa-user"></i>
          </div>

          <div class="iconcontainer -warning" title="Esse campo está inválido">
            <i class="icon fas fa-exclamation-triangle"></i>
          </div>
        </label>

        <label class="input-label" :class="{ '-warning': validation.invalidEmail }">
          <input
            class="input" type="text"
            v-model="formData.email"
            placeholder="Qual é o seu e-mail?"
            @blur="validateEmail"
            required>
          
          <span class="placeholder">Qual é o seu e-mail?</span>
        
          <div class="iconcontainer">
            <i class="icon fas fa-envelope"></i>
          </div>

          <div class="iconcontainer -warning" title="Esse campo está inválido">
            <i class="icon fas fa-exclamation-triangle"></i>
          </div>
        </label>

        <label class="input-label" :class="{ '-warning': validation.invalidMessage }">
          <input
            class="input" type="text"
            v-model="formData.message"
            placeholder="O que gostaria de nos dizer?"
            @blur="validateMessage"
            required>
          
          <span class="placeholder">O que gostaria de nos dizer?</span>
        
          <div class="iconcontainer">
            <i class="icon fas fa-comment-dots"></i>
          </div>

          <div class="iconcontainer -warning" title="Esse campo está inválido">
            <i class="icon fas fa-exclamation-triangle"></i>
          </div>
        </label>

        <button
          type="submit"
          class="button -primary"
          :class="{ '-busy': commandBusy }"
          :disabled="commandBusy">
          Enviar mensagem
        </button>
      </form>

      <form class="form" @submit.prevent="submitPhoneContact" novalidate="true">
        <h2 class="title">Nós ligamos pra você</h2>
        <p class="description">Informe seu telefone e logo entraremos em contato com você</p>

        <label class="input-label" :class="{ '-warning': validation.invalidPhone }">
          <input
            class="input" type="text"
            v-model="phoneData.phoneNumber"
            placeholder="Qual é o número do seu telefone?"
            @blur="isPhoneInvalid"
            required>
          
          <span class="placeholder">Qual é o número do seu telefone?</span>
        
          <div class="iconcontainer">
            <i class="icon fas fa-phone"></i>
          </div>

          <div class="iconcontainer -warning" title="Esse campo está inválido">
            <i class="icon fas fa-exclamation-triangle"></i>
          </div>
        </label>

        <button
          type="submit"
          class="button -primary"
          :class="{ '-busy': phoneCommandBusy }"
          :disabled="phoneCommandBusy">
          Enviar Contato
        </button>
      
        <div class="phone">
          <p class="description">Ou entre em contato conosco através do telefone:</p>
          <h2 class="number">0800-704-1418</h2>
        </div>
      </form>

    </section>
    <push-toast :dismiss="true" ref="Toast" />
  </section>
</template>

<script>
import PushToast from '@/components/push-toast/push-toast'

export default {
  name: 'ContactForm',
  components: {
    PushToast
  },
  data () {
    return {
      commandBusy: false,
      phoneCommandBusy: false,
      validation: {
        isFormValid: false,
        invalidName: false,
        invalidEmail: false,
        invalidMessage: false,
        invalidPhone: false
      },
      formData: {
        personName: '',
        email: '',
        message: ''
      },
      phoneData: {
        phoneNumber: ''
      }
    }
  },
  methods: {
    async submitMessage() {
      if (!this.isFormValid()) {
        this.$refs.Toast.showToast({
          toastType: 'warning',
          description: 'O formulário está incorreto' })
        return false
      }

      this.commandBusy = true
      await this.$store.dispatch('Contact/sendPhone', this.phoneData)
      this.$refs.Toast.showToast({
        toastType: 'success',
        description: 'Mensagem enviada com sucesso!' })
      this.commandBusy = false
    },
    validateName() {
      return this.validation.invalidName = this.formData.personName.length < 4
    },
    validateEmail() {
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return this.validation.invalidEmail = !emailRegex.test(this.formData.email)
    },
    validateMessage() {
      return this.validation.invalidMessage = this.formData.message.length < 4
    },
    isFormValid() {
      const isNameValid = this.validateName()
      const isEmailValid = this.validateEmail()
      const isMessageValid = this.validateMessage()
      return !(isNameValid || isEmailValid || isMessageValid)
    },
    isPhoneInvalid() {
      return this.validation.invalidPhone = this.phoneData.phoneNumber.length < 11 || this.phoneData.phoneNumber.length > 12
    },
    async submitPhoneContact() {
      if (this.isPhoneInvalid()) {
        this.$refs.Toast.showToast({
          toastType: 'warning',
          description: 'O telefone está incorreto' })
        return false
      }

      this.phoneCommandBusy = true
      await this.$store.dispatch('Contact/sendPhone', this.phoneData)
      this.phoneCommandBusy = false
      this.$refs.Toast.showToast({
          toastType: 'success',
          description: 'Seu contato foi enviado com sucesso!'
        })
    }
  }
}
</script>