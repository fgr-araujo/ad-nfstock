<template>
  <div class="hire-plan">
    <div class="informations">
      <h2 class="title">PLANO {{ planInformations.planName }}</h2>
      <h5 class="description">Você está contratando o plano:</h5>
      <span class="shortdescription">{{ planInformations.shortDescription }}</span>
      <p class="calltoaction">Para concluir a contratação desse plano, informe os dados do seu cartão de crédito no formulário ao lado.</p>
    </div>

    <div class="container">
      <form class="form" @submit.prevent="hirePlan" novalidate="true">
        <h3 class="title">Informe os dados do cartão de crédito</h3>
        <label class="input-label" :class="{ '-warning': validation.invalidCardNumber }">
          <input
            class="input" type="text"
            v-model="formData.cardNumber"
            placeholder="Digite seu email"
            @blur="validateCardNumber"
            required>
          
          <span class="placeholder">Número do cartão</span>
        
          <div class="iconcontainer">
            <i class="icon fas fa-envelope"></i>
          </div>

          <div class="iconcontainer -warning" title="Esse campo está inválido">
            <i class="icon fas fa-exclamation-triangle"></i>
          </div>
        </label>

        <div class="inputgroup">
          <label class="input-label" :class="{ '-warning': validation.invalidCardExpirationDate }">
            <input
              class="input" type="text"
              v-model="formData.cardExpirationDate"
              placeholder="Validate"
              @blur="validateCardExpirationDate"
              required>
            
            <span class="placeholder">Validate</span>
          
            <div class="iconcontainer">
              <i class="icon fas fa-calendar-alt"></i>
            </div>

            <div class="iconcontainer -warning" title="Esse campo está inválido">
              <i class="icon fas fa-exclamation-triangle"></i>
            </div>
          </label>

          <label class="input-label" :class="{ '-warning': validation.invalidCardCvv }">
            <input
              class="input" type="text"
              v-model="formData.cardCvv"
              placeholder="CVV"
              @blur="validateCardCvv"
              required>
            
            <span class="placeholder">CVV</span>
          
            <div class="iconcontainer">
              <i class="icon fas fa-key"></i>
            </div>

            <div class="iconcontainer -warning" title="Esse campo está inválido">
              <i class="icon fas fa-exclamation-triangle"></i>
            </div>
          </label>
        </div>

        <label class="input-label" :class="{ '-warning': validation.invalidCardHolderName }">
          <input
            class="input" type="text"
            v-model="formData.cardHolderName"
            placeholder="Nome como informado no cartão"
            @blur="validateCardHolderName"
            required>
          
          <span class="placeholder">Nome como informado no cartão</span>
        
          <div class="iconcontainer">
            <i class="icon fas fa-male"></i>
          </div>

          <div class="iconcontainer -warning" title="Esse campo está inválido">
            <i class="icon fas fa-exclamation-triangle"></i>
          </div>
        </label>

        <div class="commands">
          <button
            class="button -success"
            :class="{ '-busy': commandBusy }"
            :disabled="commandBusy">Efetuar Pagamento</button>

          <button class="button -ghostinverse" @click="navigateTo('/')">Cancelar compra</button>
        </div>
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
      planInformations: {
        planName: '',
        planValue: 0,
        planDescriptions: [],
        shortDescription: '',
        countNotes: 0,
        price: 0
      },
      commandBusy: false,
      phoneCommandBusy: false,
      validation: {
        invalidCardNumber: false,
        invalidCardCvv: false,
        invalidCardExpirationDate: false,
        invalidCardHolderName: false,
        invalid: false,
      },
      formData: {
        amount: '0',
        cardNumber: '',
        cardCvv: '',
        cardExpirationDate: '',
        cardHolderName: ''
      }
    }
  },
  beforeMount () {
    const { planId } = this.$route.params
    const planInformations = this.$store.getters['Plans/getPlanById'](planId)
    this.planInformations = planInformations
  },
  methods: {
    async hirePlan () {
      this.commandBusy = true

      try {
        const { token, email } = this.$store.getters['Login/getUserData']
        await this.$store.dispatch('Payment/buyPlan', {
          ...this.formData,
          ...this.planInformations,
          token,
          email
        })

        this.commandBusy = false

        this.$refs.Toast.showToast({
          toastType: 'success',
          description: 'Pagamento efetuado com sucesso!'
        })
      } catch(err) {
        this.$refs.Toast.showToast({
          toastType: 'danger',
          description: err
        })
        this.commandBusy = false
      }
    },
    navigateTo (url) {
      this.$router.push(url)
    },
    validateCardNumber() {},
    validateCardExpirationDate() {},
    validateCardHolderName() {},
    validateCardCvv() {}
  }
}
</script>