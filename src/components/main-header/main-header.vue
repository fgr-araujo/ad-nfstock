<template>
  <header class="main-header">
    <router-link class="link">
    <img
      class="logo"
      src="https://www.alterdata.com.br/images/fixo/identidades/nfstock.svg"
      alt="NF Stock - Logo">
    </router-link>

    <main-menu />
  </header>
</template>

<script>
import MainMenu from '@/components/main-menu/main-menu'

export default {
  name: 'MainHeader',
  components: {
    MainMenu
  }
}
</script>