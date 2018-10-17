<template>
  <div>
    <h1 class="display-2 mt-3 font-weight-bold">質問 {{parseInt(questionId) + 1}}</h1>
    <p class="display-1 mt-3 font-weight-bold headline">{{problem}}</p>
    <div v-for="(answer, index) in answers" :key="index">
      <v-btn
          large
          color="#fff"
          block
          class="mt-3 font-weight-bold"
          :to="'/question/' + questionId + '/answer/' + index"
      >{{answer}}
      </v-btn>
    </div>
    <bars
        :data="[0,audience1.length, audience2.length, audience3.length, audience4.length]"
        :gradient="['#6fa8dc', '#42b983']">
      >
    </bars>
    {{[audience1.length, audience2.length, audience3.length, audience4.length]}}
  </div>
</template>

<script>
  import {db} from '../plugins/firebase'
  import VueApexCharts from 'vue-apexcharts'

  export default {
    name: "Question",
    components: {
      apexcharts: VueApexCharts,
    },
    data: () => ({
      dialog: true,
      audience1: [],
      audience2: [],
      audience3: [],
      audience4: [],
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

