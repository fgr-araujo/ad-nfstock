<style src="@/styles/main.scss" lang="scss"></style>

<template>
  <div id="app">
    <router-view name="header" />
    <router-view />
  </div>
</template>

<script>
import Firebase from 'firebase/app'

export default {
  name: 'App',
  async mounted () {
    await this.$store.dispatch('Login/startFirebase')

    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const userData = Firebase.auth().currentUser;
        this.$store.commit('Login/setUser', userData)
        this.$store.commit('Login/setLogin', true)
        this.$store.dispatch('Plans/trackUserPlan')
      } else {
        this.$store.commit('Login/setLogin', false)
        this.$store.commit('Login/resetUser')
        this.$store.dispatch('Plans/untrackUserPlan')
      }
    });
  }
}
</script> 