<template>
  <section class="plans-price">
    <div
      class="plan"
      :class="[ plan.planStyle, hiredPlan === p ? '-hired' : '' ]"
      v-for="(plan, p) in plans"
      :key="p">

      <h5 class="title">{{ plan.planName }}</h5>
      <div class="price">
        <div class="currency">R$</div>
        <div class="value">{{ plan.planValue }}</div>
        <div class="period">MÊS</div>
      </div>
      <button
        class="button"
        v-if="hiredPlan !== p"
        type="button"
        @click="signPlan(p)">Contratar Plano</button>
      
      <span
        class="hiredplan"
        v-if="hiredPlan === p">
        <i class="icon fas fa-star"></i>
        Plano contratado!
      </span>

      <ul class="feature">
        <li
          class="description"
          v-for="(planDescription, k) in plan.planDescriptions"
          :key="k" v-html="planDescription"></li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PlansPrice',
  computed: {
    ...mapGetters({
      isLogged: 'Login/isLogged',
      plans: 'Plans/getAllPlans',
      hiredPlan: 'Plans/getHiredPlan'
    })
  },
  methods: {
    signPlan (planId) {
      if (!this.isLogged) {
        this.$router.push('/login')
        return
      }

      this.$router.push(`/hire-plan/${planId}`)
    }
  }
}
</script>