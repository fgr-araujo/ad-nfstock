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
            :disabled="commandBusy || !isValidForm">Efetuar Pagamento</button>

          <button class="button -ghostinverse" @click="navigateTo('/')">Cancelar compra</button>
        </div>
      </form>
    </div>

    <push-toast :dismiss="true" ref="Toast" @finish="finishedToast"/>
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
        planId: null,
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
  computed: {
    isValidForm () {
      const isInvalidCardNumber = this.validation.invalidCardNumber
      const isInvalidCardCvv = this.validation.invalidCardCvv
      const isInvalidCardExpirationDate = this.validation.invalidCardExpirationDate
      const isInvalidCardHolderName = this.validation.invalidCardHolderName
      return !(isInvalidCardNumber || isInvalidCardCvv || isInvalidCardExpirationDate || isInvalidCardHolderName)
    }
  },
  beforeMount () {
    const { planId } = this.$route.params
    const planInformations = this.$store.getters['Plans/getPlanById'](planId)
    this.planInformations = { ...planInformations, planId }
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

        const { planId } = this.planInformations
        this.$store.dispatch('Plans/saveHiredPlan', { planId })
        
        this.commandBusy = false

        this.$refs.Toast.showToast({
          toastType: 'success',
          title: 'Pagamento efetuado com sucesso!',
          description: 'Em segundos iremos te redirecionar...'
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
    validateCardNumber() {
      const inputNum = this.formData.cardNumber

      if (!inputNum.length) {
        this.validation.invalidCardNumber = true
        return
      }

      let digit, digits, flag, sum, _i, _len;
      flag = true;
      sum = 0;
      digits = (inputNum + '').split('').reverse();        
      for (_i = 0, _len = digits.length; _i < _len; _i++) {       
        digit = digits[_i];      
        digit = parseInt(digit, 10);          
        if ((flag = !flag)) {                      
          digit *= 2;               
        }
        if (digit > 9) {               
          digit -= 9;                    
        }      
        sum += digit;          
      }    
      this.validation.invalidCardNumber = !(sum % 10 === 0)
    },
    validateCardExpirationDate() {
      this.validation.invalidCardExpirationDate = !this.formData.cardExpirationDate.length
    },
    validateCardHolderName() {
      this.validation.invalidCardHolderName = !this.formData.cardHolderName
    },
    validateCardCvv() {
      this.validation.invalidCardCvv = !this.formData.cardCvv
    },
    finishedToast (toastType) {
      if (toastType === 'success') {
        this.navigateTo('/')
      }
    }
  }
}
</script>