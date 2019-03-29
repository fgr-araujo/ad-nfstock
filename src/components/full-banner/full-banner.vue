<template>
  <section class="full-banner">
    <ul class="carousel">
      <transition-group name="details" tag="li">
        <li class="details-item" v-show="showDetail === 0" key="0">
          <h2 class="title">NF Stock</h2>
          <p class="description">O NF-Stock é um sistema 100% web capaz de buscar, gerenciar e armazenar documentos fiscais de diversos modelos, utilizando o melhor da tecnologia em nuvem contando com armazenamento em nossos servidores pelo prazo legal, otimizando a sua Escrita Fiscal com integração automática com o Fiscal Alterdata.</p>

          <button class="btn -primary">Solicite uma demonstração</button>
          <button class="btn -ghost">Conheça nossos planos</button>
        </li>

        <li class="details-item" v-show="showDetail === 1" key="1">
          <h2 class="title">Depoimento</h2>
        </li>

        <li class="details-item" v-show="showDetail === 2" key="2">
          <h2 class="title">phone</h2>
        </li>
      </transition-group>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'FullBanner',
  data () {
    return {
      showDetail: 0
    }
  },
  mounted () {
    this.changeCarousel()
  },
  methods: {
    changeCarousel() {
      setInterval(() => {
        if (this.showDetail > 1) {
          this.showDetail = 0
        } else {
          this.showDetail++;
        }
      }, 2000)
    }
  }
}
</script>