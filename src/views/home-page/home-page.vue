<template>
  <main class="home-page">
    <product-detail />

    <pack-class />

    <plans-price />

    <contact-form />

    <main-footer />
  </main>
</template>

<script>
import ProductDetail from '@/components/product-detail/product-detail'
import PackClass from '@/components/pack-class/pack-class'
import PlansPrice from '@/components/plans-price/plans-price'
import ContactForm from '@/components/contact-form/contact-form'
import MainFooter from '@/components/main-footer/main-footer'

export default {
  name: 'HomePage',
  components: {
    ProductDetail,
    PackClass,
    PlansPrice,
    ContactForm,
    MainFooter
  }
}
</script>
