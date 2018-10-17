<template>
  <div>
    <img src="@/assets/homeTitle.png" class="top-image">
    <v-btn
        large
        color="#fff"
        block
        class="mt-3 font-weight-bold"
        to="/question/0"
    >問題スタート
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'home',
    mounted() {
      this.$store.commit('initScore')
    }
  }
</script>

<style>
  .top-image {
    max-width: 100%
  }
</style>
