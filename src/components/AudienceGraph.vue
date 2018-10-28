<template>
  <div>
    <apexcharts
        type="bar"
        v-if="dialog"
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
  </div>
</template>

<script>
  import {db} from '../plugins/firebase'
  import VueApexCharts from 'vue-apexcharts'

  export default {
    name: "AudienceGraph",
    components: {
      apexcharts: VueApexCharts,
    },
    props: ['questionId', 'dialog'],
    data: () => ({
      audience1: [],
      audience2: [],
      audience3: [],
      audience4: [],
    }),
    firestore() {
      return {
        // firestoreのcommentsコレクションを参照
        aggregating: db.collection('adminStatus').limit(1),
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

<style>
  .apexcharts-data-labels {
    font-weight: bold !important;
  }

  .apexcharts-title-text {
    font-weight: bold !important;
  }
</style>
