<template>
  <div>
    <v-icon large black v-if="isCorrect">panorama_fish_eye</v-icon>
    <v-icon large black v-if="!isCorrect">clear</v-icon>
    <h2>番号{{parseInt(correctAnswer) + 1}}</h2>
    <h2>{{answerText}}</h2>
    <v-btn
        v-if="nextQuestion"
        large
        outline
        :to="'/question/' + nextQuestion"
    >次の問題へ
    </v-btn>
    <v-btn
        v-if="!nextQuestion"
        large
        outline
        to="/result"
    >結果
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: "Answer",
    computed: {
      questionId: function () {
        return this.$route.params.question
      },
      answerNumber: function () {
        return this.$route.params.answer
      },
      nextQuestion: function () {
        return this.$store.state.questions[this.questionId].nextQuestion
      },
      correctAnswer: function () {
        return this.$store.state.questions[this.questionId].correctAnswer
      },
      answerText: function () {
        return this.$store.state.questions[this.questionId].answers[this.correctAnswer]
      },
      isCorrect: function () {
        return this.correctAnswer == this.answerNumber
      },
    },
    mounted() {
      if (this.isCorrect) {
        this.$store.commit('addScore', 10)
      }
    }
  }
</script>

<style scoped>

</style>