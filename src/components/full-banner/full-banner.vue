<template>
  <section class="full-banner">
    <div class="background">
      <svg class="clouds cloud1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="512" height="512" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
        <path id="cloud-icon" d="M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"/>
      </svg>
      <svg class="clouds cloud2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="512" height="512" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
        <path id="cloud-icon" d="M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"/>
      </svg>
      <svg class="clouds cloud3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="512" height="512" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
        <path id="cloud-icon" d="M406.1 227.63c-8.23-103.65-144.71-137.8-200.49-49.05 -36.18-20.46-82.33 3.61-85.22 45.9C80.73 229.34 50 263.12 50 304.1c0 44.32 35.93 80.25 80.25 80.25h251.51c44.32 0 80.25-35.93 80.25-80.25C462 268.28 438.52 237.94 406.1 227.63z"/>
      </svg>
    </div>

    <div class="tabletdevices">
      <img class="device" src="@/assets/images/cms-for-tablets.png" alt="">
      <img class="code" src="@/assets/images/cms-for-tablets-code.png" alt="">
      <img class="ui" src="@/assets/images/cms-for-tablets-ui.png" alt="">
    </div>
    
    <div class="mobiledevices">
      <img class="device" src="@/assets/images/cms-for-mobile.png" alt="">
      <img class="code" src="@/assets/images/cms-for-mobile-code.png" alt="">
      <img class="ui" src="@/assets/images/cms-for-mobile-ui.png" alt="">
    </div>

    <ul class="carousel">
      <li class="details" v-show="showDetail === 0" key="0">
        <h2 class="title">Seus documentos fiscais ainda melhor organizados</h2>
        <p class="description">O NF-Stock é um sistema 100% web capaz de buscar, gerenciar e armazenar documentos fiscais de diversos modelos.</p>

        <a class="button -primary" href="https://www.alterdata.com.br/faleconosco/?pg=views/demo-pedido&sisdm=nfstock">Solicite uma demonstração</a>
        <a class="button -ghost" href="#plans">Conheça nossos planos</a>
      </li>
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
      // setInterval(() => {
      //   if (this.showDetail > 1) {
      //     this.showDetail = 0
      //   } else {
      //     this.showDetail++;
      //   }
      // }, 2000)
    }
  }
}
</script>