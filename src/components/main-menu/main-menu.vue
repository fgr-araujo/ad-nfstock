<template>
  <nav class="main-menu -opaque">
    <icon-menu class="icon" />
    <ul class="list -popup">
      <li class="item">Produto</li>
      <li class="item">ParkClass</li>
      <li class="item">Planos</li>
      <li class="item">Contato</li>
      <li class="item">Login</li>
      <li class="item">Registrar</li>
    </ul>

    <ul class="list -largescreen">
      <li class="item"><router-link to="home">Produto</router-link></li>
      <li class="item"><router-link to="home">ParkClass</router-link></li>
      <li class="item"><router-link to="home">Plano</router-link>s</li>
      <li class="item"><router-link to="home">Contato</router-link></li>
      <li class="item"><router-link to="home">Login</router-link></li>
      <li class="item"><router-link to="home">Registrar</router-link></li>
    </ul>
  </nav>
</template>

<script>
  import { IconMenu } from '@/components/icons'

  export default {
    name: 'MainMenu',
    components: {
      IconMenu
    }
  }
</script>