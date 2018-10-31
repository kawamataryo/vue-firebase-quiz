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
    <loading-panel
        :dialog="pagingWaitDialog"
        comment="皆様の選択が完了するまでこのままお待ち下さい。"
    ></loading-panel>
    <!--回答ボタン-->
    <v-layout
        row
        wrap
    >
      <v-flex xs12 sm6 lg6 md6 v-for="(answer, index) in answers" :key="index">
        <v-btn
            large
            color="#fff"
            block
            :class="['mt-3', 'font-weight-bold', 'answer-btn', `answer-btn-${index}`]"
            @click="toAnswer(questionId, index)"
        >{{answer}}
        </v-btn>
      </v-flex>
    </v-layout>
    <!--オーディエンスボタン-->
    <v-btn
        v-if="!syncUser"
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
    <!--ダイアログ-->
    <v-dialog
        v-model="dialog"
        width="1000"
    >
      <v-card
          color="#fff"
          class="pa-3"
      >
        <v-layout
            row
            wrap
            align-end
        >
          <!--制限時間表示タイマー-->
          <v-flex xs12 sm6>
            <question-timer></question-timer>
          </v-flex>
          <!--オーディエンスグラフ-->
          <v-flex xs12 sm6>
            <audience-graph
                :question-id="questionId"
                :dialog="dialog"
            ></audience-graph>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import {db} from '../plugins/firebase'
  import QuestionTimer from '../components/Timer'
  import LoadingPanel from '../components/LoadingPanel'
  import AudienceGraph from '../components/AudienceGraph'

  export default {
    name: "SyncQuestion",
    components: {
      loadingPanel: LoadingPanel,
      questionTimer: QuestionTimer,
      audienceGraph: AudienceGraph,
    },
    data: () => ({
      dialog: false,
      pagingWait: [],
      pagingWaitDialog: false,
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
        pagingWait: db.collection('waitStatus').orderBy("createdAt", "desc").limit(1),
      }
    },
    methods: {
      // オーディエンス表示
      showAudience: function () {
        this.dialog = true
      },
      // 回答への遷移
      toAnswer: function (questionId, index) {
        this.answer.questionId = questionId
        this.answer.answerId = index
        // 画面遷移制御ユーザーじゃなかったらそのまま回答画面へ
        if (!this.syncUser) {
          this.$router.push(
              {path: `/question/${this.answer.questionId}/answer/${this.answer.answerId}`})
        }
        // 集計中アイコンを表示
        this.pagingWaitDialog = true
      },
    },
    watch: {
      // 画面遷移制御のユーザーはfirebaseのレコード編集をトリガーに画面遷移を実行
      pagingWait: function () {
        if (this.pagingWaitDialog) {
          this.$router.push(
              {path: `/question/${this.answer.questionId}/answer/${this.answer.answerId}`})
        }
      }
    }
  }
</script>

<style lang="scss">
  .answer-btn {
    padding-left: 50px;
    position: relative;
    border: 2px solid #FFD700 !important;
    border-radius: 5px;
    &::after {
      content: "";
      width: 38px;
      height: 38px;
      font-size: 26px;
      background-color: red;
      color: #fff;
      border-radius: 50%;
      position: absolute;
      left: 2%;
    }
    &.answer-btn-0 {
      &::after {
        content: "A";
      }
    }

    &.answer-btn-1 {
      &::after {
        content: "B";
      }
    }

    &.answer-btn-2 {
      &::after {
        content: "C";
      }
    }

    &.answer-btn-3 {
      &::after {
        content: "D";
      }
    }
  }


</style>
