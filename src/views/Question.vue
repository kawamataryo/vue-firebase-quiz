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
    {{[audience1.length, audience2.length, audience3.length, audience4.length]}}
    {{audience}}
  </div>
</template>

<script>
  import {db} from '../plugins/firebase';

  export default {
    name: "Question",
    data: () => ({
       dialog: true
    }),
    computed: {
      questionId: function () {
        return this.$route.params.question
      },
      problem: function () {
        return this.$store.state.questions[this.questionId].problem
      },
      answers: function () {
        return this.$store.state.questions[this.questionId].answers
      },
    },
    firestore() {
      return {
        // firestoreのcommentsコレクションを参照
        audience: db.collection('audience'),
        audience1: db.collection('audience').where("question", "==", this.questionId).where(
            "answer",
            "==", "0"),
        audience2: db.collection('audience').where("question", "==", this.questionId).where(
            "answer",
            "==", "1"),
        audience3: db.collection('audience').where("question", "==", this.questionId).where(
            "answer",
            "==", "2"),
        audience4: db.collection('audience').where("question", "==", this.questionId).where(
            "answer",
            "==", "3"),
      }
    },
  }
</script>

