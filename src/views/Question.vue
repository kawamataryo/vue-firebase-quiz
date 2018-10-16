<template>
  <div>
    <h1>質問 {{parseInt(questionId) + 1}}</h1>
    <p>{{problem}}</p>
    <div v-for="(answer, index) in answers" :key="index">
      <v-btn
          large
          outline
          :to="'/question/' + questionId + '/answer/' + index"
      >{{answer}}
      </v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Question",
    computed: {
      questionId: function () {
        return this.$route.params.question
      },
      problem: function () {
        return this.$store.state.questions[this.questionId].problem
      },
      answers: function () {
        return this.$store.state.questions[this.questionId].answers
      }
    },
  }
</script>

