<template>
  <div>
    <img src="@/assets/top.png" class="top-image mt-4">
    <!--<v-btn-->
        <!--large-->
        <!--color="#FEAE05"-->
        <!--block-->
        <!--dark-->
        <!--class="mt-3 font-weight-bold"-->
        <!--to="/question/0"-->
    <!--&gt;-->
      <!--<v-icon v-icon color="#fff" left>touch_app</v-icon>-->
      <!--タッチスタート-->
    <!--</v-btn>-->
    <router-link to="/question/0">
      <img src="@/assets/button.png" class="top-button mt-4">
    </router-link>

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
  .top-image, .top-button {
    max-width: 100%
  }
</style>
