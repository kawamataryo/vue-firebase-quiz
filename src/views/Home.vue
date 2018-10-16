<template>
  <div>
    <h1>ホーム</h1>
    <v-btn
        large
        outline
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
