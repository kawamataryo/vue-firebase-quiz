<template>
  <div>
    <p  class="display-1 mt-3 font-weight-bold headline">あなたの結果は</p>
    <h1 class="display-4 mt-3 font-weight-bold">{{score}}<span class="headline font-weight-bold">点</span></h1>
    <v-btn
        large
        color="#fff"
        block
        class="mt-3 font-weight-bold"
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

