<template>
  <div class="text-xs-center">
    <!--回答アイコン-->
    <template v-if="isCorrect">
      <v-icon size="200" color="#45A1CF">panorama_fish_eye</v-icon>
      <h1 style="color: #45A1CF;" class="display-2 font-weight-bold">正解</h1>
    </template>
    <template v-if="!isCorrect">
      <v-icon size="200" color="#DA6272" v-if="!isCorrect">clear</v-icon>
      <h1 style="color: #DA6272;" class="display-2 font-weight-bold">不正解</h1>
    </template>
    <!--回答文言-->
    <h2 class="display-1 headline mt-5 font-weight-bold">正解:
      <span class="mb-0 display-1 font-weight-bold mb-1">{{answerNumber + 1}}</span>
    </h2>
    <h2 class="display-1 font-weight-bold" style="font-size: 2rem!important">
      {{answerText}}
      <v-btn @click="showAnswerImage" v-if="answerImages.length > 0" color="primary"
             class="font-weight-bold" fab small>
        <v-icon>image</v-icon>
      </v-btn>
      <v-btn @click="showAnswerMovie" v-if="answerMovieTag !== ''" color="primary"
             class="font-weight-bold" fab small>
        <v-icon>movie</v-icon>
      </v-btn>
    </h2>
    <!--回答動画-->
    <v-dialog
        v-model="answerMovieDialog"
        max-width="900"
    >
      <div v-html="answerMovieTag"></div>
    </v-dialog>
    <!--回答画像-->
    <v-dialog
        v-model="answerImageDialog"
        max-width="900"
    >
      <v-carousel
          height="600"
          class="mt-4"
          :cycle="false"
          hide-delimiters
      >
        <v-carousel-item
            v-for="(img,index) in answerImages"
            :key="index"
            :src="img"
        ></v-carousel-item>
      </v-carousel>
    </v-dialog>
    <!--次へボタン-->
    <v-btn
        v-if="nextQuestion"
        large
        color="#fff"
        block
        class="mt-5 font-weight-bold"
        :to="'/question/' + nextQuestion"
    >次の問題へ
    </v-btn>
    <!--結果ボタン（次の問題がないときのみ表示）-->
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
    name: "Answer",
    data() {
      return {
        answerImageDialog: false,
        answerMovieDialog: false,
      }
    },
    computed: {
      questionId: function () {
        return this.$route.params.question
      },
      answerNumber: function () {
        return parseInt(this.$route.params.answer)
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
      answerImages: function () {
        return this.$store.state.questions[this.questionId].answerImages
      },
      answerMovieTag: function () {
        return this.$store.state.questions[this.questionId].answerMovieTag
      },
      isCorrect: function () {
        return this.correctAnswer === this.answerNumber
      },
    },
    methods: {
      showAnswerMovie: function () {
        this.answerMovieDialog = true
      },
      showAnswerImage: function () {
        this.answerImageDialog = true
      }
    },
    mounted() {
      // scoreのプラス
      if (this.isCorrect) {
        this.$store.commit('addScore', 10)
      }
      //firestoreへの保存
      let now = new Date()
      db.collection('audience').add({
        question: this.questionId,
        answer: this.answerNumber,
        createdAt: now
      })
    }
  }
</script>

<style scoped>

</style>