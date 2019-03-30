<style src="@/styles/main.scss" lang="scss"></style>

<template>
  <div id="app">
    <router-view name="header" />
    <router-view />
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  name: 'App',
  async mounted () {
    await this.$store.dispatch('Login/startFirebase')

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const user = firebase.auth().currentUser;
        this.$store.commit('Login/setUser', user)
        this.$store.commit('Login/setLogin', true)
      } else {
        this.$store.commit('Login/setLogin', false)
        this.$store.commit('Login/resetUser')
      }
    });
  }
}
</script> 