<template>
  <div>
    <p>あなたの結果は</p>
    <h1>{{score}}</h1>
    <v-btn
        large
        outline
        to="/"
    >トップへ戻る
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: "Result",
    computed: {
      score: function () {
        return this.$store.state.score
      }
    }
  }
</script>

