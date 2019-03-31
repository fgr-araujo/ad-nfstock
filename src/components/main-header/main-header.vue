<template>
  <header class="main-header" :class="{ '-opaque': showOpaqueBackground }">
    <div class="link">
      <img
        class="logo"
        src="https://www.alterdata.com.br/images/fixo/identidades/nfstock.svg"
        alt="NF Stock - Logo">

    </div>
    
    <nav class="main-menu">
      <icon-menu class="icon" />
      <ul class="list -popup">
        <li class="item">Produto</li>
        <li class="item">PackClass</li>
        <li class="item">Planos</li>
        <li class="item">Contato</li>
        <li class="item">Login</li>
        <li class="item">Registrar</li>
      </ul>

      <ul class="list -largescreen">
        <li class="item"><a href="#products">Produto</a></li>
        <li class="item"><a href="#parkclass">PackClass</a></li>
        <li class="item"><a href="#plans">Plano</a>s</li>
        <li class="item"><a href="#contact">Contato</a></li>

        <li class="item" v-if="!isLogged"><router-link to="login">Login</router-link></li>
        <li class="item -border" v-if="!isLogged"><router-link to="register">Registrar</router-link></li>
        <li class="item" v-if="isLogged" @click="doLogoff">Sair</li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { IconMenu } from '@/components/icons'
import { mapGetters } from 'vuex'

export default {
  name: 'MainHeader',
  components: {
    IconMenu
  },
  data () {
    return {
      showOpaqueBackground: false
    }
  },
  computed: {
    ...mapGetters({
      isLogged: 'Login/isLogged'
    })
  },
  methods: {
    handleScroll () {
      this.showOpaqueBackground = window.scrollY > 80
    },
    async doLogoff () {
      await this.$store.dispatch('Login/doLogoff')
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.addEventListener('scroll', this.handleScroll);
  }
}
</script>