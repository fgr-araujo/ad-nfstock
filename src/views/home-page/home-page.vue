<template>
  <main class="home-page">
    <full-banner />
    <section class="content">
      <h3 class="hometitle" id="products"></h3>
      <product-detail />

      <h3 class="hometitle" id="parkclass"></h3>
      <pack-class />
      
      <h3 class="hometitle" id="plans">Nossos Planos</h3>
      <plans-price class="plans-price"/>
    </section>

    <contact-form />
    <main-footer />
  </main>
</template>

<script>
import FullBanner from '@/components/full-banner/full-banner'
import ProductDetail from '@/components/product-detail/product-detail'
import PackClass from '@/components/pack-class/pack-class'
import PlansPrice from '@/components/plans-price/plans-price'
import ContactForm from '@/components/contact-form/contact-form'
import MainFooter from '@/components/main-footer/main-footer'

export default {
  name: 'HomePage',
  components: {
    FullBanner,
    ProductDetail,
    PackClass,
    PlansPrice,
    ContactForm,
    MainFooter
  }
}
</script>
