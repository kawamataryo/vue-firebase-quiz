<template>
  <div>
    <p class="display-1 mt-3 font-weight-bold headline">{{teamName}} の結果は</p>
    <h1 class="display-4 mt-3 font-weight-bold">{{score}}<span
        class="headline font-weight-bold">点</span></h1>
    <v-btn
        large
        color="#fff"
        block
        class="mt-3 font-weight-bold"
        @click="showGraph"
    >全体結果
    </v-btn>
    <v-dialog
        v-model="dialog"
        width="800"
    >
      <v-card
          color="#fff"
      >
        <apexcharts
            type="bar"
            :options="{
              chart: {
                width: '100%'
              },
              dataLabels: {
                enabled: true,
                style: {
                  fontSize: '20px'
                },
              },
              xaxis: {
                categories: labels,
                labels: {
                  style: {
                    fontSize: '20px',
                  }
                }
              },
              plotOptions: {
                bar: {
                  horizontal: true
                }
              },
             }"
            :series="[{
              name: '得点',
              data: scoreData
            }]"
        ></apexcharts>
      </v-card>
    </v-dialog>
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
  import {db} from '../plugins/firebase'
  import VueApexCharts from 'vue-apexcharts'

  export default {
    name: "Result",
    components: {
      apexcharts: VueApexCharts,
    },
    data() {
      return {
        scores: [],
        scoreData: [],
        labels: [],
        dialog: false
      }
    },
    computed: {
      score: function () {
        return this.$store.state.score
      },
      teamName: function () {
        return this.$store.state.tableNumber === 0 ? "新婦" : `${this.$store.state.tableNumber}番テーブル`
      }
    },
    mounted() {
      const now = new Date()
      // 集計結果を送信
      db.collection('result').add({
        team: this.teamName,
        score: this.score,
        createdAt: now
      })
    },
    firestore() {
      let now = new Date()
      let minus60 = new Date(now.setMinutes(now.getMinutes() - 60))
      return {
        // firestoreのcommentsコレクションを参照（作成が60分前以降の）
        scores: db.collection('result').where("createdAt", ">", minus60)
      }
    },
    methods: {
      // グラフを表示
      showGraph: function () {
        let sortedScore = this.sortScoreDesc(this.scores)
        this.scoreData = sortedScore.map(function (record) {
          return record.score
        })
        this.labels = sortedScore.map(function (record) {
          return record.team
        })
        this.dialog = true
      },
      // スコアの降順に並び替え
      sortScoreDesc: function (scores) {
        return scores.sort(function (a, b) {
          if (a.score > b.score) {
            return -1;
          }
          if (a.score < b.score) {
            return 1;
          }
          return 0;
        })
      }
    }
  }
</script>

