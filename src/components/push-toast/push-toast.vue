<template>
  <div class="toast" v-show="show" :class="classType">
    <h3 v-if="title.length > 0"><strong>{{ title }}</strong></h3>
    <div class="content">
      <h5>{{ description }}</h5>
      <button class="toast-btn toast-dismiss" v-if="dismiss" @click="dismissToast"><i class="fas fa-times"></i></button>
    </div>
  </div>
</template>

<script>
let timeoutDismiss = null
export default {
  name: 'PushToast',
  props: {
    dismiss: {
      default: false
    }
  },
  data () {
    return {
      title: '',
      description: 'description',
      classType: 'toast-primary',
      show: false
    }
  },
  methods: {
    showToast ({ toastType = 'primary', title = '', description = '' }) {
      this.title = title
      this.description = description
      this.classType = `toast-${toastType}`
      this.show = true
      timeoutDismiss = setTimeout(() => {
        this.show = false
        this.$emit('finish', toastType)
      }, 4000)
    },
    dismissToast () {
      clearTimeout(timeoutDismiss)
      this.show = false
    }
  }
}
</script>
