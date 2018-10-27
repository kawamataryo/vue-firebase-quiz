<template>
  <div>
    <h1>テーブル選択</h1>
    <p>招待状を元に自分たちのテーブルを選択して下さい</p>
      <v-img
          max-width="100px"
          :src="require('../assets/brideAndGroom.png')"
          @click="setTableAndToQuestion(0)"
          style="margin: auto; cursor: pointer;"
          class="mb-3"
      ></v-img>
    <v-layout row wrap>
      <v-flex v-for="i in 16" :key="`${i}`" xs3>
        <v-btn fab large @click="setTableAndToQuestion(i)">
          {{i}}番
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: "selecttable",
    methods: {
      setTableAndToQuestion: function (number) {
        if (number === 0) {
          this.$store.commit('setSyncUser', false)
        }
        this.$store.commit('setTable', number)
        this.$router.push("/question/0")
      }
    }
  };
</script>