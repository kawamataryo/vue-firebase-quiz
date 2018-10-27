<template>
  <div class="text-xs-center">
    <template v-if="isCorrect">
      <v-icon size="250" color="#45A1CF">panorama_fish_eye</v-icon>
      <h1 style="color: #45A1CF;" class="display-2 font-weight-bold">正解</h1>
    </template>
    <template v-if="!isCorrect">
      <v-icon size="250" color="#DA6272" v-if="!isCorrect">clear</v-icon>
      <h1 style="color: #DA6272;" class="display-2 font-weight-bold">不正解</h1>
    </template>
    <h2 class="display-1 mt-5 font-weight-bold"><span class="headline font-weight-bold">正解:</span>
      {{answerText}}</h2>
    <v-btn
        v-if="nextQuestion"
        large
        color="#fff"
        block
        class="mt-5 font-weight-bold"
        :to="`/sync/question/${nextQuestion}`"
    >次の問題へ
    </v-btn>
    <v-btn
        v-if="!nextQuestion"
        large
        color="#fff"
        block
        class="mt-3 font-weight-bold"
        to="/result"
    >結果
    </v-btn>
  </div>
</template>

<script>
  import {db} from '../plugins/firebase';

  export default {
    name: "SyncAnswer",
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
      // scoreのプラス
      if (this.isCorrect) {
        this.$store.commit('addScore', 10)
      }
      //firestoreへの保存
      db.collection('audience').add({
        question: this.questionId,
        answer: this.answerNumber
      })
    }
  }
</script>

<style scoped>

</style>