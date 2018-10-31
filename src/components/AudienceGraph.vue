<template>
  <div>
    <apexcharts
        type="bar"
        v-if="dialog"
        :options="{
              grid: {
                show: true,
              },
              chart: {
                width: '100%',
                height: '464px',
              },
              dataLabels: {
                style: {
                  fontSize: '20px',
                },
              },
              xaxis: {
                categories: ['A', 'B', 'C', 'D'],
                labels: {
                  style: {
                    fontSize: '25px',
                  }
                }
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
      let now = new Date()
      let minus60 = new Date(now.setMinutes(now.getMinutes() - 60))
      return {
        // firestoreのcommentsコレクションを参照
        pagingWait: db.collection('waitStatus').limit(1),
        audience1: db.collection('audience').where("question", "==", this.questionId).where(
            "answer",
            "==", "0").where("createdAt", ">=", minus60),
        audience2: db.collection('audience').where("question", "==", this.questionId).where(
            "answer",
            "==", "1").where("createdAt", ">=", minus60),
        audience3: db.collection('audience').where("question", "==", this.questionId).where(
            "answer",
            "==", "2").where("createdAt", ">=", minus60),
        audience4: db.collection('audience').where("question", "==", this.questionId).where(
            "answer",
            "==", "3").where("createdAt", ">=", minus60),
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
