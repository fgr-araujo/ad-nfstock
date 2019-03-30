<template>
  <section class="plans-price">
    <div
      class="plan"
      :class="[ plan.planStyle ]"
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
        type="button"
        @click="signPlan(p)">Contratar Plano</button>
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
      plans: 'Plans/getAllPlans'
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