<template>
  <div>
    <img src="@/assets/top.png" class="top-image mt-5">
    <v-btn
        large
        color="#FEAE05"
        block
        dark
        class="mt-3 font-weight-bold"
        to="/question/0"
    ><v-icon v-icon color="#fff" left>touch_app</v-icon>
      タッチスタート
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
