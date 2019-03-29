<template>
  <section class="product-detail">
    <div class="product">
      <h2 class="title">Tecnologia</h2>
      <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quis labore! Maxime voluptate aut impedit nisi delectus unde, ipsum doloribus odit aliquam consequatur sapiente harum id soluta quis amet eligendi.</p>
    </div>

    <div class="product">
      <h2 class="title">Produtividade</h2>
      <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quis labore! Maxime voluptate aut impedit nisi delectus unde, ipsum doloribus odit aliquam consequatur sapiente harum id soluta quis amet eligendi.</p>
    </div>

    <div class="product">
      <h2 class="title">Segurança</h2>
      <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quis labore! Maxime voluptate aut impedit nisi delectus unde, ipsum doloribus odit aliquam consequatur sapiente harum id soluta quis amet eligendi.</p>
    </div>
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