<template>
  <div>
    <!--設問-->
    <h1 class="display-2 mt-3 font-weight-bold">質問 {{parseInt(questionId) + 1}}</h1>
    <p class="display-1 mt-3 font-weight-bold headline mb-5 text-xs-left text-sm-center"
       v-html="problem"></p>
    <!--質問イメージ画像-->
    <v-img
        v-if="questionImage"
        :src="questionImage"
        :lazy-src="questionImage"
    >
      <v-layout
          slot="placeholder"
          fill-height
          align-center
          justify-center
          ma-0
      >
        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
      </v-layout>
    </v-img>
    <!--集計中ダイアログ-->
    <v-dialog
        v-model="aggregatingIcon"
        persistent
        width="400"
    >
      <v-card
          color="white"
      >
        <v-card-text>
          <h2>集計中</h2>
          <p>回答が出揃うまでお待ちください。</p>
          <v-progress-linear
              indeterminate
              color="primary"
              class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!--回答ボタン-->
    <div v-for="(answer, index) in answers" :key="index">
      <v-btn
          large
          color="#fff"
          block
          class="mt-3 font-weight-bold"
          @click="toAnswer(questionId, index)"
      >{{answer}}
      </v-btn>
    </div>
    <!--オーディエンスボタン-->
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
    <!--オーディエンスグラフ-->
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
  import LoadingPanel from '../components/LoadingPanel'

  export default {
    name: "SyncQuestion",
    components: {
      apexcharts: VueApexCharts,
      loadingPanel: LoadingPanel
    },
    data: () => ({
      dialog: false,
      audience1: [],
      audience2: [],
      audience3: [],
      audience4: [],
      aggregating: [],
      aggregatingIcon: false,
      answer: {
        questionId: 0,
        answerId: 0,
      }
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
      questionImage: function () {
        return this.$store.state.questions[this.questionId].questionImage
      },
      syncUser: function () {
        return this.$store.state.syncUser
      }
    },
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
    methods: {
      showAudience: function () {
        this.dialog = true
      },
      toAnswer: function (questionId, index) {
        // 画面遷移制御ユーザーじゃなかったらそのまま回答画面へ
        if (!this.syncUser) {
          this.$router.push(
              {path: `/question/${this.answer.questionId}/answer/${this.answer.answerId}`})
        }
        // 集計中アイコンを表示
        this.aggregatingIcon = true
        this.answer.questionId = questionId
        this.answer.answerId = index
      },
    },
    watch: {
      // 画面遷移制御のユーザーはfirebaseのレコード編集をトリガーに画面遷移を実行
      aggregating: function () {
        if (this.aggregatingIcon) {
          this.$router.push(
              {path: `/question/${this.answer.questionId}/answer/${this.answer.answerId}`})
        }
      }
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
