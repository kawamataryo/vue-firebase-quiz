<template>
  <div>
    <h1 class="display-2 mt-3 font-weight-bold">質問 {{parseInt(questionId) + 1}}</h1>
    <p class="display-1 mt-3 font-weight-bold headline mb-5 text-xs-left text-sm-center"
       v-html="problem"></p>
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
    <v-btn
        color="success"
        dark
        center
        fab
        fixed
        right
        @click="showAudience"
    >
      <v-icon>group</v-icon>
    </v-btn>
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <v-card
          color="#fff"
      >
        <apexcharts
            type="bar"
            :options="{
              grid: {
                show: false,
              },
              chart: {
                width: '100%'
              },
              dataLabels: {
                style: {
                  fontSize: '25px'
                },
              },
              xaxis: {
                categories: [1, 2, 3, 4]
              },
              plotOptions: {
                bar: {
                  horizontal: false
                }
              },
             }"
            :series="[{
              name: '選択数',
              data: [audience1.length, audience2.length, audience3.length, audience4.length]
            }]"
        ></apexcharts>
      </v-card>
    </v-dialog>
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
      dialog: false,
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
    methods: {
      showAudience: function () {
        this.dialog = true
      },
    }
  }
</script>

<style>
  .apexcharts-data-labels {
    font-weight: bold !important;
  }
  .apexcharts-title-text {
    font-weight: bold !important;
  }
</style>
