<template>
  <div>
    <img src="@/assets/top-pc.png" class="top-image hidden-xs-only">
    <img src="@/assets/top.png" class="top-image mt-4 hidden-sm-and-up">
    <div>
      <router-link to="/selecttable">
        <img src="@/assets/button.png" class="top-button mt-4">
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    mounted() {
      this.$store.commit('initScore')
    },
  }
</script>

<style>
  .top-image, .top-button {
    max-width: 100%
  }
</style>
